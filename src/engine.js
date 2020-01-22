import readlineSync from 'readline-sync';

import { getAnswer, getQuestion } from './utils';

const discoverUserName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

const playGame = (description, gameFunction, iterationsCount) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = discoverUserName();
  console.log(`Hello, ${userName}!`);
  const gameIter = (iter) => {
    if (iter <= 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const gameData = gameFunction();
    const question = getQuestion(gameData);
    const answer = getAnswer(gameData);
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your Answer: ${userAnswer}`);
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    return gameIter(iter - 1);
  };
  return gameIter(iterationsCount);
};

export default playGame;
