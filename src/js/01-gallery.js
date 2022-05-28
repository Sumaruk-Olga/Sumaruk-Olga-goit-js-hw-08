// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
};

const createGallery = galleryItems.map(item => createGalleryItem(item)).join('');


gallery.insertAdjacentHTML('beforeend', createGallery);


    
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,        
    });
    

// // captionsData	title	string	get the caption from given attribute
// // captionDelay	0	int	adds a delay before the caption shows (in ms)

// // captionsData рядок заголовка отримує заголовок із заданого атрибута
// // captionDelay 0 int додає затримку перед показом напису (у мс)


