#!/usr/bin/env node


import { runGame } from '../src/engine.js';
import { getPrimeQuestion, primeRule } from '../src/games/prime.js';



runGame(getPrimeQuestion, primeRule );