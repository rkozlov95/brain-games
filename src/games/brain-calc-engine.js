import {
  initGame,
  makeGame,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'What is the result of the expression?';

export const generateSign = (str) => {
  const strLength = str.length;
  return str.charAt(getRandomNum(0, strLength - 1));
};

export const trueAnswer = (first, sign, second) => {
  switch (sign) {
    case '-':
      return first - second;
    case '+':
      return first + second;
    case '*':
      return first * second;
    default:
      return false;
  }
};

export const makeGameCalc = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const sign = generateSign('-+*');
  const data = [num1, sign, num2];
  return makeGame(data.join(' '), trueAnswer(num1, sign, num2).toString());
};

export const initBrainCalc = () => (initGame(
  descriptionGame,
  makeGameCalc,
));
