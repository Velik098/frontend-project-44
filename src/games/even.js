const isEven = (num) => num % 2 === 0;

export const getEvenQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';