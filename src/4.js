const express = require('express');
const app = express();

app.get('/math-problems', (req, res) => {
  const problem1 = {
    type: 'addition',
    numbers: [2, 3],
    answer: 5,
  };

  const problem2 = {
    type: 'subtraction',
    numbers: [4, 2],
    answer: 2,
  };

  const problems = [problem1, problem2];

  res.json(problems);
});
