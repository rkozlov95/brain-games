import playGame from '../engine';

import {
  makePairQuestionAnswer,
  getRandomNumber,
  toString,
} from '../utils';

const gameDescription = 'What is the result of the expression?';

const signs = '-+*';

const getSign = () => {
  const symbolsCount = signs.length;
  const randomPosition = getRandomNumber(0, symbolsCount - 1);
  return signs[randomPosition];
};

const getTrueAnswer = (firstNumber, sign, secondNumber) => {
  switch (sign) {
    case '-':
      return firstNumber - secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return false;
  }
};

const makeGameCalc = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const sign = getSign();
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = toString(getTrueAnswer(firstNumber, sign, secondNumber));
  return makePairQuestionAnswer(question, answer);
};

const startGameCalc = () => playGame(gameDescription, makeGameCalc);

export default startGameCalc;
