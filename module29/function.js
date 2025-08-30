// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const mul = function (num1, num2) {
  return num1 * num2;
};

// arrow function
const sub = (num1, num2) => {
  return num1 - num2;
};

// 29.5
// spread operator

const arr = [33, 55, 11, 44, 12];
console.log(Math.max(...arr));

// copy Array
const arr2 = [...arr];
const arr3 = [66, ...arr, 465, 678];
arr2.push(23);
console.log(arr);
console.log(arr2);
console.log(arr3);

// objects
const person = { name: "ali", age: 34 };
const employee = { position: "manager", ...person, ...arr2 };
console.log(employee);

// 29.7
// object and array destructuring
const brand = { name: "samsung", model: "g2", price: 345 };
console.log(brand.model);
const {
  name,
  price,
  sale = 123,
} = { name: "samsung", model: "g2", price: 345 };

console.log(sale);

const [num1, num2] = [34, 55, 66];
console.log(num2);

// 29-8 Keys, values, entries, delete, seal, freeze

const personD = {
  name: "sagor",
  role: "admin",
  id: 123,
  department: "cse",
};

// Object.freeze(personD);

Object.seal(personD);

personD.id = 234;
personD.address = "dhaka";

const keys = Object.keys(personD);
const values = Object.values(personD);
const entries = Object.entries(personD);

console.log(keys, values);
console.log(entries);

delete personD.role;
console.log(personD);

// 29-9 Loop through an object using for in

for (const key in personD) {
  const values = personD[key];
  console.log(key, values);
}
