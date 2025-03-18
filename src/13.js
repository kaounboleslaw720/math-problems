const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const solveMathProblem = (problemType, numbers) => {
  const [num1, num2] = numbers;
  switch (problemType) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
};

const main = () => {
  const problemType = Math.random() < 0.5 ? "add" : "subtract";
  const numbers = [getRandomNumber(), getRandomNumber()];
  console.log(solveMathProblem(problemType, numbers));
};

main();
