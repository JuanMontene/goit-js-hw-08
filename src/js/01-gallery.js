import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery'); // selecciona la clase gallery de HTML y lo asigna a la variable galleryRef

const renderGallery = () => {
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </li>`
    )
    .join('');

  gallery.innerHTML = galleryMarkup;
};

const openModal = source => {
  const instance = basicLightbox.create(`<img src="${source}">`);
  instance.show();
};

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const source = event.target.getAttribute('data-source');
    openModal(source);
  }
});

renderGallery();
console.log(galleryItems);
