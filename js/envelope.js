document.addEventListener('DOMContentLoaded', function() {
    // Get the envelope button
    const envelopeBtn = document.querySelector('.envelope-btn');

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'envelope-modal';
    modal.innerHTML = `
        <div class="envelope-content">
            <span class="close-btn">&times;</span>
            <h2 class="envelope-title">Düğün Paketimiz</h2>
            <ul class="package-list">
                <li>SALON SÜSLEME</li>
                <li>MASA SANDELYE SÜSLEME</li>
                <li>GELİN DAMAT MASASI</li>
                <li>YÜRÜYÜŞ YOLU</li>
                <li>JİMY JİP'Lİ KAMERA ÇEKİMİ</li>
                <li>SALON FOTOĞRAF ÇEKİMİ</li>
                <li>PANORAMİK SET ALBÜM ÇEKİMİ</li>
                <li>DAVETiYE (500tl hediye ÇeKİ)</li>
                <li>ORKESTRA</li>
                <li>DÜĞÜN PASTASI</li>
                <li>KARIŞIK KURUYEMİŞ</li>
                <li>SU VE MEŞRUBAT</li>
                <li>GELİN DAMAT İSiM KÖŞESi</li>
                <li>VOLKAN Gösterisi</li>
                <li>DENEYiMLi GARSON</li>
            </ul>
        </div>
    `;
    document.body.appendChild(modal);

    // Toggle modal
    envelopeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('close-btn')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
