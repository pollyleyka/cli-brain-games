import run from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const expressionLength = getRandomNumber(5, 10);
  const difference = getRandomNumber(1, 10);
  const expressionStart = getRandomNumber(1, 20);
  const progressions = [expressionStart];
  for (let i = 1; i < expressionLength; i += 1) {
    progressions[i] = progressions[i - 1] + difference;
  }
  return progressions;
};

const generateRound = () => {
  const progressions = getProgression();
  const emptyPlace = getRandomNumber(0, progressions.length);
  const expectedAnswer = `${progressions[emptyPlace]}`;
  progressions[emptyPlace] = '..';
  const question = progressions.join(' ');
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
