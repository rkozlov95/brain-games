import playGame from '../engine';

import {
  makePairQuestionAnswer,
  getRandomNumber,
} from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return makePairQuestionAnswer(question, answer);
};

const startGameEven = () => playGame(gameDescription, makeEvenGame);

export default startGameEven;
