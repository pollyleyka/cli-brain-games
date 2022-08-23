import run from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const expectedAnswer = isEven(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => {
  run(description, generateRound);
};
