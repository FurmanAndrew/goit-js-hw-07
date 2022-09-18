import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const addGaleeryItems = addItemsToGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', addGaleeryItems);

// debugger
function addItemsToGallery(galleryItems) {
    return galleryItems.map (({preview, original, description}) =>
    {return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
        
    const largeImg = e.target.dataset.source;
        const instance = basicLightbox.create(`<img
      class="gallery__image"
      src="${largeImg}"
      width="800"
    />`);
    instance.show();

    window.addEventListener('keydown', closeModal)
    function closeModal(e) {
    if (e.key === 'Escape') {
        instance.close();
        return
        }
    }
    
}

console.log(galleryItems);
console.log(galleryList);

