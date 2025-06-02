#!/bin/bash

# Favicon links to add
FAVICON_LINKS='
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta name="theme-color" content="#ffffff">
'

# Find all HTML files and process them
find . -name "*.html" -type f | while read -r file; do
    # Check if favicon is already added
    if ! grep -q "favicon" "$file"; then
        # Insert favicon links after the title tag
        sed -i '' -e '/<title>/a\
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta name="theme-color" content="#ffffff">' "$file"
        echo "Added favicon to: $file"
    else
        echo "Skipped (favicon exists): $file"
    fi
done

echo "Favicon addition complete!"
