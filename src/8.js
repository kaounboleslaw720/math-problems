const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const solveMathProblem = (problem) => {
  let solution = null;
  switch (problem.type) {
    case 'addition':
      solution = problem.numbers[0] + problem.numbers[1];
      break;
    case 'subtraction':
      solution = problem.numbers[0] - problem.numbers[1];
      break;
    case 'multiplication':
      solution = problem.numbers[0] * problem.numbers[1];
      break;
    case 'division':
      if (problem.numbers[1] !== 0) {
        solution = problem.numbers[0] / problem.numbers[1];
      } else {
        console.log('Cannot divide by zero!');
      }
      break;
    default:
      console.log('Unknown problem type!');
  }
  return solution;
}

const generateMathProblem = () => {
  const numbers = [getRandomNumber(), getRandomNumber()];
  let operation;
  switch (getRandomNumber()) {
    case 1:
      operation = 'addition';
      break;
    case 2:
      operation = 'subtraction';
      break;
    case 3:
      operation = 'multiplication';
      break;
    case 4:
      operation = 'division';
      break;
    default:
      console.log('Unknown problem type!');
  }
  return { numbers, type: operation };
}

const main = () => {
  const problem = generateMathProblem();
  console.log(solveMathProblem(problem));
}
