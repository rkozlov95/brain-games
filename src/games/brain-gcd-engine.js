import {
  initGame,
  getQuestion,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'Find the greatest common divisor of given numbers.';

export const newGameQuestion = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  return `${num1} ${num2}`;
};

export const getNode = (first, second) => {
  if (first === second) {
    return first;
  }
  if (first > second) {
    return getNode(first - second, second);
  }
  return getNode(first, second - first);
};

export const parseQuesion = (pair) => (getQuestion(pair).split(' '));

export const trueAnswer = (pair) => {
  const data = parseQuesion(pair);
  const num1 = Number(data[0]);
  const num2 = Number(data[1]);
  return `${getNode(num1, num2)}`;
};

export const initBrainGcd = () => (initGame(
  descriptionGame,
  trueAnswer,
  newGameQuestion,
));
