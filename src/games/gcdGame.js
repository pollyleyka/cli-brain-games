import getGameLogic from '../index.js';
import getRandomNumber from '../helper.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (twoNumbers) => {
  const twoNumbersSymbols = twoNumbers.split(' ');
  let a = Number(twoNumbersSymbols[0]);
  let b = Number(twoNumbersSymbols[1]);
  let greatestCommonDivisor;
  if (a === b) {
    greatestCommonDivisor = `${a}`;
  }
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

const getGcdGameData = () => {
  const expression = `${getRandomNumber(0, 10)} ${getRandomNumber(0, 10)}`;
  const expectedAnswer = getGreatestCommonDivisor(expression);
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getGcdGameData);
};
