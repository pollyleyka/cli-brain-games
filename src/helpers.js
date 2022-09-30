const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => getRandomNumber(0, data.length);

export {
  getRandomNumber,
  getRandomIndex,
};
