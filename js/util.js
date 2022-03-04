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
return {
id: getRandomArrayElement(ID),
url: 'photos/' + getRandomArrayElement(URL) + '.jpeg ',
avatar: ' img/avatar - ' + getRandomArrayElement(AVATAR) + ' .svg. ',
message: getRandomArrayElement(MESSAGE) + '',
name: getRandomArrayElement(NAME) + '',
likes getRandomArrayElement(LIKES)}
};


export {getRandomArrayElement};
