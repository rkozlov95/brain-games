import {
  initGame,
  makeGame,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isSimpleNum = (n) => {
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

export const trueAnswer = (num) => (isSimpleNum(num) ? 'yes' : 'no');

export const makeGamePrime = () => {
  const question = getRandomNum(1, 100);
  const answer = trueAnswer(question);
  return makeGame(question, answer);
};


export const initBrainPrime = () => (initGame(
  descriptionGame,
  makeGamePrime,
));
