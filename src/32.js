function getRandomInt(max) {
  var max = Math.max(0, max);
  var min = Math.min(0, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(5)); // Output: 2
