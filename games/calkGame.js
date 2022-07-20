import gamesLogic from '../src/index.js';
import getRndInteger from '../src/rndInt.js';

const gameRules = 'What is the result of the expression?';

const getGameData = () => {
  const operations = ['+', '-', '*'];
  const expression = `${getRndInteger()} ${operations[getRndInteger(0, 3)]} ${getRndInteger()}`;

  const expressionArray = expression.split(' ');
  let expectedAnswer = '';
  if (expressionArray.includes('+')) {
    expectedAnswer += (Number(expressionArray[0]) + Number(expressionArray[2]));
  } else if (expressionArray.includes('-')) {
    expectedAnswer += (Number(expressionArray[0]) - Number(expressionArray[2]));
  } else if (expressionArray.includes('*')) {
    expectedAnswer += (Number(expressionArray[0]) * Number(expressionArray[2]));
  }
  return [expression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
