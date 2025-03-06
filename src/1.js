// Generate a random math problem using Node.js

const getRandomProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4, 5];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return problem;
};

// Example usage:
console.log(getRandomProblem()); // Output: "3 + 2" or "5 / 4" etc.
