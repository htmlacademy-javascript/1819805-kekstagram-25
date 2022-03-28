const checkStringLength = (string, length) => {
  return string.length <= length;
};

//пример
/*
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
*/
const ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const URL = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const DESCRIPTION = [
'Счастлив и рад',
'Замечательное фото, делюсь',
'Как же круто выходит',
'Уверен, такого вы еще не видели',
'Вау, кто здесь снова оказался'
];
const AVATAR = ['1', '2', '3', '4', '5', '6'];
const LIKES = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,110,120,130,140,150,160,170,200];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];
const NAME = [
'Антон',
'Аня',
'Макс',
'Лена',
'Игорь',
'Света',
'Женя',
'Вика',
];
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
  const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
  };
const createComments = () => {

 /* const randomIdIndex = getRandomPositiveInteger(0,ID.length - 1);
  const randomDescriptionIndex = getRandomPositiveInteger(0,DESCRIPTION.length - 1);
  const randomNameIndex = getRandomPositiveInteger (0, NAME.length - 1);
  const randomAvatarIndex = getRandomPositiveInteger (1, AVATAR.length - 1);
*/
return {
id: getRandomArrayElement(ID),
url: 'photos/' + getRandomArrayElement(URL) + '.jpeg ',
avatar:' img/avatar - ' + getRandomArrayElement(AVATAR) + ' .svg. ',
message: getRandomArrayElement(MESSAGE) + '',
name: getRandomArrayElement(NAME) + '',
likes: getRandomArrayElement(LIKES)
};
};

console.log(
  createComments()
);

const createSimilarComments = Array.from({length: 25}, createComments);
console.log(createSimilarComments);


