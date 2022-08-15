import getGameLogic from '../index.js';
import getRandomNumber from '../helper.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenGameData = () => {
  const expression = getRandomNumber();

  let expectedAnswer;
  if (expression % 2 === 0) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getEvenGameData);
};
