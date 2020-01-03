import readlineSync from 'readline-sync';

import { cons, car, cdr } from '@hexlet/pairs';

export const discoverName = () => {
  const name = readlineSync.question('May I have your name?: ');
  return name;
};

// brain-even game

export const initBrainEven = () => {
  const num = Math.floor(Math.random() * 101) + 1;
  const question = readlineSync.question(`Question: ${num}\n`);
  return cons(num, question);
};

export const getNum = (pair) => car(pair);

export const getQuestion = (pair) => cdr(pair);

export const parityCheck = (pair) => getNum(pair) % 2 === 0;
