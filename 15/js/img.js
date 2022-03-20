import { createPhotos , createComments } from './data.js';
import { getRandomPositiveInteger } from './util.js';

const listOfPhotos = document.querySelector('.picture');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragmentOfPhotos = document.createDocumentFragment();

const similarPhotos = createPhotos();

let url = 1;
createPhotos.forEach(() => {
  const pictureElement = template.cloneNode(true);
  fragmentOfPhotos.appendChild(pictureElement);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = getRandomPositiveInteger(5,200);
  pictureElement.querySelector('.picture__comments').textContent = createComments();
});

listOfPhotos.appendChild(fragmentOfPhotos);
console.log(createPhotos(25))
similarPhotos();
