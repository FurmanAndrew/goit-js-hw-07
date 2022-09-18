import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const addGaleeryItems = addItemsToGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', addGaleeryItems);

function addItemsToGallery(galleryItems) {
    return galleryItems.map (({preview, description}) =>
    {return `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`}).join('')
}

galleryList.addEventListener('click', clickOnImg);

function clickOnImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
    return;
    }

    var lightbox = new SimpleLightbox('.gallery a', {
        sourceAttr: 'href',
        enableKeyboard: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        animationSpeed: 250,
    })

}



console.log(galleryItems);
