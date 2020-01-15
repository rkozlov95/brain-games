import {
  initGame,
  makeGame,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'Find the greatest common divisor of given numbers.';

export const getNode = (first, second) => {
  if (first === second) {
    return first;
  }
  if (first > second) {
    return getNode(first - second, second);
  }
  return getNode(first, second - first);
};

export const makeGameGcd = () => {
  const first = getRandomNum(1, 100);
  const second = getRandomNum(1, 100);
  const nums = [first, second];
  return makeGame(nums.join(' '), getNode(first, second).toString());
};

export const initBrainGcd = () => (initGame(
  descriptionGame,
  makeGameGcd,
));
