document.addEventListener('DOMContentLoaded', function() {
    const albumData = JSON.parse(document.getElementById('album-data').textContent);
    const gallery = document.getElementById('lightgallery');
    
    // Clear any existing content
    gallery.innerHTML = '';
    
    // Process each photo
    albumData.photos.forEach(photo => {
        // Create a container for each gallery item
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Create the link for lightgallery
        const link = document.createElement('a');
        link.href = `images/${albumData.folder}/${photo.filename}`;
        link.setAttribute('data-src', `images/${albumData.folder}/${photo.filename}`);
        link.className = 'gallery-item';
        
        // Create the image element
        const img = document.createElement('img');
        img.src = `images/${albumData.folder}/${photo.filename}`;
        img.alt = photo.name || 'Albüm Kapağı';
        img.loading = 'lazy';
        img.title = photo.name || 'Albüm Kapağı';
        
        // Create the title element
        const title = document.createElement('div');
        title.className = 'photo-title';
        
        // Use the custom name if available, otherwise use the filename without extension
        const photoTitle = photo.name || photo.filename.replace(/\.[^/.]+$/, '');
        
        title.textContent = photoTitle;
        
        // Append elements
        link.appendChild(img);
        galleryItem.appendChild(link);
        galleryItem.appendChild(title);
        gallery.appendChild(galleryItem);
    });
    
    // Initialize lightgallery
    lightGallery(document.getElementById('lightgallery'), {
        selector: 'a',
        download: false,
        thumbnail: true,
        zoom: true
    });
});
