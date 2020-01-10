import {
  initGame,
  getQuestion,
  getRandomNum,
} from '..';

export const newGameQuestion = () => getRandomNum(1, 100);

export const parityCheck = (pair) => ((getQuestion(pair) % 2 === 0) ? 'yes' : 'no');

export const initBrainEven = () => (initGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  3,
  parityCheck,
  newGameQuestion,
));
