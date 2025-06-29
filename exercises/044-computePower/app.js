function computePower(num, exponent) {
  // your code here
  let result = 1
  for (let i = 0; i < exponent; i++) {
    result *= num
  }
  return result
}

let output = computePower(2, 3);
console.log(output); // --> 8
