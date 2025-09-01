// 31-3 Different Truthy and Falsy Values in JavaScript
let data;
data = 0; //false
data = -0; //false
data = NaN; //false
data = 1; //true
data = 3; //true
data = -2; //true
data = ""; //empty string is false
data = " "; //empty space string is true
data = "abcs"; //true
data = "0"; //undefine and false
data = [];
data = {};
data = true;
data = false;
data = null; //false
data = undefined; //false
data = 2;
console.log("the value of data :", data);

if (data) {
  console.log(data, "data is truthy");
} else {
  console.log(data, "data is falsy");
}

// not to capture false
if (!data) {
  console.log("this is falsy");
}

// double not capture true
if (!!data === true) {
  console.log("this is true");
}

// 31-4 double equal (==) vs triple equal (===), implicit conversion

//31-5 block scope, global scope, hoisting

// 31-6 (optional) Callback function and pass different functions

// 31-7 (advanced) function arguments pass by reference pass by value

// primitive data (string,number,boolean etc) are passedByValue
function passedByValue(a, b) {
  a = a + 2;
  b = b + 3;
  return `sum ${a + b}`;
}

const a = 4;
const b = 4;
console.log(`before calling func`, a, b);

console.log(passedByValue(a, b));
console.log(`after calling func`, a, b);

// non-primitive data(array, object, function) are  passedByReference
function passedByReference(a, b) {
  a.price = a.price + 2;
  b.price = b.price + 3;
  return `sum ${a.price + b.price}`;
}

const c = { brand: "samsu", price: 123 };
const d = { brand: "sony", price: 123 };

console.log(`before calling func`, c, d);

console.log(passedByReference(c, d));
console.log(`after calling func`, c, d);

// arguments
function arg(a, b) {
  console.log(arguments);
  const params = [...arguments];
  console.log(params);
}

arg(1, 2, 3, 4);

// 31-8 (advanced) Explore about Closure
