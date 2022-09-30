import run from '../index.js';
import {
  getRandomNumber,
  getRandomIndex,
} from '../helpers.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 20;

const createProgression = () => {
  const expressionLength = getRandomNumber(minLength, maxLength);
  const difference = getRandomNumber(minStep, maxStep);
  const expressionStart = getRandomNumber(minRange, maxRange);
  const progressions = [expressionStart];
  for (let i = 1; i < expressionLength; i += 1) {
    progressions[i] = progressions[i - 1] + difference;
  }
  return progressions;
};

const generateRound = () => {
  const progressions = createProgression();
  const emptyPlaceIndex = getRandomIndex(progressions);
  const number = progressions[emptyPlaceIndex];
  progressions[emptyPlaceIndex] = '..';
  const expectedAnswer = String(number);
  const question = progressions.join(' ');

  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
