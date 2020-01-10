import {
  initGame,
  discoverName,
  getQuestion,
  greeting,
} from '..';

export const newGameQuestion = () => {
  const num = Math.floor(Math.random() * 101) + 1;
  return num;
};

export const parityCheck = (pair) => ((getQuestion(pair) % 2 === 0) ? 'yes' : 'no');

export const initBrainEven = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  return initGame(3, user, parityCheck, newGameQuestion);
};
