// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
containerGallery.addEventListener('click', onClickShowOriginalImage)


const listItemsMarkup = createItemGalere(galleryItems);
containerGallery.innerHTML = listItemsMarkup;

function createItemGalere (items){
   return items.map(({preview, original, description}) =>{
    return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  `
   }).join('');
}




function onClickShowOriginalImage (evt){
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')){
        return;
    };
    
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {

});
   gallery.on('close.simplelightbox', function () {
   return overlay = false;
   })

}