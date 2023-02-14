import SimpleLightbox from "simple-lightbox";
import "simple-lightbox/dist/simpleLightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img
                    src="${preview}"
                    loading="lazy"
                    class="gallery__image lazyload"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
}

galleryEl.innerHTML = galleryMarkup;

new SimpleLightbox({ elements: '.gallery a' });
