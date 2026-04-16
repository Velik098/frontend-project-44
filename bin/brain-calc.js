import { startCli } from '../src/cli.js';
import { runGame } from '../src/engine.js';
import { getCalcQuestion, calcRule } from '../src/games/calc.js';

const name = startCli();

runGame(getCalcQuestion, calcRule, name);