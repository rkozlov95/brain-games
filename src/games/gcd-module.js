import playGame from '../engine';

import {
  makePairQuestionAnswer,
  getRandomNumber,
  toString,
} from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    return getGcd(firstNumber - secondNumber, secondNumber);
  }
  return getGcd(firstNumber, secondNumber - firstNumber);
};

const makeGameGcd = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = toString(getGcd(firstNumber, secondNumber));
  return makePairQuestionAnswer(question, answer);
};

const startGameGcd = () => playGame(gameDescription, makeGameGcd);

export default startGameGcd;
