function getRandomNode() {
  const nodes = [
    { id: '1', name: 'Node 1' },
    { id: '2', name: 'Node 2' },
    { id: '3', name: 'Node 3' }
  ];

  return nodes[Math.floor(Math.random() * nodes.length)];
}

console.log(getRandomNode());
