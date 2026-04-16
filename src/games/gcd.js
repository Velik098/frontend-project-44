const getRandomInt = () => Math.floor(Math.random() * 100);

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const getGcdQuestion = () => {
  const a = getRandomInt();
  const b = getRandomInt();

  const question = `${a} ${b}`;
  const answer = gcd(a, b);

  return { question, answer };
};

export const gcdRule = 'Find the greatest common divisor of given numbers.';