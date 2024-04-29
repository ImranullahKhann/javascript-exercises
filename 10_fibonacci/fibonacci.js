const fibonacci = function(num) {
  if (typeof(num) === "string") num = +num;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let numbers = [0, 1];
  for (let i = 2; i <= num; i++)
  {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }
  return numbers[numbers.length - 1]
};

/* USING RECURSION
const fibonacci = function(num) {
  if (typeof(num) === "string")
    num = +num;
  if (num < 0)
    return "OOPS";
  // base case
  if (num === 0)
    return 0;
  if (num === 1)
    return 1;
  // recursive case
  return fibonacci(num-1) + fibonacci(num-2); 
}; */

// Do not edit below this line
module.exports = fibonacci;
