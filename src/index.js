import readlineSync from 'readline-sync';

import { cons, car, cdr } from '@hexlet/pairs';

export const discoverName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

export const makeGame = (question, answer) => cons(question, answer);

export const getQuestion = (pair) => car(pair);

export const getUserAnswer = (pair) => cdr(pair);

export const initGame = (iter, userName, check, newGameQuest) => {
  const gameQuestion = newGameQuest();
  const userAnswer = readlineSync.question(`Question: ${gameQuestion}\n`);
  const newIter = makeGame(gameQuestion, userAnswer);
  console.log(`Your Answer: ${getUserAnswer(newIter)}`);
  if (check(newIter) === getUserAnswer(newIter)) {
    console.log('Correct!');
  } else {
    console.log(`'${getUserAnswer(newIter)}' is wrong answer ;(. Correct answer was '${check(newIter)}'.`);
    return console.log(`Let's try again, ${userName}!`);
  }
  return (iter > 1) ? initGame(iter - 1, userName, check, newGameQuest) : console.log(`Congratulations, ${userName}!`);
};
