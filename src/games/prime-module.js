import playGame from '../engine';

import {
  makePairQuestionAnswer,
  getRandomNumber,
} from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimple = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeGamePrime = () => {
  const question = getRandomNumber(1, 100);
  const answer = isSimple(question) ? 'yes' : 'no';
  return makePairQuestionAnswer(question, answer);
};


const startGamePrime = () => playGame(gameDescription, makeGamePrime);

export default startGamePrime;
