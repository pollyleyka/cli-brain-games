import gamesLogic from '../src/index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = (n = 100) => {
  const expression = Math.floor(Math.random() * (n - 0)) + 0;

  const array = [];
  const limit = n;
  const primeNumbers = [];

  for (let i = 2; i < limit; i += 1) {
    array.push(true);
  }

  for (let i = 2; i <= limit; i += 1) {
    if (array[i]) {
      for (let j = i * i; j < limit; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i < limit; i += 1) {
    if (array[i]) {
      primeNumbers.push(i);
    }
  }
  let expectedAnswer;
  if (primeNumbers.includes(expression)) {
    expectedAnswer = 'yes';
  }
  expectedAnswer = 'no';

  return [expression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
