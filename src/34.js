let fs = require('fs');
let readline = require('readline');

const data = {
  "nodes": [],
  "edges": []
};

data.nodes.push({
  "id": 1,
  "label": "Math",
  "description": "A set of mathematical operations and concepts."
});

data.edges = [
  { "source": 1, "target": 2 },
  { "source": 1, "target": 3 },
  { "source": 4, "target": 5 }
];

fs.writeFile("math-problems.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log('Data written to math-problems.json');
});
