const person = {
  name: "Karim",
  age: 25,
  city: "Dhaka",
};

console.log(person, "and type is: ", typeof person);

// convert object into json
const personJSON = JSON.stringify(person);
console.log(personJSON, "and type is: ", typeof personJSON);

// convert json into object
const personObject = JSON.parse(personJSON);
console.log(personObject, "and type is: ", typeof personObject);

// 32-3 Load Json Data using Fetch Function
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
