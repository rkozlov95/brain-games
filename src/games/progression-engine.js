import playGame from '../engine';

import {
  makeGame,
  getRandomNum,
} from '../utils';

const descriptionGame = 'What number is missing in the progression?';

const iterationsCount = 3;

const getProgression = (k, b, progressionSize) => {
  const progression = [];
  for (let i = 0; i <= (progressionSize - 1); i += 1) {
    progression[i] = k * i + b;
  }
  return progression;
};

const prepareQuestion = (progression, randomIndex) => {
  const data = progression;
  data[randomIndex] = '..';
  const newProgression = data.join(' ');
  return newProgression;
};

const makeGameProgression = () => {
  const k = getRandomNum(1, 10);
  const b = getRandomNum(1, 10);
  const progressionSize = 10;
  const progression = getProgression(k, b, progressionSize);
  const randomIndex = getRandomNum(0, progressionSize - 1);
  const answer = progression[randomIndex];
  const question = prepareQuestion(progression, randomIndex);
  return makeGame(question, answer);
};

const initBrainProgression = () => playGame(descriptionGame, makeGameProgression, iterationsCount);

export default initBrainProgression;
