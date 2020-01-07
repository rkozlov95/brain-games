#!/usr/bin/env node

import {
  initBrainCalc,
} from '../../games-engines/brain-calc-engine';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
initBrainCalc(3);
