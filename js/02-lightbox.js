import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector(`.gallery`);

const galleryElements = makeGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML(`afterbegin`, galleryElements);


function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>/>
        </a>
        </div>
          `;
    })
    .join("");
}


  const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

