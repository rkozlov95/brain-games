import {
  initGame,
  getQuestion,
} from '..';

export const newGameQuestion = () => {
  const num = Math.floor(Math.random() * 101) + 1;
  return num;
};

export const parityCheck = (pair) => ((getQuestion(pair) % 2 === 0) ? 'yes' : 'no');

export const initBrainEven = () => (initGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  3,
  parityCheck,
  newGameQuestion,
));
