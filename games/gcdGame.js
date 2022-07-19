import gamesLogic from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getTwoNumbers = () => {
  const getRndInteger = (min = 1, max = 10) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };
  const result = `${getRndInteger()} ${getRndInteger()}`;
  return result;
};

const getCommonDvisor = (expression) => {
  const [aString, bString] = expression.split(' ');
  let a = Number(aString);
  let b = Number(bString);
  let result = 0;
  if (a === b) {
    return `${a}`;
  }
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  result += (a + b);
  return `${result}`;
};

export default () => {
  gamesLogic(gameRules, getTwoNumbers, getCommonDvisor);
};
