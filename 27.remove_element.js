const removeElement = (numbers, val) => {
  let k = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== val) {
      numbers[k] = numbers[i];
      k++;
    }
  }

  return k;
};
