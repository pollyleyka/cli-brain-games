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
const minStart = 1;
const maxStart = 20;

const createProgression = (length, step, start) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + (step * i);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minStart, maxStart);

  const progression = createProgression(length, step, start);

  const hiddenIndex = getRandomIndex(progression);
  const expectedAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
