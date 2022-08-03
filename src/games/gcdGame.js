import gamesLogic from '../index.js';

const getRndInteger = (min = 0, max = 100) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const twoNumbers = `${getRndInteger(0, 19)} ${getRndInteger(0, 10)}`;

  const coll = twoNumbers.split(' ');
  let a = Number(coll[0]);
  let b = Number(coll[1]);
  let expectedAnswer;
  if (a === b) {
    expectedAnswer = `${a}`;
  }
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  expectedAnswer = (a + b);
  expectedAnswer = expectedAnswer.toString();
  return [twoNumbers, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
