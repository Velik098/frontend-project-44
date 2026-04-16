#!/usr/bin/env node


import { runGame } from '../src/engine.js';
import { getProgressionQuestion, progressionRule } from '../src/games/progression.js';



runGame(getProgressionQuestion, progressionRule);