import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(`.gallery`);

const galleryElements = makeGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML(`afterbegin`, galleryElements);

galleryRef.addEventListener(`click`, onGalleryRefClick);




function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

function onGalleryRefClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  openAndCloseModal (e) 

}

function openAndCloseModal (e) {
    
  const urlBigImg = e.target.dataset.source;
  //   console.log(urlBigImg);

  const instance = basicLightbox.create(`
    <img src="${urlBigImg}" width="800" height="600">
`);


  instance.show();
  document.addEventListener(`keydown`, onEscapeKeyDown);

  function onEscapeKeyDown(e) {
    // console.log(e);
    // console.log(e.code);

    if (e.code === `Escape`) {
      instance.close();
      document.removeEventListener(`keydown`, onEscapeKeyDown);
    }
  }
}

