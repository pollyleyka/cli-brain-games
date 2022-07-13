import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const randomNumbersForGame = [15, 6, 7];
  let expectedAnswer;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (const number of randomNumbersForGame) {
    if (number % 2 !== 0) {
      expectedAnswer = 'no';
    } else {
      expectedAnswer = 'yes';
    }

    console.log(`Question: ${number}`);
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
