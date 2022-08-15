import getGameLogic from '../index.js';
import getRandomNumber from '../helper.js';

const gameRules = 'What is the result of the expression?';

const getExpression = () => {
  const operators = ['+', '-', '*'];
  const expression = `${getRandomNumber(1, 10)} ${operators[getRandomNumber(0, 3)]} ${getRandomNumber(1, 10)}`;
  return expression;
};

const getExpectedAnswer = (expression) => {
  let expectedAnswer = '';
  const expressionSymbols = expression.split(' ');
  const a = Number(expressionSymbols[0]);
  const b = Number(expressionSymbols[2]);

  if (expressionSymbols.includes('+')) {
    expectedAnswer += (a + b);
  } else if (expressionSymbols.includes('-')) {
    expectedAnswer += (a - b);
  } else {
    expectedAnswer += (a * b);
  }
  return expectedAnswer;
};

const getCalcGameData = () => {
  const expression = getExpression();
  const expectedAnswer = getExpectedAnswer(expression);
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getCalcGameData);
};
