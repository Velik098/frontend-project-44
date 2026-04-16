#!/usr/bin/env node

import { runGame } from '../src/engine.js'
import { getCalcQuestion, calcRule } from '../src/games/calc.js'

runGame(getCalcQuestion, calcRule)
