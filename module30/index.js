// 30-2 Access Value, nested object, Optional chaining, Dot notation vs bracket notation

const students = {
  name: "ali",
  role: 34,
  family: {
    name: "molla",
    // father: {
    //   name: "hazrat ali",
    //   age: 80,
    // },
  },
  depertment: "cse",
  address: "dhaka",
};
// dot notation
console.log(students.name);
// bracket notation
const depertment = students["depertment"];
console.log(depertment);

// nested and optional chaining
console.log(students.family?.father?.name);

// 30-3 Array map to do one-line loop magic
const number = [1, 3, 4, 6, 7];
const double = number.map((num) => num * 3);
console.log(double);

const result = number.map((num, index) => {
  return num + index;
});
console.log(result);

const friends = ["rasel", "apu", "amir", "sohel"];
const friendsLength = friends.map((friend) => friend.length);
console.log(friendsLength);
const friendsLetter = friends.map((letter) => letter[0]);
console.log(friendsLetter);

// 30-4 foreach, filter, find, and differences between them

const values = [2, 3, 4, 5, 6];
values.forEach((num) => console.log(num * 4));

// filter
const filterValue = values.filter((x) => x % 2 === 0);
console.log(filterValue);
// find
const findFirstValue = values.find((x) => x % 2 === 0);
console.log(findFirstValue);

const studentList = [
  { id: 1, name: "ali", marks: 56 },
  { id: 2, name: "alim", marks: 76 },
  { id: 3, name: "salim", marks: 86 },
  { id: 4, name: "alif", marks: 96 },
];

const allStudentMark = studentList.map((student) => student.marks - 5);
console.log(allStudentMark);

const MarkFilter = studentList.filter((student) => student.marks > 80);
console.log(MarkFilter);

const MarkFind = studentList.find((student) => student.marks > 80);
console.log(MarkFind);

// 30-5 (Recap) Map, forEach, filter, find, reduce
// reduce

const totalValue = values.reduce((acc, curr) => acc + curr, 0);
console.log(totalValue);

// 30-6 (optional) Introduction to Class and objects

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("this is player to all");
  }
  getPlayer() {
    console.log(`cricket player name is ${this.name} and age is ${this.age}`);
  }
}

const player1 = new Player("sakib", 29);
console.log(player1);
player1.getPlayer();
