import gamesLogic from '../src/index.js';
import getRndInteger from '../src/rndInt.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
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
