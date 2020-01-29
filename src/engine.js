import readlineSync from 'readline-sync';

import { getAnswer, getQuestion } from './utils';

const iterationsCount = 3;

const ask = (question) => readlineSync.question(`${question}`);

const playGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const playRound = (counter) => {
    if (counter <= 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const gameData = getGameData();
    const question = getQuestion(gameData);
    const answer = getAnswer(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = ask('Your Answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    return playRound(counter - 1);
  };
  return playRound(iterationsCount);
};

export default playGame;
