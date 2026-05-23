import feedparser
import os
import re
from datetime import datetime
import time
from google import genai

# Configuration
POSTS_DIR = '_posts'

# Pro-Tip: Swap these out for the specific academic journals you want to follow
FEEDS = [
    {
        "name": "FoodSafetyPubmed", 
        "url": "https://pubmed.ncbi.nlm.nih.gov/rss/search/1nCmaYatDJZTUz0L9PuHKPKRZnjExHsVXMnC1T17KNeUQAgkg5/?limit=15&utm_campaign=pubmed-2&fc=20260523012635"
    }
]

def generate_tags(title, summary):
    """Automatically assigns tags based on keywords."""
    text = (title + " " + summary).lower()
    tags = ["Food Safety"]
    
    if "recall" in text or "outbreak" in text: tags.append("Alert")
    if "salmonella" in text or "listeria" in text or "e. coli" in text: tags.append("Pathogens")
    if "study" in text or "research" in text or "journal" in text: tags.append("Research")
        
    return tags

def slugify(text):
    """Converts a title into a clean, URL-friendly filename."""
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    return re.sub(r'[-\s]+', '-', text)

def process_and_classify(text, raw_title):
    """Sends the text to Gemini to format italics, translate, and classify."""
    default_summary = "No summary available."
    default_category = "other"
    
    if not text or len(text) < 20:
        return raw_title, default_summary, default_category
    
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        return raw_title, text, default_category

    try:
        client = genai.Client(api_key=api_key)
        
        prompt = (
            "You are an expert science communicator and academic editor. Review this title and abstract:\n"
            f"Title: {raw_title}\n"
            f"Abstract: {text}\n\n"
            "Perform three tasks:\n"
            "1. Format the title: Ensure any biological species names are italicized using Markdown asterisks.\n"
            "2. Classify: Assign the paper to exactly ONE category: 'food safety', 'food quality', or 'other'.\n"
            "3. Summarize: Write a 3-sentence summary of the abstract at a 5th-grade reading level.\n\n"
            "CRITICAL RULES:\n"
            "- You MUST use Markdown italics (*word*) for all biological species names in both the TITLE and SUMMARY.\n"
            "- You MUST always italicize the journal name *Trophos Science of Food* if it appears.\n\n"
            "Respond exactly in this format:\n"
            "TITLE: [formatted title]\n"
            "CATEGORY: [category]\n"
            "SUMMARY: [summary]"
        )
        
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        
        response_text = response.text.strip()
        
        # Parse the structured response using regex to avoid splitting errors
        title_match = re.search(r'TITLE:\s*(.*)', response_text)
        cat_match = re.search(r'CATEGORY:\s*(.*)', response_text)
        sum_match = re.search(r'SUMMARY:\s*(.*)', response_text, re.DOTALL)
        
        # Extract the new title (or fallback to original if parsing fails)
        formatted_title = title_match.group(1).strip() if title_match else raw_title
        
        # Extract and validate category
        category_raw = cat_match.group(1).strip().lower() if cat_match else "other"
        if "safety" in category_raw: category = "food safety"
        elif "quality" in category_raw: category = "food quality"
        else: category = "other"
        
        # Extract summary
        summary = sum_match.group(1).strip() if sum_match else response_text
            
        return formatted_title, summary, category
        
    except Exception as e:
        print(f"  -> AI error: {e}")
        return raw_title, text, default_category


def process_feeds():
    if not os.path.exists(POSTS_DIR):
        os.makedirs(POSTS_DIR)

    for feed_info in FEEDS:
        print(f"Fetching {feed_info['name']}...")
        
        try:
            feed = feedparser.parse(feed_info["url"])
            
            # Limit to the 5 most recent entries so you don't burn through API limits
            for entry in feed.entries[:5]: 
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    pub_date = datetime.fromtimestamp(time.mktime(entry.published_parsed))
                else:
                    pub_date = datetime.now()
                
                date_str = pub_date.strftime('%Y-%m-%d')
                title = entry.title
                
                slug = slugify(title)[:60]
                filename = f"{date_str}-{slug}.md"
                filepath = os.path.join(POSTS_DIR, filename)
                
                # Pro-Tip: Skip files we've already generated
                if os.path.exists(filepath):
                    print(f"  -> Skipping (already exists): {filename}")
                    continue
                    
                # Generate tags based on content
                summary = entry.get('summary', entry.get('description', ''))
                tags_list = generate_tags(title, summary)
                tags_string = ", ".join(tags_list)
                
                print(f"  -> AI is processing, formatting, and translating: {title[:30]}...")
                
                # Unpack the 3 variables returned by our new function
                formatted_title, kid_friendly_summary, category = process_and_classify(summary, title)
                
                # Write the Jekyll/Hugo compatible Markdown file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write("---\n")
                    f.write(f"layout: post\n")
                    # We inject the formatted_title here instead of the raw title
                    f.write(f"title: \"{formatted_title.replace('\"', '\\\"')}\"\n")
                    f.write(f"date: {pub_date.strftime('%Y-%m-%d %H:%M:%S')}\n")
                    f.write(f"tags: {tags_string}\n")
                    f.write(f"categories: {category}\n")
                    f.write("---\n\n")
                    f.write("### The Quick Summary\n\n")
                    f.write(f"{kid_friendly_summary}\n\n")
                    f.write("---\n\n")
                    f.write("### Original Abstract\n\n")
                    f.write(f"> {summary[:600]}...\n\n")
                    f.write(f"**[Read the full peer-reviewed publication here]({entry.link})**\n")
                    
                print(f"  -> Created new post: {filename}")
                time.sleep(2) # Pause briefly to respect API rate limits
                
        except Exception as e:
            print(f"  -> Error processing feed {feed_info['name']}: {e}")

if __name__ == "__main__":
    process_feeds()