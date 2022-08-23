import run from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber();
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
