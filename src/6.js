const randomMathProblem = () => {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ['+', '-', '*', '/'];
  const problem = `${numbers[0]} ${operators[0]} ${numbers[1]} ${operators[1]} ${numbers[2]} ${operators[2]} ${numbers[3]} ${operators[3]} ${numbers[4]}`;
  return problem;
};
