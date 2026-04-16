#!/usr/bin/env node

import { startCli } from '../src/cli.js';
import { runGame } from '../src/engine.js';
import { getGcdQuestion, gcdRule } from '../src/games/gcd.js';

const name = startCli();

runGame(getGcdQuestion, gcdRule, name);