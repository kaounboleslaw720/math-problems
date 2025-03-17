const mathProblems = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

// Generate a random math problem
let problem = mathProblems[Math.floor(Math.random() * Object.keys(mathProblems).length)] + '(' + Math.floor(Math.random() * 10) + ', ' + Math.floor(Math.random() * 10) + ')';
console.log(problem);
