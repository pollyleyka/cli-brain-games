import gamesLogic from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const getRndInteger = (min = 1, max = 100) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };
  const expression = `${getRndInteger()} ${getRndInteger()}`;

  const [aString, bString] = expression.split(' ');
  let a = Number(aString);
  let b = Number(bString);
  let expectedAnswer = 0;
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
  expectedAnswer += (a + b);
  return [expression, `${expectedAnswer}`];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
