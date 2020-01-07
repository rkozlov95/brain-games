#!/usr/bin/env node

import {
  initBrainPrime,
} from '../../games-engines/brain-prime-engine';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
initBrainPrime(3);
