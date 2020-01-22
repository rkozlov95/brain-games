import playGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const iterationsCount = 3;

const isSimple = (n) => {
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

const makeGamePrime = () => {
  const question = getRandomNum(1, 100);
  const answer = isSimple(question) ? 'yes' : 'no';
  return makeGame(question, answer);
};


const initBrainPrime = () => playGame(descriptionGame, makeGamePrime, iterationsCount);

export default initBrainPrime;
