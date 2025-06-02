// Safari kontrolü
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger butonunu oluştur
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('type', 'button'); // Safari için önemli
    hamburger.setAttribute('aria-label', 'Menüyü Aç/Kapat');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'main-navigation');
    hamburger.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="sr-only">Menü</span>
    `;

    // Navigasyon elementlerini seç
    const navLinks = document.querySelector('.nav-links');
    const navContent = document.querySelector('.nav-content');
    
    // Eğer nav-links yoksa işlemi sonlandır
    if (!navLinks || !navContent) return;
    
    // ARIA için ID ekle
    navLinks.id = 'main-navigation';
    navLinks.setAttribute('aria-label', 'Ana Navigasyon');
    
    // Hamburger menüyü navigasyona ekle
    navContent.appendChild(hamburger);
    
    // Menüyü açıp kapama fonksiyonu
    function toggleMenu(forceClose = false) {
        const isOpen = hamburger.classList.contains('active');
        
        // Eğer forceClose true ise kapat, değilse durumu değiştir
        const shouldOpen = forceClose ? false : !isOpen;
        
        // Eğer durum değişmeyecekse çık
        if ((shouldOpen && isOpen) || (!shouldOpen && !isOpen)) return false;
        
        // Menü durumunu güncelle
        hamburger.classList.toggle('active', shouldOpen);
        hamburger.setAttribute('aria-expanded', shouldOpen);
        
        // Menüyü göster/gizle
        if (shouldOpen) {
            navLinks.style.display = 'flex';
            // Safari için ekstra güvenlik önlemi
            if (isSafari) {
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = 'hidden';
            }
            // Animasyon için gecikme ekle
            requestAnimationFrame(() => {
                navLinks.classList.add('active');
            });
        } else {
            navLinks.classList.remove('active');
            
            // Safari için özel temizlik
            if (isSafari) {
                document.body.style.position = '';
                document.body.style.width = '';
            } else {
                document.body.style.overflow = '';
            }
            
            // Animasyon bittikten sonra gizle
            setTimeout(() => {
                if (!hamburger.classList.contains('active')) {
                    navLinks.style.display = 'none';
                }
            }, 400);
        }
        
        return false;
    }
    
    // Hamburger butonuna tıklama olayı ekle
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return toggleMenu();
    }, false);
    
    // Dışarı tıklandığında menüyü kapat
    document.addEventListener('click', function(e) {
        if (hamburger.classList.contains('active') && 
            !navContent.contains(e.target) && 
            e.target !== hamburger &&
            !e.target.closest('.hamburger')) {
            return toggleMenu(true);
        }
    }, true); // Safari için capture fazında dinle
    
    // Menü içindeki tıklamaların dışarı taşmasını engelle
    navLinks.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Mobilde menüyü başlangıçta gizle
    if (window.innerWidth <= 992) {
        navLinks.style.display = 'none';
    }
    
    // Menü bağlantılarına tıklandığında menüyü kapat
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                toggleMenu(true);
            }
        });
    });
    
    // Pencere boyutu değiştiğinde kontrol et
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Masaüstü görünümünde menüyü göster
            navLinks.style.display = 'flex';
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else if (!hamburger.classList.contains('active')) {
            // Mobilde ve menü açık değilse gizle
            navLinks.style.display = 'none';
        }
    });
});

// Add sr-only class for screen readers
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(style);
