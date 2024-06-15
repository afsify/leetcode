function reverse(x) {
  const INT_MIN = -2147483648; // -2^31
  const INT_MAX = 2147483647; // 2^31 - 1

  let result = 0;
  while (x !== 0) {
    // Extract the last digit of x
    const digit = x % 10;
    x = (x / 10) | 0; // Use bitwise OR to truncate towards zero

    // Check for overflow/underflow before updating the result
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0; // Will overflow
    }
    if (
      result < Math.ceil(INT_MIN / 10) ||
      (result === Math.ceil(INT_MIN / 10) && digit < -8)
    ) {
      return 0; // Will underflow
    }

    result = result * 10 + digit;
  }

  return result;
}

// Example usage
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(1534236469)); // Output: 0 (since it overflows)
