document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        'STI_1601.webp', 'STI_1588.webp', 'STI_1581.webp', 'STI_1572.webp',
        'STI_1547.webp', 'STI_1561.webp', 'STI_1543.webp', 'STI_1487.webp',
        'STI_1541.webp', 'STI_1532.webp', 'STI_1473.webp', 'STI_1448.webp',
        'STI_1443.webp', 'STI_1437.webp', 'STI_1433.webp', 'STI_1419.webp',
        'STI_1400.webp', 'STI_1378.webp', 'STI_1372.webp', 'STI_1270.webp'
    ];

    const gallery = document.getElementById('lightgallery');

    photos.forEach(photo => {
        const a = document.createElement('a');
        a.href = `images/Özlem & Ramazan/${photo}`;
        a.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `images/Özlem & Ramazan/${photo}`;
        img.alt = photo;
        
        a.appendChild(img);
        gallery.appendChild(a);
    });

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