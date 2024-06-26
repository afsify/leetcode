function maxAchievableNumber(num, t) {
  // The maximum achievable number is obtained by adding twice the number of operations (t) to the original number
  return num + 2 * t;
}

// Example usage:
let num1 = 4;
let t1 = 1;
console.log(maxAchievableNumber(num1, t1)); // Output: 6

let num2 = 3;
let t2 = 2;
console.log(maxAchievableNumber(num2, t2)); // Output: 7
