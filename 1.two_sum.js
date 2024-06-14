function twoSum(numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(numbers[i], i);
  }

  // If no solution is found (though the problem guarantees one)
  throw new Error("No two sum solution");
}

// Example 1
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Example 2
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

// Example 3
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
