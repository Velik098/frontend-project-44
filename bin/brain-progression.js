#!/usr/bin/env node

import { startCli } from '../src/cli.js';
import { runGame } from '../src/engine.js';
import { getProgressionQuestion, progressionRule } from '../src/games/progression.js';

const name = startCli();

runGame(getProgressionQuestion, progressionRule, name);