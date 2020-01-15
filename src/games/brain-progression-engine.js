import {
  makeGame,
  initGame,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'What number is missing in the progression?';

export const getProgression = (k, b) => {
  const progression = [];
  for (let i = 0; i <= 9; i += 1) {
    progression[i] = k * i + b;
  }
  return progression;
};

export const prepareGame = (mas) => {
  const data = mas;
  const chooseElem = getRandomNum(0, 9);
  const answer = data[chooseElem];
  data[chooseElem] = '..';
  return makeGame(data.join(' '), answer.toString());
};

export const makeGameProgression = () => {
  const k = getRandomNum(1, 10);
  const b = getRandomNum(1, 10);
  const progression = getProgression(k, b);
  return prepareGame(progression);
};

export const initBrainProgression = () => (initGame(
  descriptionGame,
  makeGameProgression,
));
