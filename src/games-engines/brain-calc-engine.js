import {
  initGame,
  discoverName,
  getQuestion,
  greeting,
} from '..';

export const generateSign = () => {
  const str = '-+*';
  return str.charAt(Math.floor(Math.random() * 3));
};

export const newGameQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const arithmetic = generateSign();
  return `${num1} ${arithmetic} ${num2}`;
};

export const trueAnswer = (data) => {
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

export const parseQuesion = (pair) => {
  const question = getQuestion(pair);
  const data = question.split(' ');
  return trueAnswer(data);
};

export const initBrainCalc = (iter) => {
  greeting();
  console.log('What is the result of the expression?');
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  return initGame(iter, user, parseQuesion, newGameQuestion);
};
