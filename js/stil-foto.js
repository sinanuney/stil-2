// Stil Foto Gallery JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery functionality
    const albums = document.querySelectorAll('.album-cover');
    
    albums.forEach(album => {
        album.addEventListener('click', function(e) {
            // Add click handler for albums
            console.log('Album clicked:', this);
        });
    });
});