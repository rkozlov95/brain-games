#!/usr/bin/env node

import {
  initBrainGcd,
} from '../../games-engines/brain-gcd-engine';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');
initBrainGcd(3);
