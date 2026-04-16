#!/usr/bin/env node

import { runGame } from '../src/engine.js'
import { getEvenQuestion, evenRule } from '../src/games/even.js'

runGame(getEvenQuestion, evenRule)
