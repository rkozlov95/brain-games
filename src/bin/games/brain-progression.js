#!/usr/bin/env node

import {
  initBrainProgression,
} from '../../games-engines/brain-progression-engine';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');
initBrainProgression(3);
