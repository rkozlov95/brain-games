#!/usr/bin/env node
import { discoverName } from '..';

console.log('Welcome to the Brain Games!');
const user = discoverName();
console.log(`Hello, ${user}!`);