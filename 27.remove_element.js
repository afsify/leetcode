const removeElement = (numbers, val) => {
  // Initialize a counter `k` to keep track of the position for non-val elements
  let k = 0;

  // Iterate through each element in the `numbers` array
  for (let i = 0; i < numbers.length; i++) {
    // If the current element is not equal to `val`
    if (numbers[i] !== val) {
      // Assign the current element to the `k`-th position in the array
      numbers[k] = numbers[i];
      // Increment `k` to move to the next position for the next non-val element
      k++;
    }
  }

  // Return the count of elements that are not equal to `val`
  return k;
};

// Example usage:
let numbers = [3, 2, 2, 3, 4]; // Initial array
let val = 3; // Value to be removed

// Call the function and store the result in `k`
let k = removeElement(numbers, val);

// `k` should be 3, as there are three elements that are not `3`
console.log(k); // Output: 3

// The array now looks like [2, 2, 4, 3, 4], but only the first `k` elements are valid
console.log(numbers); // Output: [2, 2, 4, 3, 4]
