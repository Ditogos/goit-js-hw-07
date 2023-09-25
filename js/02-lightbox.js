import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const imageUrl = document.querySelector(".gallery");

function getGallery(img) {
  return img
    .map(
      (img) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
           <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
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
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 300,
});
