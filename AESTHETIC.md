# Aesthetic for photography (photography/index.html)
Davit Markarian

I used an aesthetic that combines concepts of [skeumorphism](https://aesthetics.fandom.com/wiki/Skeuomorphism) and [flat design](https://aesthetics.fandom.com/wiki/Flat_Design).
It is inspired by a series of software and typographic materials, including:
    - Apple Mac OS X "Aqua" and iOS, 
    - Apple iLife and Aperture,
    - Sigma sd/dp series camera marketing material.

The page, designed to show off my photography, ultimately invokes the physical aesthetic of sitting in a studio and manipulating a magazine proof.

## CSS

The use of EB Garamond and small-caps text reflect classical elegant/premium magazine typography. The page uses shading to mimic the feel of pasted elements on top of a blank page, common in drafts during the analogue era of publishing. The lightbox mimics a photo on a desk, with skew and background blur used to demonstrate the feeling of picking up a photo and focusing on it. Animations subtly enhance some of these effects. An off-white base (`#fcfdfe`) with a deep charcoal text color is in use, creating a pleasing but high-contrast look that feels more paper-like. CSS variables are put to use to offer some palette configurability.

## JavaScript
This project features three major JavaScript enhancements.
1.  A photo lightbox a provides custom viewing experience using the native HTML `<dialog>` element. It uses a responsive grid to scale the photo to the display size. The photo   
2.  For desktop users, a digital loupe is overlayed on the photo under the mouse, providing a 2.5x magnification that allow users to appreciate small details in photos. For the hero image, this is deferred-pulled from a much more detailed master photo.
3.  Procedurally rendered with CSS/JavaScript, the "Return to Gallery" button in the lightbox view has an icon of a shaded pile of photos, generated from the gallery. This enhances the skeumorphic view.
These enhancements use common DOM APIs (`getBoundingClientRect`, `matchMedia`, `addEventListener`).

## Usability and Accessibility
For the sake of accessibility, I used the native `<dialog>` element for keyboard navigation (allowing Esc to close). Tab indexing is supported, improved with a bolded focus ring. The lightbox is implemented with a grid and `object-fit: contain`
- **Keyboard Visibility:** I implemented a bold **4px Aqua focus ring** for all interactive elements to ensure the site is fully navigable for keyboard users.
- **Responsive Integrity:** The lightbox uses a flexible grid and `object-fit: contain` to ensure the photography is well framed with correct aspect ratio on every screen size.

## Reflection: The Medium is the Message
By wrapping my Foveon photography (where the Foveon brand is really synonymous with sharpness in the photographic world), for which I take pride in crisp detail and thoughtful composition, in an aesthetic that invokes the (equally crisp) elegance of a printed magazine, alongside a tactile and creative sense of studio work, the "message" of the website strongly becomes one of precision, craftsmanship, and attention to detail demanding an eye for beauty. 