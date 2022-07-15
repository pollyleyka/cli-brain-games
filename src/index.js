import readlineSync from 'readline-sync';
const getRndInteger = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};


export default (gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const message = getRndExpression();
    const expectedAnswer = GetExpectedAnswer(message);
    console.log(`Question: ${message}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let 's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
