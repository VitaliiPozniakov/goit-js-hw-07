import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector(`.gallery`);

galleryRef.insertAdjacentHTML(`afterbegin`, makeGalleryMarkup(galleryItems));

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>/>
        </a>
        </li>
          `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
