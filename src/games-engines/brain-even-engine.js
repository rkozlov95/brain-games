import {
  initGame,
  discoverName,
  getQuestion,
} from '..';

export const newGameQuestion = () => {
  const num = Math.floor(Math.random() * 101) + 1;
  return num;
};

export const parityCheck = (pair) => ((getQuestion(pair) % 2 === 0) ? 'yes' : 'no');

export const initBrainEven = (iter) => {
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  return initGame(iter, user, parityCheck, newGameQuestion);
};
