import getGameLogic from '../index.js';
import getRandomNumber from '../helper.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const expressionLength = getRandomNumber(5, 10);
  const progressionDifference = getRandomNumber(1, 10);
  const expressionStart = getRandomNumber(1, 20);
  const progressions = [expressionStart];
  for (let i = 1; i < expressionLength; i += 1) {
    progressions[i] = progressions[i - 1] + progressionDifference;
  }
  return progressions;
};

const getProgressionGameData = () => {
  const progressions = getProgression();
  const emptyPlace = getRandomNumber(0, progressions.length);
  const expectedAnswer = `${progressions[emptyPlace]}`;
  progressions[emptyPlace] = '..';
  const expression = progressions.join(' ');
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getProgressionGameData);
};
