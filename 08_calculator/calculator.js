const add = function(x,y) {
  let sum = x + y;
  return sum;
};

const subtract = function(x,y) {
	result = x-y;
  return result;
};

const sum = function(...numbers) {
  if (numbers = true) {
  let numArray = numbers;
  return numArray.reduce((x,y) => {return x + y});
  }
  else return 0;
};

const multiply = function(x,y) {
  total = x*y;
  return total;
};

const power = function(x,y) {
	total = x**y;
  return total;
};

const factorial = function(x) {
	if (x = 0) {
    return 1;
  }
    else {
      return (x * factorial-1);
  }
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
