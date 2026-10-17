# Install packages if needed: install.packages(c("bib2df", "stringr", "dplyr"))
library(bib2df)
library(stringr)
library(dplyr)

# ==============================================================================
# 1. CONFIGURATION & FILE PATHS
# ==============================================================================
bib_path <- "./publications/cite.bib" 
out_dir  <- "./publications"

# Map HugoBlox author profile folder slugs (in content/authors/<slug>/) to full names.
# Add any other lab members or co-authors here if they also have bio folders on your site.
site_profiles <- c(
  "nodali" = "Nodali Ndraha"
)

# ==============================================================================
# 2. FIX "INCOMPLETE FINAL LINE" WARNING & READ BIBTEX
# ==============================================================================
raw_lines <- readLines(bib_path, warn = FALSE, encoding = "UTF-8")
writeLines(raw_lines, bib_path, useBytes = TRUE)

bib_data <- bib2df(bib_path)

# ==============================================================================
# 3. HELPER: CONVERT <em>...</em> TO UNICODE ITALICS FOR HUGOBLOX TITLES
# ==============================================================================
to_unicode_italic <- function(text) {
  if (is.na(text) || text == "") return("")
  italic_map <- c(
    setNames(intToUtf8(0x1D608 + 0:25, multiple = TRUE), LETTERS),
    setNames(intToUtf8(0x1D622 + 0:25, multiple = TRUE), letters)
  )
  
  str_replace_all(text, "<em>(.*?)</em>", function(matches) {
    vapply(matches, function(m) {
      inner <- str_replace_all(m, "</?em>", "")
      chars <- str_split(inner, "")[[1]]
      paste0(ifelse(chars %in% names(italic_map), italic_map[chars], chars), collapse = "")
    }, character(1), USE.NAMES = FALSE)
  })
}

# ==============================================================================
# 4. UNIVERSAL AUTHOR PARSER & DISAMBIGUATION ENGINE
# ==============================================================================
parse_bib_name <- function(raw_name) {
  clean <- str_squish(str_replace_all(raw_name, "[{}]", ""))
  
  # Split into Family and Given names whether formatted "Last, First" or "First Last"
  if (str_detect(clean, ",")) {
    parts  <- str_trim(str_split(clean, ",", n = 2)[[1]])
    family <- parts[1]
    given  <- parts[2]
  } else {
    words <- str_split(clean, "\\s+")[[1]]
    if (length(words) == 1) {
      family <- words[1]
      given  <- ""
    } else {
      family <- tail(words, 1)
      given  <- paste(head(words, -1), collapse = " ")
    }
  }
  
  # Extract every initial from the given name (e.g., "Hung-Yun" -> "HY", "H.-Y." -> "HY")
  given_tokens <- str_split(given, "[\\s.-]+")[[1]]
  given_tokens <- given_tokens[given_tokens != ""]
  initials     <- paste0(toupper(str_sub(given_tokens, 1, 1)), collapse = "")
  
  # Check if the given name contains full words (e.g. "Nodali", "Ema") vs only initials ("N.", "E.")
  is_full_given <- any(str_length(given_tokens) > 1)
  
  # Create a strict composite key: family_initials (e.g., "ndraha_n" vs "ndraha_v", "lin_hy" vs "lin_hj")
  comp_key <- paste0(tolower(family), "_", tolower(initials))
  
  list(
    family       = family,
    given        = given,
    initials     = initials,
    key          = comp_key,
    full_display = str_squish(paste(given, family)),
    is_full      = is_full_given
  )
}

# Build a master dictionary across all papers in cite.bib
# If an author appears as "E. Damayanti" in one paper and "Damayanti, Ema" in another,
# this upgrades "damayanti_e" to "Ema Damayanti" while never mixing different initials!
all_raw_authors <- unique(unlist(bib_data$AUTHOR))
parsed_list     <- lapply(all_raw_authors, parse_bib_name)

author_dict <- list()
for (p in parsed_list) {
  existing <- author_dict[[p$key]]
  if (is.null(existing) || (p$is_full && !existing$is_full)) {
    author_dict[[p$key]] <- p
  }
}

# Compute composite keys for any HugoBlox site profiles (e.g. "nodali" -> "ndraha_n")
profile_keys <- setNames(
  sapply(site_profiles, function(nm) parse_bib_name(nm)$key),
  names(site_profiles)
)

