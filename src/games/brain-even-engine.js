import {
  initGame,
  getQuestion,
  getRandomNum,
} from '../engine';

export const newGameQuestion = () => getRandomNum(1, 100);

export const parityCheck = (num) => num % 2 === 0;

export const trueAnswer = (pair) => (parityCheck(getQuestion(pair)) ? 'yes' : 'no');

export const initBrainEven = () => (initGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  3,
  trueAnswer,
  newGameQuestion,
));
