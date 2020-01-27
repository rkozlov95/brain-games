import { cons, car, cdr } from '@hexlet/pairs';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const toString = (string) => string.toString();

export const makePairQuestionAnswer = (question, answer) => cons(question, answer);

export const getQuestion = (pair) => car(pair);

export const getAnswer = (pair) => cdr(pair);
