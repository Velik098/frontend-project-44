#!/usr/bin/env node

import { startCli } from '../src/cli.js';
import { runGame } from '../src/engine.js';
import { getPrimeQuestion, primeRule } from '../src/games/prime.js';

const name = startCli();

runGame(getPrimeQuestion, primeRule, name);