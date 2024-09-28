// let data = [];
// let wrapperlists = document.getElementById("wrapper-lists");
// let btn = document.getElementById("btn");

// function getdata() {
//     data.map((item, index) => {
//         let list = document.createElement("div");
//         let inputRadio = document.createElement("input");
//         let deleteBtn = document.createElement(`button`)
//         deleteBtn.innerHTML = `X`
//         deleteBtn.classList.add(`deleteBtn`)
//         deleteBtn.style.marginLeft = `auto`
//         let text = document.createElement(`p`)
//         inputRadio.style.accentColor =`orange`
//         inputRadio.style.borderColor = `orange`
//         deleteBtn.addEventListener(`click`, () =>{
//             if (confirm(`rostan o'chirasanmi` + item + `ni`)) {
//                 data.splice(index, 1)
//                 getdata()
//             }
//         })
//         inputRadio.addEventListener(`change`, () =>{
//             if (inputRadio.value == `on`) {
//                 text.style.textDecoration = `line-through`
//             }
//         })

//         inputRadio.type = "radio";
//         text.innerHTML = item;
//         list.appendChild(inputRadio);
//         list.appendChild(text);
//         list.appendChild(deleteBtn)
//         list.classList.add("list");

//         wrapperlists.appendChild(list);
//     })
// }
// getdata()
// btn.addEventListener(`click`, ()=> {
//     if (input.value.trim()) {
//         data.push(input.value)
//         console.log(data);
//         input.value = "";
        
//         getdata()
//     } else{
//         alert( `inputga yoz `)
//     }

// })



let todos = [];

function rendered() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = " ";

  todos.forEach((item, index) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
    <p id="texts">${item}</p>
    <button onclick="removeTodo(${index})" class="btn">Delete</button>
    <button onclick="editTodo(${index})" class="btn">Edit</button>
    `;
    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push(todoText);
    todoInput.value = "";
    rendered();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  rendered();
}

function editTodo(index) {
  const newValue = prompt("Tahrirlang:", todos[index]);
  if (newValue !== null) {
    todos[index] = newValue.trim();
    rendered();
  }
}

function clearTodo() {
  if (todos.length === 0) {
    alert("Qo'ymisiz hech nima yo'qku o'zi!");
  } else {
    alert("Barcha xabarlar o'chiriladi");
    todos = [];
    rendered();
  }
}