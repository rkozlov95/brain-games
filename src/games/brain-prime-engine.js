import initGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimpleNum = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getTrueAnswer = (num) => (isSimpleNum(num) ? 'yes' : 'no');

const makeGamePrime = () => {
  const question = getRandomNum(1, 100);
  const answer = getTrueAnswer(question);
  return makeGame(question, answer);
};


const initBrainPrime = () => (initGame(
  descriptionGame,
  makeGamePrime,
));

export default initBrainPrime;
