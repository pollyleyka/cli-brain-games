import gamesLogic from '../src/index.js';
import getRndInteger from '../src/rndInt.js';

const gameRules = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionLength = getRndInteger(5, 10);
  const progressionValue = getRndInteger(1, 10);
  const start = getRndInteger(1, 20);
  const progression = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionValue;
  }

  const emptyPlace = getRndInteger(0, progression.length);
  const expectedAnswer = `${progression[emptyPlace]}`;
  progression[emptyPlace] = '...';
  return [progression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
