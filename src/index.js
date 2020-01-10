import readlineSync from 'readline-sync';

import { cons, car, cdr } from '@hexlet/pairs';

export const discoverName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

export const makeGame = (question, answer) => cons(question, answer);

export const getQuestion = (pair) => car(pair);

export const getUserAnswer = (pair) => cdr(pair);

export const initGame = (description, iter, trueAnswer, gameQuest) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  const gameIter = (iters, userName, answer, newGameQuest) => {
    const gameQuestion = newGameQuest();
    const userAnswer = readlineSync.question(`Question: ${gameQuestion}\n`);
    const newIter = makeGame(gameQuestion, userAnswer);
    console.log(`Your Answer: ${getUserAnswer(newIter)}`);
    if (answer(newIter) === getUserAnswer(newIter)) {
      console.log('Correct!');
    } else {
      console.log(`'${getUserAnswer(newIter)}' is wrong answer ;(. Correct answer was '${answer(newIter)}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    return (iters > 1) ? gameIter(iters - 1, userName, answer, newGameQuest) : console.log(`Congratulations, ${userName}!`);
  };
  return gameIter(iter, user, trueAnswer, gameQuest);
};
