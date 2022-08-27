
// All add functions are functionally the same

//add0 and add1 use non ES6 'function' keyword
function addV0(x, y) {
  const sum = x + y;
  return sum;
}

const addV1 = function(x, y) {
  const sum = x + y;
  return sum;
}

// Arrow function permutations 
// add2 is ok, but can be shortened
const addV2 = (x, y) => {
  const sum = x + y;
  return sum;
}

// Can remove const declaration, just return x+y
const addV3 = (x, y) => {
  return x + y;
}

// When the only statement in a function is the return statement
// you can drop both the brackets and the 'return' keyword
const addV4 = (x, y) => x + y;

////////////////////////////////////////////

// A function with only one argument:
const doubleV0 = (number) => number * 2;

// When a function is defiened with only one argument '(number)' 
// the parentheses around it can be dropped 
const doubleV1 = number => number * 2;

// When a function has more than just the return statement
// you have to wrap the body in brackets and use the 'return' keyword
const doubleV2 = (arg1, arg2) => {
  console.log('hello');
  return arg1 + arg2;
}

// A function with no arguments is defined with two empty parens '()'
const sayHello = () => console.log('Hello');

// If you want a function to return an object, you have to wrap the
// curley brackets in parens. Or else it will look like your trying to 
//define the body of the function
const getPersonData = () => ({
  //define object properties
  name: 'john',
  age: 22,
});