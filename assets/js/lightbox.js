/**
 * Lightbox functionality for the photography gallery.
 * Explicitly manages display and modal state for total reliability.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('lightbox-dialog');
    const lightboxImg = document.getElementById('lightbox-img');
    const returnBtn = document.getElementById('lightbox-return');
    const galleryLinks = document.querySelectorAll('.gallery-link');

    if (!dialog || !lightboxImg) return;

    /**
     * Opens the lightbox and ensures the image is loaded.
     */
    const openLightbox = (src, alt) => {
        lightboxImg.alt = alt;
        dialog.showModal();
        lightboxImg.src = src;
    };

    /**
     * Closes the lightbox and cleans up.
     */
    const closeLightbox = () => {
        dialog.close();
        lightboxImg.src = '';
        // Deactivate loupes
        const activeLoupes = document.querySelectorAll('.loupe-element.active, #loupe.active');
        activeLoupes.forEach(l => l.classList.remove('active'));
    };

    // Open handlers
    galleryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const img = link.querySelector('img');
            const fullResSrc = link.getAttribute('href');
            const title = img ? img.getAttribute('alt') : 'Photo';
            openLightbox(fullResSrc, title);
        });
    });

    // Close handlers
    if (returnBtn) returnBtn.addEventListener('click', closeLightbox);
    dialog.addEventListener('click', (e) => { if (e.target === dialog) closeLightbox(); });
    dialog.addEventListener('close', closeLightbox);
});
