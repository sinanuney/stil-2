document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeButton = document.querySelector('.close-button');

    // Kategori filtreleme
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif kategori butonunu güncelle
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            // Videoları filtrele
            videoCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(', ').map(cat => cat.trim());
                
                if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
                    card.style.display = 'block';
                    // Animasyon efekti
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Video modal işlemleri
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.querySelector('.video-container').getAttribute('data-video-id');
            modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka planı scroll edilemez yap
        });
    });

    // Modal kapatma
    closeButton.addEventListener('click', () => {
        videoModal.classList.remove('active');
        modalVideo.src = ''; // Videoyu durdur
        document.body.style.overflow = ''; // Scroll'u tekrar aktif et
    });

    // Modal dışına tıklayınca kapatma
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            modalVideo.src = '';
            document.body.style.overflow = '';
        }
    });

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            modalVideo.src = '';
            document.body.style.overflow = '';
        }
    });
});

// CSS animasyonu için stil ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 