import readlineSync from 'readline-sync';

import { getAnswer, getQuestion } from './utils';

const iterationsCount = 3;

const ask = (question) => readlineSync.question(`${question}`);

const playGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('May I have your name?');
  const userName = ask(':');
  console.log(`Hello, ${userName}!`);
  const makeGame = (duplicationsCount) => {
    if (duplicationsCount <= 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const gameData = getGameData();
    const question = getQuestion(gameData);
    const answer = getAnswer(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = ask(':');
    console.log(`Your Answer: ${userAnswer}`);
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    return makeGame(duplicationsCount - 1);
  };
  return makeGame(iterationsCount);
};

export default playGame;
