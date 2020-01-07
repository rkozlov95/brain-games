#!/usr/bin/env node

import {
  initBrainEven,
} from '../../games-engines/brain-even-engine';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
initBrainEven(3);
