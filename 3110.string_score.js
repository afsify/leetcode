function stringScore(s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return score;
}

// Example usage:
console.log(stringScore("hello")); // Output: 13
console.log(stringScore("zaz")); // Output: 50
