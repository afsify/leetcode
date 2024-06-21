function findNeedleInHaystack(haystack, needle) {
  return haystack.indexOf(needle);
}

// Example 1
let haystack1 = "sadbutsad";
let needle1 = "sad";
console.log(findNeedleInHaystack(haystack1, needle1)); // Output: 0

// Example 2
let haystack2 = "leetcode";
let needle2 = "leeto";
console.log(findNeedleInHaystack(haystack2, needle2)); // Output: -1
