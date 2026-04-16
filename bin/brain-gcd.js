#!/usr/bin/env node

import { runGame } from '../src/engine.js';
import { getGcdQuestion, gcdRule } from '../src/games/gcd.js';

runGame(getGcdQuestion, gcdRule);