import { createPhotos, createComments , amount, MESSAGE} from './data.js';
import { getRandomPositiveInteger } from './util.js';

const listOfPhotos = document.querySelector('.picture');
const similarPhotos = createPhotos(25);
console.log(createPhotos(25));
const template = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const fragmentOfPhotos = document.createDocumentFragment();

similarPhotos.forEach(() => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = "photos/" + amount + ".jpg ";
  pictureElement.querySelector('.picture__likes').textContent = getRandomPositiveInteger(1, MESSAGE.length);
  pictureElement.querySelector('.picture__comments').textContent = createComments();
  fragmentOfPhotos.appendChild(pictureElement);
});

listOfPhotos.appendChild(fragmentOfPhotos);
similarPhotos(25);
