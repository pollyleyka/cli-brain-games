import gamesLogic from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const getGameData = () => {
  const getRndInteger = (min = 0, max = 100) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
  };

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
