// Function to return a promise that resolves with the sum of two promises
function sumPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    (values) => values[0] + values[1]
  );
}

// Example 1
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

sumPromises(promise1, promise2).then((result) => console.log(result)); // Output: 7

// Example 2
promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

sumPromises(promise1, promise2).then((result) => console.log(result)); // Output: -2
