/**
 * Robust Loupe magnifier functionality for photography images.
 * Uses viewport-relative fixed positioning for total isolation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Main loupe
    let mainLoupe = document.getElementById('loupe');
    if (!mainLoupe) {
        mainLoupe = document.createElement('div');
        mainLoupe.id = 'loupe';
        document.body.appendChild(mainLoupe);
    }

    const lightboxLoupe = document.getElementById('loupe-lightbox');
    const zoomLevel = 2.5;

    /**
     * Updates loupe position and background.
     */
    const updateLoupe = (e, targetImg, loupeEl, targetZoom = zoomLevel) => {
        const rect = targetImg.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Viewport-fixed centering
        loupeEl.style.left = `${mouseX - loupeEl.offsetWidth / 2}px`;
        loupeEl.style.top = `${mouseY - loupeEl.offsetHeight / 2}px`;

        const xRel = mouseX - rect.left;
        const yRel = mouseY - rect.top;
        const px = (xRel / rect.width) * 100;
        const py = (yRel / rect.height) * 100;

        const hiResSource = targetImg.closest('.hero-figure') ? '../gallery/panoc.jpg' : targetImg.src;

        loupeEl.style.backgroundImage = `url(${hiResSource})`;
        loupeEl.style.backgroundSize = `${rect.width * targetZoom}px ${rect.height * targetZoom}px`;
        loupeEl.style.backgroundPosition = `${px}% ${py}%`;
    };

    /**
     * Attaches events.
     */
    const attachLoupe = (img, loupeEl) => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        img.addEventListener('mouseenter', (e) => {
            loupeEl.classList.add('active');
            updateLoupe(e, img, loupeEl, zoomLevel);
        });

        img.addEventListener('mouseleave', (e) => {
            loupeEl.classList.remove('active');
            updateLoupe(e, img, loupeEl, 1);
        });

        img.addEventListener('mousemove', (e) => {
            updateLoupe(e, img, loupeEl, zoomLevel);
        });
    };

    // Init
    const heroImg = document.querySelector('.hero-figure img');
    if (heroImg) attachLoupe(heroImg, mainLoupe);

    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg && lightboxLoupe) attachLoupe(lightboxImg, lightboxLoupe);
});
