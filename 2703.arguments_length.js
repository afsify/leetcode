function argumentsLength(...args) {
  return args.length;
}

// Example usage:
console.log(argumentsLength(5)); // 1
console.log(argumentsLength({}, null, "3")); // 3
