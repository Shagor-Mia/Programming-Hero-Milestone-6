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
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // return promise of response
    .then((response) => response.json())
    // return promise of json data
    .then((json) => console.log(json));
};

// 32-4 Recap Fetch() & Send and Console Each Data
// const loadPosts = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       displayPosts(json);
//     });
// };

// const displayPosts = (posts) => {
//   posts.forEach((post) => {
//     console.log(post);
//   });
// };

// 32-5 Recap Fetch() & Send and display ui
// const loadPosts = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       displayPosts(json);
//     });
// };
// const displayPosts = (posts) => {
//   //1 get the container
//   const getContainer = document.getElementById("post-container");
//   posts.forEach((post) => {
//     //2 create element
//     const li = document.createElement("li");
//     // 3 add innerText
//     li.innerText = post.title;
//     // append element
//     getContainer.appendChild(li);
//   });
// };

// 32-6 Display Post Card & Style using CSS
// const loadPosts = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       // console.log(json);
//       displayPosts(json);
//     });
// };

// const displayPosts = (posts) => {
//   //1 get the container
//   const getContainer = document.getElementById("post-container");
//   getContainer.innerHTML = "";
//   posts.forEach((post) => {
//     //2 create element
//     const postCard = document.createElement("div");
//     // 3 add innerText
//     postCard.innerHTML = `<div class="post-card">
//         <h1> ${post.title}</h1>
//         <p>
//           ${post.body}
//         </p>
//       </div>`;
//     // append element
//     getContainer.appendChild(postCard);
//   });
// };
// loadPosts();

// 32-7 Display Todo List and Simple Conditional Rendering
const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};
const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-card">
        <p>${
          todo.completed == true
            ? `<i class="fa-solid fa-square-check"></i>`
            : `<i class="fa-regular fa-square-check"></i>`
        }  </p>
        <h2>${todo.title}</h2>
      </div>
    `;
    todoContainer.appendChild(todoCard);
  });
};

loadTodo();
