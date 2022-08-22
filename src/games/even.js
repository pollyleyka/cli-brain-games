import getСompetition from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const question = getRandomNumber();
  const expectedAnswer = isEven(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => {
  getСompetition(description, generateRound);
};
