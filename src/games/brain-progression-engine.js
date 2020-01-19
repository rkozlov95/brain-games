import initGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'What number is missing in the progression?';

const getProgression = (k, b, progressionSize) => {
  const progression = [];
  for (let i = 0; i <= (progressionSize - 1); i += 1) {
    progression[i] = k * i + b;
  }
  return progression;
};

const prepareGame = (mas) => {
  const data = mas;
  const randomIndex = getRandomNum(0, data.length - 1);
  const answer = data[randomIndex].toString();
  data[randomIndex] = '..';
  const question = data.join(' ');
  return makeGame(question, answer);
};

const makeGameProgression = () => {
  const k = getRandomNum(1, 10);
  const b = getRandomNum(1, 10);
  const progressionSize = 10;
  const progression = getProgression(k, b, progressionSize);
  return prepareGame(progression);
};

const initBrainProgression = () => (initGame(
  descriptionGame,
  makeGameProgression,
));

export default initBrainProgression;
