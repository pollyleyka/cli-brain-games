import run from '../index.js';
import {
  getRandomNumber,
  getRandomIndex,
} from '../helpers.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 10;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = String(calculate(number1, number2, operator));
  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
