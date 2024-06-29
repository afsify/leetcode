function getConcatenation(numbers) {
  const n = numbers.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    ans[i] = numbers[i];
    ans[i + n] = numbers[i];
  }

  return ans;
}

// Example 1:
console.log(getConcatenation([1, 2, 1])); // Output: [1, 2, 1, 1, 2, 1]

// Example 2:
console.log(getConcatenation([1, 3, 2, 1])); // Output: [1, 3, 2, 1, 1, 3, 2, 1]