clean_paper_authors <- function(author_vec) {
  sapply(author_vec, function(a) {
    p <- parse_bib_name(a)
    
    # 1. Check if (family + initials) matches a site profile slug
    matched_slug <- names(profile_keys)[profile_keys == p$key]
    if (length(matched_slug) > 0) {
      return(matched_slug[1])
    }
    
    # 2. Otherwise return the standardized full name for that exact (family + initials) key
    if (!is.null(author_dict[[p$key]])) {
      return(author_dict[[p$key]]$full_display)
    }
    
    return(p$full_display)
  }, USE.NAMES = FALSE)
}

# ==============================================================================
# 5. GENERATE INDIVIDUAL PUBLICATION FOLDERS, INDEX.MD & CITE.BIB
# ==============================================================================
for (i in seq_len(nrow(bib_data))) {
  row <- bib_data[i, ]
  
  # Create clean folder name from BibTeX key
  slug    <- str_replace_all(tolower(row$BIBTEXKEY), "[^a-z0-9-]", "-")
  pub_dir <- file.path(out_dir, slug)
  dir.create(pub_dir, recursive = TRUE, showWarnings = FALSE)
  
  # Map BibTeX CATEGORY to HugoBlox CSL publication_types
  cat_type <- toupper(row$CATEGORY)
  pub_type <- case_when(
    cat_type == "ARTICLE"       ~ "article-journal",
    cat_type == "INCOLLECTION"  ~ "chapter",
    cat_type == "INPROCEEDINGS" ~ "paper-conference",
    cat_type == "CONFERENCE"    ~ "paper-conference",
    cat_type == "PHDTHESIS"     ~ "thesis",
    TRUE                        ~ "article"
  )
  
  # Disambiguate and format all authors for this paper
  authors_clean <- clean_paper_authors(unlist(row$AUTHOR))
  
  # Map BibTeX "selected = {true}" to HugoBlox "featured: true"
  is_featured <- "false"
  if ("SELECTED" %in% names(row) && !is.na(row$SELECTED)) {
    if (tolower(as.character(row$SELECTED)) == "true") is_featured <- "true"
  }
  
  # Format Title (convert <em> tags to Unicode italics & strip braces)
  clean_title <- row$TITLE %>%
    to_unicode_italic() %>%
    str_replace_all("[{}]", "") %>%
    str_replace_all("\"", "'")
  
  # Format Venue (Journal or Booktitle)
  venue <- ifelse(!is.na(row$JOURNAL), row$JOURNAL, 
                  ifelse(!is.na(row$BOOKTITLE), row$BOOKTITLE, ""))
  venue <- str_replace_all(venue, "[{}]", "")
  
  # Format Date (YYYY-MM-DD)
  yr       <- ifelse(!is.na(row$YEAR), as.character(row$YEAR), "2026")
  pub_date <- paste0(yr, "-01-01")
  
  # Format Abstract (convert <em> to Markdown *italics* and strip special spaces)
  abstr <- ""
  if ("ABSTRACT" %in% names(row) && !is.na(row$ABSTRACT)) {
    abstr <- row$ABSTRACT %>%
      str_replace_all("</?em>", "*") %>%
      str_replace_all("[\"{}]", "") %>%
      str_replace_all("[\\u00A0\\u202F]", " ")
  }
  
  # Optional HTML source link from your cite.bib
  url_source <- ""
  if ("HTML" %in% names(row) && !is.na(row$HTML)) {
    url_source <- row$HTML
  }
  
  # Build YAML frontmatter for index.md
  md_content <- paste0(
    "---\n",
    "title: \"", clean_title, "\"\n",
    "date: \"", pub_date, "\"\n",
    "authors:\n", paste0("  - \"", authors_clean, "\"", collapse = "\n"), "\n",
    "publication_types: [\"", pub_type, "\"]\n",
    "publication: \"*", venue, "*\"\n",
    "doi: \"", ifelse(!is.na(row$DOI), row$DOI, ""), "\"\n",
    "abstract: \"", abstr, "\"\n",
    "featured: ", is_featured, "\n",
    if (url_source != "") paste0("links:\n  - type: source\n    url: \"", url_source, "\"\n") else "",
    "---\n"
  )
  
  # Write index.md
  writeLines(md_content, file.path(pub_dir, "index.md"), useBytes = TRUE)
  
  # Write clean individual cite.bib for the paper's "Cite" button
  std_cols <- intersect(names(row), c("CATEGORY", "BIBTEXKEY", "AUTHOR", "TITLE", 
                                      "JOURNAL", "BOOKTITLE", "YEAR", "VOLUME", 
                                      "NUMBER", "PAGES", "DOI", "ISSN", "PUBLISHER"))
  df2bib(row[, std_cols], file = file.path(pub_dir, "cite.bib"))
}

message("Done! Successfully generated ", nrow(bib_data), " publication folders in ", out_dir)
