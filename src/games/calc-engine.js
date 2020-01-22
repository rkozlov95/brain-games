import playGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'What is the result of the expression?';

const signs = '-+*';

const iterationsCount = 3;

const getSign = () => {
  const strLength = signs.length;
  return signs.charAt(getRandomNum(0, strLength - 1));
};

const getTrueAnswer = (firstNum, sign, secondNum) => {
  switch (sign) {
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return false;
  }
};

const makeGameCalc = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const sign = getSign();
  const question = `${num1} ${sign} ${num2}`;
  const answer = getTrueAnswer(num1, sign, num2).toString();
  return makeGame(question, answer);
};

const initBrainCalc = () => playGame(descriptionGame, makeGameCalc, iterationsCount);

export default initBrainCalc;
