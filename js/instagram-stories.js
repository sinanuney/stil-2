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
            
            const isVideo = story.type === 'video';
            // Video için önizleme resmi
            const previewImage = `images/stories/thumbnails/thumbnails-${story.id + 1}.jpeg`;
            const mediaElement = isVideo 
                ? `<div class="video-preview-container">
                     <img src="${previewImage}" alt="${story.username}" class="story-preview" onerror="this.src='images/default-avatar.png'">
                     <div class="play-icon">▶</div>
                   </div>`
                : `<img src="${story.media}" alt="${story.username}" class="story-preview" onerror="this.src='images/default-avatar.png'">`;
            
            storyElement.innerHTML = `
                <div class="story-avatar ${isVideo ? 'video' : ''}">
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
        modal.className = 'story-modal active';
        modal.id = 'storyModal';
        
        // İçerik oluştur
        let mediaContent = '';
        if (story.type === 'image') {
            mediaContent = `<img src="${story.media}" alt="${story.username}">`;
        } else if (story.type === 'video') {
            mediaContent = `
                <video class="video-story" controls autoplay playsinline>
                    <source src="${story.media}" type="video/mp4">
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            `;
        }
        
        modal.innerHTML = `
            <div class="story-nav">
                <button class="story-nav-button prev">‹</button>
                <button class="story-nav-button next">›</button>
            </div>
            <div class="story-modal-content">
                ${mediaContent}
            </div>
            <span class="close-story">&times;</span>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Kapatma işlevi
        const closeBtn = modal.querySelector('.close-story');
        closeBtn.addEventListener('click', closeStory);
        
        // Navigasyon işlevleri
        const prevBtn = modal.querySelector('.prev');
        const nextBtn = modal.querySelector('.next');
        
        prevBtn.addEventListener('click', () => navigateStory(storyId, -1));
        nextBtn.addEventListener('click', () => navigateStory(storyId, 1));
        
        // Klavye kontrolleri
        document.addEventListener('keydown', handleKeyDown);
        
        // Hikayeyi görüldü olarak işaretle
        if (!story.seen) {
            story.seen = true;
            updateStoryUI(storyId);
        }
    }
    
    // Hikaye gezinme
    function navigateStory(currentId, direction) {
        const currentIndex = storiesData.findIndex(s => s.id === currentId);
        if (currentIndex === -1) return;
        
        let newIndex = currentIndex + direction;
        
        // Döngüsel gezinme
        if (newIndex < 0) {
            newIndex = storiesData.length - 1;
        } else if (newIndex >= storiesData.length) {
            newIndex = 0;
        }
        
        closeStory();
        openStory(storiesData[newIndex].id);
    }
    
    // Klavye kontrolleri
    function handleKeyDown(e) {
        const modal = document.getElementById('storyModal');
        if (!modal) return;
        
        const currentId = parseInt(modal.querySelector('.story-modal-content').dataset.currentId);
        
        switch(e.key) {
            case 'ArrowLeft':
                navigateStory(currentId, -1);
                break;
            case 'ArrowRight':
                navigateStory(currentId, 1);
                break;
            case 'Escape':
                closeStory();
                break;
        }
    }
    
    // Hikayeyi kapat
    function closeStory() {
        const modal = document.getElementById('storyModal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
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
