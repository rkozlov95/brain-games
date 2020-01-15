import readlineSync from 'readline-sync';

import { cons, car, cdr } from '@hexlet/pairs';

export const discoverName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

export const makeGame = (question, answer) => cons(question, answer);

export const getQuestion = (pair) => car(pair);

export const getAnswer = (pair) => cdr(pair);

export const initGame = (description, game, gameIters = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  const gameIter = (iters, userName, currentGame) => {
    const createGame = currentGame();
    const userAnswer = readlineSync.question(`Question: ${getQuestion(createGame)}\n`);
    console.log(`Your Answer: ${userAnswer}`);
    if (getAnswer(createGame) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswer(createGame)}'.`);
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

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
