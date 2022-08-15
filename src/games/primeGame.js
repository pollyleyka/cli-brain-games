import gamesLogic from '../index.js';
import getRndInteger from '../helper.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// const getGameData = () => {
//   const expression = getRndInteger();
//   let expectedAnswer;
//   const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
//     47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
//   if (primeNumbers.includes(expression)) {
//     expectedAnswer = 'yes';
//   } else {
//     expectedAnswer = 'no';
//   }
//   return [expression, expectedAnswer];
// };
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const expression = getRndInteger();
  let expectedAnswer;
  if (expression <= 1) {
    expectedAnswer = 'no';
  } else {
    expectedAnswer = isPrime(expression) ? 'yes' : 'no';
  }
  return [expression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
