function findContentChildren(g, s) {
  // Sort the greed factor array and the cookie size array
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0; // Pointer for the children array
  let cookie = 0; // Pointer for the cookies array

  // While there are children and cookies left
  while (child < g.length && cookie < s.length) {
    // If the current cookie can satisfy the current child
    if (s[cookie] >= g[child]) {
      child++; // Move to the next child
    }
    cookie++; // Move to the next cookie
  }

  return child; // The number of content children
}

// Example usage
console.log(findContentChildren([1, 2, 3], [1, 1])); // Output: 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // Output: 2
