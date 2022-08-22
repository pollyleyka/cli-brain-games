import getСompetition from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let greatestCommonDivisor;
  if (firstNumber === secondNumber) {
    greatestCommonDivisor = `${firstNumber}`;
  }
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  greatestCommonDivisor = (a + b);
  greatestCommonDivisor = greatestCommonDivisor.toString();
  return greatestCommonDivisor;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [question, expectedAnswer];
};

export default () => {
  getСompetition(description, generateRound);
};
