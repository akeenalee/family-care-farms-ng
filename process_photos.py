"""
Run this script from your local machine:
cd C:\git-repos\family-care-farms-ng
python process_photos.py

It will:
1. Read all photos from public/images/prof-photos/
2. Optimise each one (compress, resize)
3. Rename them with meaningful names
4. Sort into category folders
5. Print a manifest you can paste back to Claude
"""

from PIL import Image
import os
import shutil

SOURCE = "public/images/prof-photos"
DEST_BASE = "public/images"

# Create category folders
for cat in ["farm", "dnp25", "team", "gallery"]:
    os.makedirs(f"{DEST_BASE}/{cat}", exist_ok=True)

# Time-based categorisation based on what was seen in uploads
# 5.06.23 - 5.06.26 = farm visit (tractor, map, farmland, christmas market)
# 5.06.33 - 5.06.41 = DNP25 ceremony (MOU signing, awards, networking)
# 5.06.42 - 5.06.58 = DNP25 gala (networking, award stage, winners)
# 5.07.00 - 5.07.13 = More DNP25 / farm visit content
# 5.07.22 - 5.07.46 = Additional content

def get_category(filename):
    """Categorise based on time in filename"""
    # Extract time
    import re
    match = re.search(r'at (\d+\.\d+)', filename)
    if not match:
        return "gallery"
    
    time_str = match.group(1)
    hour, minute = time_str.split('.')
    hour, minute = int(hour), int(minute)
    
    # 5:06 PM photos
    if hour == 5 and minute == 6:
        second_match = re.search(r'(\d+\.\d+\.\d+)', filename)
        if second_match:
            parts = second_match.group(1).split('.')
            sec = int(parts[2]) if len(parts) > 2 else 0
            if sec <= 26:
                return "farm"
            elif sec <= 43:
                return "dnp25"
            else:
                return "dnp25"
        return "dnp25"
    
    # 5:07 PM photos  
    elif hour == 5 and minute == 7:
        return "dnp25"
    
    return "gallery"

# Process all files
files = sorted([f for f in os.listdir(SOURCE) if f.lower().endswith('.jpeg') or f.lower().endswith('.jpg')])
manifest = []
counter = {"farm": 0, "dnp25": 0, "team": 0, "gallery": 0}

for filename in files:
    src_path = os.path.join(SOURCE, filename)
    category = get_category(filename)
    counter[category] += 1
    
    # Generate clean name
    n = counter[category]
    new_name = f"{category}-photo-{n:03d}.jpg"
    dest_path = os.path.join(DEST_BASE, category, new_name)
    
    # Skip if already exists with same size (duplicate check)
    if os.path.exists(dest_path):
        print(f"SKIP (exists): {new_name}")
        continue
    
    try:
        img = Image.open(src_path)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        # Resize if too large
        max_size = 1400
        if img.width > max_size or img.height > max_size:
            img.thumbnail((max_size, max_size), Image.LANCZOS)
        
        img.save(dest_path, "JPEG", quality=85, optimize=True)
        size_kb = os.path.getsize(dest_path) // 1024
        manifest.append(f"{category}/{new_name} | {img.size[0]}x{img.size[1]} | {size_kb}KB | src: {filename}")
        print(f"✓ {new_name} ({size_kb}KB)")
    except Exception as e:
        print(f"ERROR: {filename} — {e}")

print(f"\n{'='*60}")
print(f"MANIFEST — paste this back to Claude:")
print(f"{'='*60}")
for line in manifest:
    print(line)

print(f"\nSummary: {counter}")
