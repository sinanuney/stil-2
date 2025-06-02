document.addEventListener('DOMContentLoaded', function() {
    // Get the album data from the HTML data attribute
    const albumData = JSON.parse(document.getElementById('album-data').textContent);
    const gallery = document.getElementById('lightgallery');

    // Create gallery items for each photo
    albumData.photos.forEach(photo => {
        const a = document.createElement('a');
        a.href = `images/${albumData.folder}/${photo}`;
        a.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `images/${albumData.folder}/${photo}`;
        img.alt = photo;
        
        a.appendChild(img);
        gallery.appendChild(a);
    });

    // Initialize lightGallery with common settings
    lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        thumbnail: true,
        download: false,
        animateThumb: true,
        zoomFromOrigin: true,
        allowMediaOverlap: true
    });
}); 