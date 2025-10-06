import { images } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Створюємо розмітку галереї
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(images);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Ініціалізація SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// Функція створення розмітки
function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}
