import {
  initGame,
  getQuestion,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'What is the result of the expression?';

export const generateSigns = (str) => {
  const strLength = str.length;
  return str.charAt(getRandomNum(0, strLength - 1));
};

export const newGameQuestion = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const arithmetic = generateSigns('-+*');
  return `${num1} ${arithmetic} ${num2}`;
};

export const parseQuesion = (pair) => {
  const question = getQuestion(pair);
  const data = question.split(' ');
  return data;
};

export const trueAnswer = (pair) => {
  const data = parseQuesion(pair);
  const first = Number(data[0]);
  const second = Number(data[2]);
  const arithmetic = data[1];
  switch (arithmetic) {
    case '-':
      return `${first - second}`;
    case '+':
      return `${first + second}`;
    case '*':
      return `${first * second}`;
    default:
      return false;
  }
};

export const initBrainCalc = () => (initGame(
  descriptionGame,
  trueAnswer,
  newGameQuestion,
));
