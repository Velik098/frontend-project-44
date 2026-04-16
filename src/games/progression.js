const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const buildProgression = (start, step, length) => {
  const result = []

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step)
  }

  return result
}

export const getProgressionQuestion = () => {
  const length = getRandomInt(5, 10)
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)

  const progression = buildProgression(start, step, length)

  const hiddenIndex = getRandomInt(0, length - 1)
  const answer = progression[hiddenIndex]

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return { question, answer }
}

export const progressionRule = 'What number is missing in the progression?'
