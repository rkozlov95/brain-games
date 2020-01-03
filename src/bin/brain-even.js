#!/usr/bin/env node
import {
  discoverName,
  initBrainEven,
  getQuestion,
  parityCheck,
} from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const user = discoverName();
console.log(`Hello, ${user}!`);
let iter = 0;
while (iter < 3) {
  const newGame = initBrainEven();
  const userAnswer = getQuestion(newGame);
  const trueAnswer = (parityCheck(newGame)) ? 'yes' : 'no';

  console.log(`Your Answer: ${userAnswer}`);
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    iter += 1;
    if (iter === 3) {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    iter = 3;
    console.log(`${getQuestion(newGame)} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
    console.log(`Let's try again, ${user}!`);
  }
}
