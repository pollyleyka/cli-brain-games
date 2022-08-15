import readlineSync from 'readline-sync';

export default (gameRules, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let round = 0; round < 3; round += 1) {
    const [questionExpression, expectedAnswer] = getGameData();

    console.log(`Question: ${questionExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
