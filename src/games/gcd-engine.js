import playGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const iterationsCount = 3;

const getGcd = (first, second) => {
  if (first === second) {
    return first;
  }
  if (first > second) {
    return getGcd(first - second, second);
  }
  return getGcd(first, second - first);
};

const makeGameGcd = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const nums = [firstNum, secondNum];
  const question = nums.join(' ');
  const answer = getGcd(firstNum, secondNum).toString();
  return makeGame(question, answer);
};

const initBrainGcd = () => playGame(descriptionGame, makeGameGcd, iterationsCount);

export default initBrainGcd;
