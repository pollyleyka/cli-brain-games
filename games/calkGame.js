import gamesLogic from '../src/index.js';
import getRndInteger from '../src/helper.js';

const gameRules = 'What is the result of the expression?';

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const expression = `${getRndInteger()} ${operators[getRndInteger(0, 3)]} ${getRndInteger()}`;

  const coll = expression.split(' ');
  const a = Number(coll[0]);
  const b = Number(coll[2]);
  let expectedAnswer = '';
  if (coll.includes('+')) {
    expectedAnswer += (a + b);
  } else if (coll.includes('-')) {
    expectedAnswer += (a - b);
  } else {
    expectedAnswer += (a * b);
  }
  return [expression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
