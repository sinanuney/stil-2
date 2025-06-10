document.addEventListener('DOMContentLoaded', function() {
    // Hikaye verileri - Her hikaye için birden fazla medya içerebilir
    const storiesData = [
        {
            id: 0,
            username: '25.05.2024',
            medias: [
                { type: 'video', src: 'images/salon/25.05.2024/1.mov' },
                { type: 'video', src: 'images/salon/25.05.2024/2.mov' },
                { type: 'video', src: 'images/salon/25.05.2024/3.mov' },
                { type: 'video', src: 'images/salon/25.05.2024/4.mov' },
                { type: 'video', src: 'images/salon/25.05.2024/5.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 1,
            username: '24.05.2024',
            medias: [
                { type: 'video', src: 'images/salon/24.05.2024/1.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/2.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/3.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/4.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/5.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/6.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/7.mov' },
                { type: 'video', src: 'images/salon/24.05.2024/8.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 2,
            username: '18.05.2024',
            medias: [
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 1.mov' },
                { type: 'image', src: 'images/salon/18.05.2024/18.05.2024 - 2.jpeg' },
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 6.mov' },
                { type: 'video', src: 'images/salon/18.05.2024/18.05.2024 - 7.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 3,
            username: '12.05.2024',
            medias: [
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 6.mov' },
                { type: 'video', src: 'images/salon/12.05.2024/12.05.2024 - 7.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 4,
            username: '05.05.2024 (1)',
            medias: [
                { type: 'image', src: 'images/salon/05.05.2024/1/05.05.2024 - 1.jpeg' },
                { type: 'video', src: 'images/salon/05.05.2024/1/05.05.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/05.05.2024/1/05.05.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/05.05.2024/1/05.05.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/05.05.2024/1/05.05.2024 - 5.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 5,
            username: '05.05.2024 (2)',
            medias: [
                { type: 'video', src: 'images/salon/05.05.2024/2/05.05.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/05.05.2024/2/05.05.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/05.05.2024/2/05.05.2024 - 3.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 6,
            username: '28.04.2024',
            medias: [
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/28.04.2024/28.04.2024 - 6.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 7,
            username: '27.04.2024',
            medias: [
                { type: 'video', src: 'images/salon/27.04.2024/27.04.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/27.04.2024/27.04.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/27.04.2024/27.04.2024 - 3.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 8,
            username: '14.04.2024',
            medias: [
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 6.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 7.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 8.mov' },
                { type: 'video', src: 'images/salon/14.04.2024/14.04.2024 - 9.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 9,
            username: '13.04.2024',
            medias: [
                { type: 'video', src: 'images/salon/13.04.2024/13.04.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/13.04.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/13.04.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/13.04.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/34922258091041fdbd378f679398c82d.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/51e6bb1ffbe94f7a80cb20d37167be64.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/dd9523ffe9c549e3a60c4699f06716e5.mov' },
                { type: 'video', src: 'images/salon/13.04.2024/ed32787228f74423a4301fc6cfcae6fe.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 10,
            username: '24.02.2024',
            medias: [
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 6.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 7.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 8.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 9.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 10.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 11.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 11,
            username: '20.01.2024',
            medias: [
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 5.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 12,
            username: '03.03.2024 (1)',
            medias: [
                { type: 'video', src: 'images/salon/03.03.2024/1/23.03.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/1/23.03.2024 - 2.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        {
            id: 13,
            username: '03.03.2024 (2)',
            medias: [
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 4.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        // 24.02.2024
        {
            id: 10,
            username: '24.02.2024',
            medias: [
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 5.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 6.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 7.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 8.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 9.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 10.mov' },
                { type: 'video', src: 'images/salon/24.02.2024/24.02.2024 - 11.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        // 03.03.2024 (2)
        {
            id: 11,
            username: '03.03.2024 (2)',
            medias: [
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/2/23.03.2024 - 4.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        // 03.03.2024 (1)
        {
            id: 12,
            username: '03.03.2024 (1)',
            medias: [
                { type: 'video', src: 'images/salon/03.03.2024/1/23.03.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/03.03.2024/1/23.03.2024 - 2.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        },
        // 20.01.2024
        {
            id: 13,
            username: '20.01.2024',
            medias: [
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 1.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 2.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 3.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 4.mov' },
                { type: 'video', src: 'images/salon/20.01.2024/20.01.2024 - 5.mov' }
            ],
            seen: false,
            currentMediaIndex: 0
        }
    ]

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
            
            // Hikaye önizleme resmi - İlk görseli göster
            const previewImg = document.createElement('img');
            const firstMedia = story.medias[0];
            previewImg.src = firstMedia.src.replace(/\.(jpe?g|png|gif)/i, '-thumb$&');
            previewImg.alt = story.username;
            previewImg.className = 'story-preview';
            previewImg.onerror = function() {
                // Eğer küçük resim yoksa orijinal resmi kullan
                this.src = firstMedia.src;
            };
            
            // Eğer birden fazla görsel varsa sayacı göster
            const mediaCount = story.medias.length > 1 ? 
                `<span class="media-count">${story.medias.length}</span>` : '';
                
            const mediaElement = `${previewImg.outerHTML}${mediaCount}`;
            
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
        
        // Hikaye içeriği - Tüm medyaları yükle
        let content = '';
        
        // Hikaye ID'sini modala ekle (sonradan erişmek için)
        modal.dataset.storyId = story.id;
        
        // Kullanıcı adı
        content += `
            <div class="story-username-container">
                <span class="story-username">${story.username}</span>
            </div>
        `;
        story.medias.forEach((media, index) => {
            if (media.type === 'video') {
                content += `
                    <div class="story-media-container ${index === 0 ? 'active' : ''}" data-index="${index}">
                        <video class="story-media" ${index === 0 ? 'autoplay' : ''} controls>
                            <source src="${media.src}" type="video/mp4">
                            Tarayıcınız video etiketini desteklemiyor.
                        </video>
                    </div>
                `;
            } else {
                content += `
                    <div class="story-media-container ${index === 0 ? 'active' : ''}" data-index="${index}">
                        <img class="story-media" src="${media.src}" alt="${story.username} - ${index + 1}">
                    </div>
                `;
            }
        });
        
        // İlerleme çubukları ve noktalar
        if (story.medias.length > 0) {
            // İlerleme çubukları
            let progressBars = '';
            for (let i = 0; i < story.medias.length; i++) {
                progressBars += `
                    <div class="progress-bar-container">
                        <div class="progress-bar" data-index="${i}"></div>
                    </div>
                `;
            }
            content = `<div class="progress-bars">${progressBars}</div>` + content;
            
            // Noktalar (mobil için)
            let dots = '';
            for (let i = 0; i < story.medias.length; i++) {
                dots += `<span class="media-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
            }
            content += `<div class="media-dots">${dots}</div>`;
        }
        
        // Medya sayacı
        if (story.medias.length > 1) {
            let dots = '';
            for (let i = 0; i < story.medias.length; i++) {
                dots += `<span class="media-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
            }
            content += `<div class="media-dots">${dots}</div>`;
            
            // Noktalara tıklama olayını ekle
            setTimeout(() => {
                const dotElements = modalContent.querySelectorAll('.media-dot');
                dotElements.forEach(dot => {
                    dot.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const index = parseInt(dot.getAttribute('data-index'));
                        updateMedia(story.id, index);
                    });
                });
            }, 100);
        }      
        
        // Navigasyon okları
        const navButtons = `
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
        
        // Gezinme işlemleri
        const prevBtn = modal.querySelector('.prev');
        const nextBtn = modal.querySelector('.next');
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateStory(story.id, 'prev');
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateStory(story.id, 'next');
        });
        
        // Klavye kontrolleri
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                closeStory();
            } else if (e.key === 'ArrowLeft') {
                navigateStory(story.id, 'prev');
            } else if (e.key === 'ArrowRight') {
                navigateStory(story.id, 'next');
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
                    navigateStory(story.id, 'next');
                } else {
                    // Sağa kaydırma (önceki hikaye)
                    navigateStory(story.id, 'prev');
                }
            }
        }
        
        // Hikayeyi işaretle
        story.seen = true;
        updateStoryUI(story.id);
        
        // Modalı göster
        setTimeout(() => {
            modal.classList.add('active');
            // Otomatik geçişi başlat
            startSlideShow(story.id);
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
    }
    
    // Medya gezinme
    function navigateMedia(storyId, direction) {
        const story = storiesData.find(s => s.id === storyId);
        if (!story) return;
        
        const currentIndex = story.currentMediaIndex;
        const mediaCount = story.medias.length;
        
        if (direction === 'prev') {
            story.currentMediaIndex = (currentIndex - 1 + mediaCount) % mediaCount;
        } else {
            story.currentMediaIndex = (currentIndex + 1) % mediaCount;
        }
        
        updateMedia(storyId, story.currentMediaIndex);
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
    
    // Otomatik geçiş zamanlayıcısı
    let slideInterval;
    const SLIDE_INTERVAL = 3000; // 3 saniye
    
    // İlerleme çubuğu animasyonunu başlat
    function startProgressBar(mediaIndex, totalMedias, isVideo = false, videoElement = null) {
        const progressBars = document.querySelectorAll('.progress-bar');
        if (!progressBars.length) return;
        
        // Tüm çubukları sıfırla
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none';
        });
        
        // Eğer video ise ve video elementi varsa, süresini bekle
        if (isVideo && videoElement) {
            // Video süresini al ve çubuğu güncelle
            const updateProgress = () => {
                if (videoElement.readyState > 0) {
                    const duration = videoElement.duration || 1;
                    const currentTime = videoElement.currentTime;
                    const progress = (currentTime / duration) * 100;
                    
                    const activeBar = progressBars[mediaIndex];
                    if (activeBar) {
                        activeBar.style.width = `${progress}%`;
                        activeBar.style.transition = 'width 0.1s linear';
                    }
                    
                    if (currentTime < duration) {
                        requestAnimationFrame(updateProgress);
                    }
                } else {
                    setTimeout(updateProgress, 100);
                }
            };
            
            // Video bittiğinde sonraki medyaya geç
            videoElement.onended = () => {
                const storyId = parseInt(modal.dataset.storyId);
                navigateMedia(storyId, 'next');
            };
            
            // İlerleme çubuğunu güncellemeye başla
            updateProgress();
        } else {
            // Resim için normal 3 saniyelik animasyon
            requestAnimationFrame(() => {
                if (mediaIndex < progressBars.length) {
                    const activeBar = progressBars[mediaIndex];
                    activeBar.style.transition = `width ${SLIDE_INTERVAL}ms linear`;
                    activeBar.style.width = '100%';
                }
            });
        }
    }
    
    // Otomatik geçişi başlat
    function startSlideShow(storyId) {
        const story = storiesData.find(s => s.id === storyId);
        if (!story) return;
        
        // Önceki zamanlayıcıyı temizle
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
        
        const currentMedia = story.medias[story.currentMediaIndex];
        const isVideo = currentMedia && currentMedia.type === 'video';
        const videoElement = isVideo ? document.querySelector('.story-media-container.active video') : null;
        
        // İlerleme çubuğunu başlat
        startProgressBar(story.currentMediaIndex, story.medias.length, isVideo, videoElement);
        
        // Eğer video değilse, 3 saniye sonra geçiş yap
        if (!isVideo) {
            slideInterval = setInterval(() => {
                navigateMedia(storyId, 'next');
            }, SLIDE_INTERVAL);
        }
    }
    
    // Aktif videoyu durdur
    function stopCurrentVideo() {
        const activeVideo = document.querySelector('.story-media-container.active video');
        if (activeVideo) {
            activeVideo.pause();
            activeVideo.currentTime = 0;
        }
    }
    
    // Medya güncelleme
    function updateMedia(storyId, mediaIndex) {
        const modal = document.getElementById('storyModal');
        if (!modal) return;
        
        const story = storiesData.find(s => s.id === storyId);
        if (!story) return;
        
        // Mevcut aktif medyayı durdur
        stopCurrentVideo();
        
        // Güncel medya indeksini kaydet
        story.currentMediaIndex = mediaIndex;
        
        // Tüm medyaları gizle
        const allMedia = modal.querySelectorAll('.story-media-container');
        allMedia.forEach(media => media.classList.remove('active'));
        
        // Seçili medyayı göster
        const currentMedia = modal.querySelector(`.story-media-container[data-index="${mediaIndex}"]`);
        if (currentMedia) {
            currentMedia.classList.add('active');
            
            // Video ise oynat
            const video = currentMedia.querySelector('video');
            if (video) {
                video.currentTime = 0;
                video.play().catch(e => console.log('Video oynatılamadı:', e));
            }
            
            // Noktaları güncelle
            const dots = modal.querySelectorAll('.media-dot');
            dots.forEach((dot, index) => {
                if (index === mediaIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Otomatik geçişi yeniden başlat
            startSlideShow(storyId);
        }
    }
    
    // Hikayeyi kapat
    function closeStory() {
        const modal = document.getElementById('storyModal');
        if (modal) {
            // Zamanlayıcıyı temizle
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }
    
    // Hikaye UI güncelleme
    function updateStoryUI(storyId) {
        const storyElement = document.querySelector(`.story[data-id="${storyId}"]`);
        if (storyElement) {
            storyElement.classList.add('seen');
        }
    }
    
    // Hikayeleri sayfaya ekle
    const container = document.createElement('div');
    container.className = 'stories-container';
    
    const storiesElement = createStories();
    container.appendChild(storiesElement);
    
    // Hikayeleri container'dan önce ekle
    const targetElement = document.querySelector('.container');
    if (targetElement) {
        targetElement.parentNode.insertBefore(container, targetElement);
    }
});
