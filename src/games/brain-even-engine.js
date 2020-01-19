import initGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getTrueAnswer = (num) => (isEvenNumber(num) ? 'yes' : 'no');

const makeEvenGame = () => {
  const question = getRandomNum(1, 100);
  const answer = getTrueAnswer(question);
  return makeGame(question, answer);
};

const initBrainEven = () => (initGame(
  descriptionGame,
  makeEvenGame,
));

export default initBrainEven;
