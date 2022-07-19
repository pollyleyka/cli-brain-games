import gamesLogic from '../src/index.js';

const gameRules = 'What number is missing in the progression?';
// const getProgression = () => {
//   const n = getRndInteger(5, 10);
//   const d = getRndInteger(1, 10);
//   const start = getRndInteger(1, 20);
//   const progression = [start];
//   for (let i = 1; i < n; i += 1) {
//     progression[i] = progression[i - 1] + d;
//   }
//   return progression;
// };

const getGameData = () => {
  const getRndInteger = (min = 1, max = 100) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };

  const n = getRndInteger(5, 10);
  const d = getRndInteger(1, 10);
  const start = getRndInteger(1, 20);
  const progression = [start];
  for (let i = 1; i < n; i += 1) {
    progression[i] = progression[i - 1] + d;
  }

  const i = getRndInteger(0, progression.length);
  const expectedAnswer = `${progression[i]}`;
  progression[i] = '...';
  return [progression, expectedAnswer];
};

export default () => {
  gamesLogic(gameRules, getGameData);
};
