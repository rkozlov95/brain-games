import {
  initGame,
  getQuestion,
  getRandomNum,
} from '../engine';

export const descriptionGame = 'What number is missing in the progression?';


export const getProgression = () => {
  const k = getRandomNum(1, 10);
  const b = getRandomNum(1, 10);
  let progression = `${k * 1 + b}`;
  for (let i = 2; i <= 10; i += 1) {
    progression += ` ${k * i + b}`;
  }
  return progression;
};

export const hideOneNumber = (str) => {
  const data = str.split(' ');
  data[getRandomNum(0, 9)] = '..';
  return data.join(' ');
};

export const newGameQuestion = () => hideOneNumber(getProgression());

export const trueAnswer = (pair) => {
  const str = getQuestion(pair);
  const data = str.split(' ');
  const findInd = data.indexOf('..');
  let d = 0;
  if (data[findInd + 1] !== undefined && data[findInd + 2] !== undefined) {
    d = Number(data[findInd + 2]) - Number(data[findInd + 1]);
  } else {
    d = Number(data[findInd - 1]) - Number(data[findInd - 2]);
  }
  const a1 = (data[0] === '..') ? Number(data[1]) - d : Number(data[0]);
  return `${a1 + (d * findInd)}`;
};

export const initBrainProgression = () => (initGame(
  descriptionGame,
  3,
  trueAnswer,
  newGameQuestion,
));
