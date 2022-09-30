const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (numbers) => getRandomNumber(0, numbers.length);

export {
  getRandomNumber,
  getRandomIndex,
};
