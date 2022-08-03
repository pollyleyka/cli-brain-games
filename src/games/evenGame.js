import gamesLogic from '../index.js';

const getRndInteger = (min = 0, max = 100) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};

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
