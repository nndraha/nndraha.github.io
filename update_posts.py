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

def translate_and_classify(text, title):
    """Sends the dense academic abstract to Gemini for translation and category assignment."""
    default_summary = "No summary available."
    default_category = "other"
    
    if not text or len(text) < 20:
        return default_summary, default_category
    
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        return text, default_category

    try:
        client = genai.Client(api_key=api_key)
        
        # We prompt Gemini to give us a specific format we can easily split in Python
        prompt = (
            "You are an expert science communicator and academic editor. Review this title and abstract:\n"
            f"Title: {title}\n"
            f"Abstract: {text}\n\n"
            "Perform two tasks:\n"
            "1. Classify this paper into exactly ONE of these three categories: 'food safety', 'food quality', or 'other'. Use lowercase.\n"
            "2. Summarize the text into 3 simple sentences that a 5th grader can understand.\n\n"
            "Respond exactly in this format:\n"
            "CATEGORY: [insert category here]\n"
            "SUMMARY: [insert summary here]"
        )
        
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        
        response_text = response.text.strip()
        
        # Parse the structured response
        category = default_category
        summary = response_text
        
        if "CATEGORY:" in response_text and "SUMMARY:" in response_text:
            parts = response_text.split("SUMMARY:")
            summary = parts[1].strip()
            category_part = parts[0].replace("CATEGORY:", "").strip().lower()
            
            # Validation match ensure it hits your specific categories
            if "safety" in category_part:
                category = "food safety"
            elif "quality" in category_part:
                category = "food quality"
            else:
                category = "other"
                
        return summary, category
        
    except Exception as e:
        print(f"  -> AI error: {e}")
        return text, default_category

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
                # Convert the list ['Food Safety', 'Research'] into a clean comma-separated string: Food Safety, Research
                tags_string = ", ".join(tags_list)
                
                print(f"  -> AI is translating and classifying: {title[:30]}...")
                kid_friendly_summary, category = translate_and_classify(summary, title)
                
                # Write the Jekyll/Hugo compatible Markdown file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write("---\n")
                    f.write(f"layout: post\n")
                    f.write(f"title: \"{title.replace('\"', '\\\"')}\"\n")
                    f.write(f"date: {pub_date.strftime('%Y-%m-%d %H:%M:%S')}\n")
                    f.write(f"tags: {tags_string}\n")          # Fixed: No brackets
                    f.write(f"categories: {category}\n")      # Fixed: Dynamic category mapping
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