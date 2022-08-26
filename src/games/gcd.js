import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 10;

const getGcd = (x, y) => {
  if (x === y) {
    return x;
  }
  let a = x;
  let b = y;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const gcd = getGcd(number1, number2);

  const question = `${number1} ${number2}`;
  const expectedAnswer = String(gcd);
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
