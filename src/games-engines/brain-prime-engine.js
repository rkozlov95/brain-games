import {
  initGame,
  getQuestion,
} from '..';

export const newGameQuestion = () => {
  const num = Math.floor(Math.random() * 101) + 1;
  return num;
};

export const isSimpleNum = (n) => {
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const trueAnswer = (pair) => (isSimpleNum(Number(getQuestion(pair))) ? 'yes' : 'no');

export const initBrainPrime = () => (initGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  3,
  trueAnswer,
  newGameQuestion,
));
