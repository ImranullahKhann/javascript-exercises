const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

// using rest parameters
const sum = function(arr) {
  let total = 0;
  for (num of arr)
    total += num;
  return total;
};

const multiply = function(arr) {
  let product = 1;
  for (num of arr)
    product *= num;
  return product;
};

const power = function(num, power) {
	let result = num;
  for (let i = 1; i < power; i++)
  {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  if (num > 1)
  {
    for (let i = 2; i <= num; i++)
    {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
