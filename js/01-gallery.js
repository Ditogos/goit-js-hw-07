import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const imageUrl = document.querySelector(".gallery");
let modal;

function getGallery(img) {
  return img
    .map(
      (img) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </li>`
    )
    .join("");
}

const addGalleryMarkup = getGallery(galleryItems);

imageUrl.innerHTML = addGalleryMarkup;
imageUrl.addEventListener("click", imageClick);

function imageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgSource = evt.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="880">
`);
  modal.show();
  document.addEventListener("keydown", removeKeyDownImage);
}

function removeKeyDownImage(evt) {
  if (evt.code !== "Escape") return;
  modal.close();
  document.removeEventListener("keydown", removeKeyDownImage);
}
