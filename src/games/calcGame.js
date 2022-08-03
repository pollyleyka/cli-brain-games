import getGameLogic from '../index.js';
import getRndInteger from '../helper.js';

const gameRules = 'What is the result of the expression?';

const getExpression = () => {
  const operators = ['+', '-', '*'];
  const expression = `${getRndInteger(1, 10)} ${operators[getRndInteger(0, 3)]} ${getRndInteger(1, 10)}`;
  return expression;
};

const getExpectedAnswer = (expression) => {
  let expectedAnswer = '';
  const splitedExpressions = expression.split(' ');
  const a = Number(splitedExpressions[0]);
  const b = Number(splitedExpressions[2]);

  if (splitedExpressions.includes('+')) {
    expectedAnswer += (a + b);
  } else if (splitedExpressions.includes('-')) {
    expectedAnswer += (a - b);
  } else {
    expectedAnswer += (a * b);
  }
  return expectedAnswer;
};

const getGameData = () => {
  const expression = getExpression();
  const expectedAnswer = getExpectedAnswer(expression);
  return [expression, expectedAnswer];
};

export default () => {
  getGameLogic(gameRules, getGameData);
};
