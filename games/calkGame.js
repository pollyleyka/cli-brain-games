import gamesLogic from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const getExpression = () => {
  const getRndInteger = (min = 0, max = 100) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };
  const operations = ['+', '-', '*'];
  const result = `${getRndInteger()} ${operations[getRndInteger(0, 3)]} ${getRndInteger()}`;
  return result;
};

const getExpectedAnswer = (expression) => {
  const exprassionArray = expression.split(' ');
  let result = '';
  if (exprassionArray.includes('+')) {
    result += (Number(exprassionArray[0]) + Number(exprassionArray[2]));
  } else if (exprassionArray.includes('-')) {
    result += (Number(exprassionArray[0]) - Number(exprassionArray[2]));
  } else if (exprassionArray.includes('*')) {
    result += (Number(exprassionArray[0]) * Number(exprassionArray[2]));
  }
  return result;
};

export default () => {
  gamesLogic(gameRules, getExpression, getExpectedAnswer);
};
