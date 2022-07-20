import gamesLogic from '../src/index.js';
import getRndInteger from '../src/helper.js';

const gameRules = 'What number is missing in the progression?';

const getGameData = () => {
  const length = getRndInteger(5, 10);
  const difference = getRndInteger(1, 10);
  const start = getRndInteger(1, 20);
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }

  const emptyPlace = getRndInteger(0, progression.length);
  const expectedAnswer = `${progression[emptyPlace]}`;
  progression[emptyPlace] = '...';
  return [progression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
