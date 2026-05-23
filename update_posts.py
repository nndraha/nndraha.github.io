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

def translate_abstract(text):
    """Sends the dense academic abstract to Gemini for translation."""
    if not text or len(text) < 20:
        return "No summary available."
    
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("  -> Warning: GEMINI_API_KEY not found in environment. Skipping AI translation.")
        return text

    try:
        # Initialize the standard Google GenAI client
        client = genai.Client(api_key=api_key)
        
        # The prompt that tells the AI exactly how to behave
        prompt = (
            "You are a science communicator. Summarize the following academic abstract "
            "about food safety into 3 simple sentences that a 5th grader can understand. "
            "Keep it engaging, clear, and focus on why it matters to everyday people.\n\n"
            f"Abstract: {text}"
        )
        
        # Call the Gemini 2.5 Flash model (fast and cost-effective for text)
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        print(f"  -> AI Translation error: {e}")
        return text # Fallback to original text if the API fails

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
                    
                summary = entry.get('summary', entry.get('description', ''))
                tags = generate_tags(title, summary)
                
                print(f"  -> AI is translating: {title[:30]}...")
                kid_friendly_summary = translate_abstract(summary)
                
                # Write the Jekyll/Hugo compatible Markdown file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write("---\n")
                    f.write(f"layout: post\n")
                    f.write(f"title: \"{title.replace('\"', '\\\"')}\"\n")
                    f.write(f"date: {pub_date.strftime('%Y-%m-%d %H:%M:%S')}\n")
                    f.write(f"tags: {tags}\n")
                    f.write(f"source: \"{feed_info['name']}\"\n")
                    f.write("---\n\n")
                    f.write("### The Quick Summary\n\n")
                    f.write(f"{kid_friendly_summary}\n\n")
                    f.write("---\n\n")
                    f.write("### Original Abstract\n\n")
                    # Strip out massive abstracts, keep it clean
                    f.write(f"> {summary[:600]}...\n\n")
                    f.write(f"**[Read the full peer-reviewed publication here]({entry.link})**\n")
                    
                print(f"  -> Created new post: {filename}")
                time.sleep(2) # Pause briefly to respect API rate limits
                
        except Exception as e:
            print(f"  -> Error processing feed {feed_info['name']}: {e}")

if __name__ == "__main__":
    process_feeds()