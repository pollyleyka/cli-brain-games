import gamesLogic from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRndInteger = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

const getExpectedAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  gamesLogic(gameRules, getRndInteger, getExpectedAnswer);
};
