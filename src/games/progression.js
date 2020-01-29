import playGame from '../engine';

import {
  makePairQuestionAnswer,
  getRandomNumber,
  toString,
} from '../utils';

const gameDescription = 'What number is missing in the progression?';

export const getProgression = (progressionStep, initialValue, progressionSize) => {
  const progression = [];
  for (let i = 0; i <= (progressionSize - 1); i += 1) {
    progression[i] = progressionStep * i + initialValue;
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
  const progressionStep = getRandomNumber(1, 10);
  const initialValue = getRandomNumber(1, 10);
  const progressionSize = 10;
  const progression = getProgression(progressionStep, initialValue, progressionSize);
  const randomIndex = getRandomNumber(0, progressionSize - 1);
  const answer = toString(progression[randomIndex]);
  const question = prepareQuestion(progression, randomIndex);
  return makePairQuestionAnswer(question, answer);
};

const startGameProgression = () => playGame(gameDescription, makeGameProgression);

export default startGameProgression;
