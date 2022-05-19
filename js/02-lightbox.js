import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

//створюємо розмітку по масиву даних

function createGalleryCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
};

//рендеримо розмітку

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//Реалізація делегування на div.gallery. Поява підпису alt через 250 мс після відкриття зображення

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

gallery.addEventListener("click", (event) => event.preventDefault());
