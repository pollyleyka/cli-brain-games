import getGameLogic from '../index.js';
import getRndInteger from '../helper.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const expression = getRndInteger();

  let expectedAnswer;
  if (expression % 2 === 0) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getGameData);
};
