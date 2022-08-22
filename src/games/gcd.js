import getСompetition from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let greatestCommonDivisor;
  if (firstNumber === secondNumber) {
    greatestCommonDivisor = `${firstNumber}`;
  }
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  greatestCommonDivisor = (firstNumber + secondNumber);
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
