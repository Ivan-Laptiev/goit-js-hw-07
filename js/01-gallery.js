import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);




//створюємо розмітку по масиву даних

function createGalleryCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    }).join('');
};

//рендеримо розмітку

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//Реалізація делегування на div.gallery та отримання зображення оригінального розміру

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img width="1400" height="900" src=${event.target.dataset.source}>
    `,  
    
    // Додаємо закривання вікна по натисненню Escape

        {
        onShow: (instance) => { window.addEventListener("keydown", onEscapeKeyPress) },
        onClose: (instance) => { window.removeEventListener("keydown", onEscapeKeyPress) }
        }
    );

    instance.show();

function onEscapeKeyPress (event) {
        if (event.code === "Escape" ) {
            instance.close();
        }
    }   
}
