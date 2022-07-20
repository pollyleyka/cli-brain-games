import gamesLogic from '../src/index.js';
import getRndInteger from '../src/rndInt.js';

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
  gamesLogic(gameRules, getGameData);
};
