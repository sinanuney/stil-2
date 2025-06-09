document.addEventListener('DOMContentLoaded', function() {
    // Hikaye verileri
    const storyTitles = [
        'Düğün Klibi #1', 'Düğün Klibi #2', 'Düğün Klibi #3', 'Düğün Klibi #4', 'Düğün Klibi #5',
        'Düğün Klibi #6', 'Düğün Klibi #7', 'Düğün Klibi #8', 'Düğün Klibi #9', 'Düğün Klibi #10',
        'Düğün Klibi #11', 'Düğün Klibi #12', 'Düğün Klibi #13', 'Düğün Klibi #14', 'Düğün Klibi #15',
        'Düğün Klibi #16', 'Düğün Klibi #17', 'Düğün Klibi #18', 'Düğün Klibi #19', 'Düğün Klibi #20',
        'Düğün Klibi #21', 'Düğün Klibi #22', 'Düğün Klibi #23', 'Düğün Klibi #24', 'Düğün Klibi #25',
    ];

    const storiesData = Array.from({ length: 21 }, (_, i) => ({
        id: i,
        username: storyTitles[i] || `Video #${i + 1}`,
        media: `images/stories/reels-${i + 1}.mp4`,
        type: 'video',
        seen: false,
        previewTime: 1 // Video önizleme saniyesi
    }));


    // Hikayeleri oluştur
    function createStories() {
        const storiesContainer = document.createElement('div');
        storiesContainer.className = 'stories-container';
        
        const storiesWrapper = document.createElement('div');
        storiesWrapper.className = 'stories-wrapper';
        
        storiesData.forEach(story => {
            const storyElement = document.createElement('a');
            storyElement.className = 'story';
            storyElement.href = '#';
            storyElement.dataset.id = story.id;
            
            // Hikaye önizleme resmi
            const previewImg = document.createElement('img');
            previewImg.src = `images/stories/thumbnails/thumbnails-${story.id + 1}.jpeg`;
            previewImg.alt = story.username;
            previewImg.className = 'story-preview';
            previewImg.onerror = function() {
                this.src = 'images/default-avatar.png';
            };
            
            const mediaElement = previewImg.outerHTML;
            
            storyElement.innerHTML = `
                <div class="story-avatar">
                    ${mediaElement}
                </div>
                <span class="story-username">${story.username}</span>
            `;
            
            storyElement.addEventListener('click', (e) => {
                e.preventDefault();
                openStory(story.id);
            });
            
            storiesWrapper.appendChild(storyElement);
        });
        
        storiesContainer.appendChild(storiesWrapper);
        return storiesContainer;
    }

    // Hikayeyi aç
    function openStory(storyId) {
        const story = storiesData.find(s => s.id === storyId);
        if (!story) return;

        // Modal oluştur
        const modal = document.createElement('div');
        modal.className = 'story-modal';
        modal.id = 'storyModal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'story-modal-content';
        
        // Hikaye içeriği
        let content = '';
        if (story.type === 'video') {
            content = `
                <video class="story-media" autoplay controls>
                    <source src="${story.media}" type="video/mp4">
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            `;
        } else {
            content = `<img class="story-media" src="${story.media}" alt="${story.username}">`;
        }
        
        // Mobil kontrolü
        const isMobile = window.innerWidth <= 768;
        const navButtons = isMobile ? '' : `
            <div class="story-nav">
                <button class="story-nav-button prev">&larr;</button>
                <button class="story-nav-button next">&rarr;</button>
            </div>
        `;
        
        modalContent.innerHTML = `
            ${content}
            <span class="close-story">&times;</span>
            ${navButtons}
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Kapatma işlemi
        const closeBtn = modal.querySelector('.close-story');
        closeBtn.addEventListener('click', closeStory);
        
        // Masaüstü için gezinme işlemleri
        if (!isMobile) {
            const prevBtn = modal.querySelector('.prev');
            const nextBtn = modal.querySelector('.next');
            
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateStory(storyId, 'prev');
            });
            
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateStory(storyId, 'next');
            });
        }
        
        // Klavye kontrolleri
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                closeStory();
            } else if (e.key === 'ArrowLeft') {
                navigateStory(storyId, 'prev');
            } else if (e.key === 'ArrowRight') {
                navigateStory(storyId, 'next');
            }
        }
        
        document.addEventListener('keydown', handleKeyDown);
        
        // Dokunma olayları (mobil için)
        let touchStartX = 0;
        let touchEndX = 0;
        
        modalContent.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            // Dokunma başlangıcında animasyonu durdur
            modalContent.style.transition = 'none';
        }, { passive: true });
        
        modalContent.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            const diff = touch.screenX - touchStartX;
            // Ekranı kaydırma
            modalContent.style.transform = `translateX(${diff}px)`;
            // Opaklık efekti
            const opacity = 1 - Math.min(Math.abs(diff) / 200, 0.5);
            modalContent.style.opacity = opacity;
        }, { passive: true });
        
        modalContent.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            const swipeThreshold = 50; // minimum kaydırma mesafesi
            
            // Animasyonu geri al
            modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s';
            modalContent.style.transform = 'translateX(0)';
            modalContent.style.opacity = '1';
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Sola kaydırma (sonraki hikaye)
                    navigateStory(storyId, 'next');
                } else {
                    // Sağa kaydırma (önceki hikaye)
                    navigateStory(storyId, 'prev');
                }
            }
        }
        
        // Hikayeyi işaretle
        story.seen = true;
        updateStoryUI(storyId);
        
        // Modalı göster
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Temizleme fonksiyonu
        function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
            modal.remove();
            document.body.style.overflow = '';
        }
        
        // Modal dışına tıklayınca kapat
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeStory();
            }
        });
        
        // Video bitince bir sonrakine geç
        const mediaElement = modal.querySelector('.story-media');
        if (mediaElement && mediaElement.tagName === 'VIDEO') {
            mediaElement.addEventListener('ended', () => {
                navigateStory(storyId, 'next');
            });
        }
    }
    
    // Hikaye gezinme
    function navigateStory(currentId, direction) {
        const currentIndex = storiesData.findIndex(s => s.id === currentId);
        if (currentIndex === -1) return;
        
        let newIndex = currentIndex + (direction === 'next' ? 1 : -1);
        
        // Döngüsel gezinme
        if (newIndex < 0) {
            newIndex = storiesData.length - 1;
        } else if (newIndex >= storiesData.length) {
            newIndex = 0;
        }
        
        closeStory();
        openStory(storiesData[newIndex].id);
    }
    
    // Hikayeyi kapat
    function closeStory() {
        const modal = document.getElementById('storyModal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }
    
    // Hikaye UI güncelleme
    function updateStoryUI(storyId) {
        const storyElement = document.querySelector(`.story[data-id="${storyId}"]`);
        if (storyElement) {
            const avatar = storyElement.querySelector('.story-avatar');
            if (avatar) {
                avatar.style.background = '#999';
            }
        }
    }
    
    // Hikayeleri sayfaya ekle
    const container = document.createElement('div');
    container.className = 'stories-container';
    
    const storiesElement = createStories();
    container.appendChild(storiesElement);
    
    // Hikayeleri belirtilen konuma ekle
    const targetElement = document.querySelector('.container');
    if (targetElement) {
        targetElement.parentNode.insertBefore(container, targetElement);
    }
    
    // Dışarı tıklayınca kapat
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('storyModal');
        if (modal && e.target === modal) {
            closeStory();
        }
    });
});
