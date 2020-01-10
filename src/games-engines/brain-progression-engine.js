import {
  initGame,
  discoverName,
  getQuestion,
  greeting,
} from '..';


export const hideOneNumber = (str) => {
  const data = str.split(' ');
  const randNum = Math.floor(Math.random() * 9);
  data[randNum] = '..';
  return data.join(' ');
};

export const newGameQuestion = () => {
  const k = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  let progression = `${k * 1 + b}`;
  for (let i = 2; i <= 10; i += 1) {
    progression += ` ${k * i + b}`;
  }
  return hideOneNumber(progression);
};

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

export const initBrainProgression = () => {
  greeting();
  console.log('What number is missing in the progression?');
  const user = discoverName();
  console.log(`Hello, ${user}!`);
  return initGame(3, user, trueAnswer, newGameQuestion);
};
