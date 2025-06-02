#!/bin/bash

# List of files to update
FILES=(
    "album-kapak-modelleri.html"
    "arsanli-plato.html"
    "artemis-plato.html"
    "kislik-salon.html"
    "nisan.html"
    "pamucak-sahili.html"
    "salon-album.html"
    "smyra-plato.html"
    "stil-video.html"
    "sumer-park.html"
    "sunnet.html"
    "turunc-park-plato.html"
    "yazlik-salon.html"
)

# Update each file
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Replace salon-logo.png with stil-logo.png
        sed -i '' 's|images/salon-logo.png|images/stil-logo.png|g' "$file"
        echo "Updated: $file"
    else
        echo "File not found: $file"
    fi
done

echo "Logo update complete!"
