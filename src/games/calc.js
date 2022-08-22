import getСompetition from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstNumber, operator, secondNumber) => {
  let calculated = '';
  switch (operator) {
    case '+':
      calculated += (firstNumber + secondNumber);
      break;
    case '-':
      calculated += (firstNumber - secondNumber);
      break;
    case '*':
      calculated += (firstNumber * secondNumber);
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return calculated;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, 3)];
  const question = `${firstNumber} + ${operator} + ${secondNumber}`;
  const expectedAnswer = calculate(firstNumber, operator, secondNumber);
  return [question, expectedAnswer];
};

export default () => {
  getСompetition(description, generateRound);
};
