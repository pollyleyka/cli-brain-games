import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

//const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const description = '/Answer \'yes\' if given number is prime. Otherwise answer \'no\'./';
const minRange = 1;
const maxRange = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
