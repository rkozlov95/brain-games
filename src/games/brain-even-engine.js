import {
  initGame,
  makeGame,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const parityCheck = (num) => num % 2 === 0;

export const trueAnswer = (num) => (parityCheck(num) ? 'yes' : 'no');

export const makeEvenGame = () => {
  const num = getRandomNum(1, 100);
  return makeGame(num, trueAnswer(num));
};

export const initBrainEven = () => (initGame(
  descriptionGame,
  makeEvenGame,
));
