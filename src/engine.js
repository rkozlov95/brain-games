import readlineSync from 'readline-sync';

import { getAnswer, getQuestion } from './utils';

const discoverUserName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

const initGame = (description, game, gameIters = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = discoverUserName();
  console.log(`Hello, ${user}!`);
  const gameIter = (iters, userName, currentGame) => {
    const gameData = currentGame();
    const userAnswer = readlineSync.question(`Question: ${getQuestion(gameData)}\n`);
    console.log(`Your Answer: ${userAnswer}`);
    if (getAnswer(gameData) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswer(gameData)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    if (iters <= 1) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    return gameIter(iters - 1, userName, currentGame);
  };
  return gameIter(gameIters, user, game);
};

export default initGame;
