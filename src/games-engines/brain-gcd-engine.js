import {
  initGame,
  discoverName,
  getQuestion,
  greeting,
} from '..';

export const newGameQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return `${num1} ${num2}`;
};

export const trueAnswer = (data) => {
  let first = Number(data[0]);
  let second = Number(data[1]);
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  return `${first}`;
};

export const parseQuesion = (pair) => {
  const question = getQuestion(pair);
  const data = question.split(' ');
  return trueAnswer(data);
};

export const initBrainGcd = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  return initGame(3, user, parseQuesion, newGameQuestion);
};
