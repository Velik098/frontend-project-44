const getRandom = () => Math.floor(Math.random() * 20)

const operators = ['+', '-', '*']

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return null
  }
};

export const getCalcQuestion = () => {
  const a = getRandom();
  const b = getRandom();
  const op = operators[Math.floor(Math.random() * operators.length)]

  const question = `${a} ${op} ${b}`
  const answer = calculate(a, b, op)

  return { question, answer }
}

export const calcRule = 'What is the result of the expression?';