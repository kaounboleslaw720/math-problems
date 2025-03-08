const getRandomMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operator;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = "+";
      return `${num1} ${operator} ${num2}`;
    case 1:
      operator = "-";
      return `${num1} ${operator} ${num2}`;
    case 2:
      operator = "*";
      return `${num1} ${operator} ${num2}`;
    default:
      throw new Error("Invalid math operation");
  }
};
