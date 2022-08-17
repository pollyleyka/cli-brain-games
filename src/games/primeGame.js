import getGameLogic from '../index.js';
import getRandomNumber from '../helper.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getPrimeGameData = () => {
  const expression = getRandomNumber();
  const expectedAnswer = isPrime(expression) ? 'yes' : 'no';
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getPrimeGameData);
};
