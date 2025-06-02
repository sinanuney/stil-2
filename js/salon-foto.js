document.addEventListener('DOMContentLoaded', function() {
    // Albüm fotoğrafları
    const neslihanPhotos = [
        'STI_1638.jpeg', 'STI_1657.jpeg', 'STI_1741.jpeg', 'STI_1744.jpeg',
        'STI_1797.jpeg', 'STI_1885.jpeg', 'STI_1927.jpeg', 'STI_1937.jpeg',
        'STI_1965.jpeg', 'STI_1979.jpeg', 'STI_2006.jpeg', 'STI_2016.jpeg',
        'STI_2020.jpeg', 'STI_2048.jpeg', 'STI_2064.jpeg', 'STI_2073.jpeg',
        'STI_2102.jpeg', 'STI_2149.jpeg', 'STI_2169.jpeg', 'STI_2180.jpeg',
        'STI_2198.jpeg', 'STI_2239.jpeg', 'STI_2249.jpeg', 'STI_2420.jpeg',
        'STI_2472.jpeg', 'STI_2521.jpeg', 'STI_2557.jpeg', 'STI_2574.jpeg',
        'STI_2597.jpeg', 'STI_2628.jpeg', 'tablo.jpeg'
    ];

    const yunusPhotos = [
        'Büyük DSC09200.jpeg', 'Büyük DSC09236.jpeg', 'Büyük DSC09283.jpeg',
        'Büyük DSC09300.jpeg', 'Büyük DSC09313.jpeg', 'Büyük DSC09326.jpeg',
        'Büyük DSC09378.jpeg', 'Büyük DSC09428.jpeg', 'Büyük DSC09450.jpeg',
        'Büyük DSC09461.jpeg', 'Büyük DSC09463.jpeg', 'Büyük DSC09480.jpeg',
        'Büyük DSC09500.jpeg', 'Büyük DSC09565.jpeg', 'Büyük DSC09589.jpeg',
        'Büyük DSC09667.jpeg', 'Büyük DSC09684.jpeg', 'Büyük DSC09697.jpeg',
        'Büyük DSC09703.jpeg', 'Büyük DSC09706.jpeg', 'Büyük DSC09710.jpeg',
        'Büyük DSC09712.jpeg', 'Büyük DSC09726.jpeg', 'Büyük DSC09730.jpeg',
        'Büyük STI_3729.jpeg', 'Büyük STI_3738.jpeg', 'Büyük STI_3768.jpeg',
        'Büyük STI_3892.jpeg', 'Büyük STI_3958.jpeg', 'Büyük STI_3965.jpeg',
        'Büyük STI_4094.jpeg'
    ];

    // Albüm galerilerini oluştur
    function createGallery(containerId, photos, albumPath) {
        const container = document.getElementById(containerId);
        photos.forEach(photo => {
            const a = document.createElement('a');
            a.href = `images/${albumPath}/${photo}`;
            a.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = `images/${albumPath}/${photo}`;
            img.alt = photo;
            
            a.appendChild(img);
            container.appendChild(a);
        });
    }

    // Albüm galerilerini oluştur
    createGallery('neslihan-gallery', neslihanPhotos, 'neslihan');
    createGallery('yunus-gallery', yunusPhotos, 'yunus');

    // Albüm kapaklarına tıklama olayları
    document.querySelectorAll('.album-cover').forEach(cover => {
        cover.addEventListener('click', () => {
            const albumType = cover.getAttribute('data-album');
            const galleryElement = document.getElementById(`${albumType}-gallery`);
            
            lightGallery(galleryElement, {
                dynamic: true,
                dynamicEl: (albumType === 'neslihan' ? neslihanPhotos : yunusPhotos).map(photo => ({
                    src: `images/${albumType}/${photo}`,
                    thumb: `images/${albumType}/${photo}`
                })),
                plugins: [lgZoom, lgThumbnail],
                thumbnail: true,
                download: false,
                animateThumb: true,
                zoomFromOrigin: true,
                allowMediaOverlap: true
            });

            // Galeriyi aç
            galleryElement.querySelector('a')?.click();
        });
    });
});