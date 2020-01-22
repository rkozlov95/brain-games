import playGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const iterationsCount = 3;

const isEven = (num) => num % 2 === 0;

const makeEvenGame = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return makeGame(question, answer);
};

const initBrainEven = () => playGame(descriptionGame, makeEvenGame, iterationsCount);

export default initBrainEven;
