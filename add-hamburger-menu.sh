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
    "salon-foto.html"
    "salon-video.html"
    "salon.html"
    "smyra-plato.html"
    "stil-foto.html"
    "stil-video.html"
    "stil.html"
    "sumer-park.html"
    "sunnet.html"
    "turunc-park-plato.html"
)

# CSS and JS file paths
CSS_FILE="css/mobile-menu.css"
JS_FILE="js/mobile-menu.js"

# Create the mobile menu CSS file if it doesn't exist
mkdir -p "$(dirname "$CSS_FILE")"
cat > "$CSS_FILE" << 'EOL'
/* Mobile Menu Styles */
.hamburger {
    display: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1000;
}

.hamburger .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
}

/* Mobile menu styles */
@media (max-width: 768px) {
    .hamburger {
        display: block;
        position: absolute;
        top: 15px;
        right: 20px;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .nav-links {
        position: fixed;
        left: -100%;
        top: 0;
        gap: 0;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100vh;
        text-align: center;
        transition: 0.3s;
        padding-top: 80px;
        z-index: 999;
    }

    .nav-links.active {
        left: 0;
    }

    .nav-section {
        margin: 16px 0;
        width: 100%;
    }

    .nav-link {
        margin: 8px 0;
        font-size: 1.2rem;
        display: block;
        padding: 12px 0;
    }

    .nav-content {
        padding: 15px 20px;
    }

    .nav-logo {
        font-size: 1.2rem;
    }
}
EOL

# Create the mobile menu JS file if it doesn't exist
mkdir -p "$(dirname "$JS_FILE")"
cat > "$JS_FILE" << 'EOL'
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;

    // Get the navigation elements
    const navLinks = document.querySelector('.nav-links');
    const navContent = document.querySelector('.nav-content');
    
    // Add hamburger to the navigation
    if (navContent) {
        navContent.appendChild(hamburger);

        // Toggle mobile menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContent.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
EOL

# Function to update a single HTML file
update_file() {
    local file="$1"
    local temp_file="${file}.tmp"
    
    echo "Updating $file..."
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo "  File not found, skipping..."
        return
    fi
    
    # Check if already has mobile menu
    if grep -q 'mobile-menu\.css' "$file"; then
        echo "  Already has mobile menu, skipping..."
        return
    fi
    
    # Create a temporary file
    cp "$file" "$temp_file"
    
    # Add CSS link after the last stylesheet
    if grep -q '<link.*\.css' "$temp_file"; then
        sed -i '' -e '/<link.*\.css/ {' -e 'h' -e 's/.*/&\
    <link rel="stylesheet" href="css\/mobile-menu.css">/' -e 'p' -e 'g' -e '}' "$temp_file"
    else
        # If no stylesheet found, add after the head
        sed -i '' '/<head>/a\
    <link rel="stylesheet" href="css/mobile-menu.css">' "$temp_file"
    fi
    
    # Add JS before the closing body tag
    if grep -q '</body>' "$temp_file"; then
        sed -i '' -e '/<\/body>/i\
    <script src="js/mobile-menu.js"></script>' "$temp_file"
    else
        echo '  Warning: No closing body tag found, appending to end of file'
        echo '    <script src="js/mobile-menu.js"></script></body>' >> "$temp_file"
    fi
    
    # Add hamburger button comment if nav-links exists
    if grep -q '<div class="nav-links"' "$temp_file" && ! grep -q 'Hamburger button will be added' "$temp_file"; then
        sed -i '' -e '/<div class="nav-links"/,/<\/div>/ {' -e '/<\/div>/i\
            <!-- Hamburger button will be added here by JavaScript -->' -e '}' "$temp_file"
    fi
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "  Updated $file successfully"
}

# Update all files
for file in "${FILES[@]}"; do
    update_file "$file"
done

echo "All files have been processed!"
