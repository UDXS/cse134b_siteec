/**
 * Generates a deterministic photographic pile using actual gallery thumbnails.
 * Uses a fixed seed for consistent skews and offsets.
 */

document.addEventListener('DOMContentLoaded', () => {
    const pileContainer = document.getElementById('dynamic-photo-pile');
    const galleryImages = document.querySelectorAll('#gallery-container .gallery-link img');
    if (!pileContainer || galleryImages.length === 0) return;

    let seed = 1337;

    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Use actual images from the gallery for the pile
    galleryImages.forEach((img, index) => {
        const photo = document.createElement('div');
        photo.className = 'pile-photo';
        photo.style.backgroundImage = `url(${img.src})`;
        
        // Deterministic transformations
        const rotation = (random() * 24) - 12; // -12 to 12 degrees
        const offsetX = (random() * 30) - 15;  // -15 to 15 px
        const offsetY = (random() * 24) - 12;  // -12 to 12 px

        photo.style.setProperty('--rot', rotation);
        photo.style.setProperty('--ox', offsetX);
        photo.style.setProperty('--oy', offsetY);
        photo.style.zIndex = index;

        pileContainer.appendChild(photo);
    });
});
