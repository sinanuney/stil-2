#!/usr/bin/env python3
import os
import re

# Favicon links to add
FAVICON_LINKS = '''
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta name="theme-color" content="#ffffff">
'''

def add_favicon_to_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if favicon already exists
        if 'favicon' in content.lower():
            print(f"Skipped (favicon exists): {file_path}")
            return False
            
        # Insert favicon after <title> tag
        new_content = re.sub(r'(<title>.*?</title>)', 
                           f'\\1\n{FAVICON_LINKS}', 
                           content, 
                           flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Added favicon to: {file_path}")
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")
        return False

def main():
    # Find all HTML files in current directory and subdirectories
    for root, _, files in os.walk('.'):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                add_favicon_to_file(file_path)
    
    print("Favicon addition complete!")

if __name__ == "__main__":
    main()
