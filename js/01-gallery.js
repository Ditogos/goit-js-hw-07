import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const imageUrl = document.querySelector(".gallery");
let lightbox;
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
  lightbox = createLightbox(imgSource);
  lightbox.show();
  imageUrl.addEventListener("keydown", addHandleKeyDownListener);
}

function createLightbox(imgSource) {
  return new SimpleLightbox(`
    <img src="${imgSource}" width="1280" height="855">
  `);
}

function addHandleKeyDownListener(evt) {
  imageUrl.addEventListener("keydown", createLightbox);
  lightbox.show();
}

function removeHandleKeyDownImage(evt) {
  if (evt.code === "Escape") {
    lightbox.close();
    imageUrl.removeEventListener("keydown", createLightbox);
  }
}
