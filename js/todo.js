const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");

const TODOLIST_KEY = "todo-list";
const LStoDo = JSON.parse(localStorage.getItem(TODOLIST_KEY));

let toDoList = [];

function handleToDoForm(event) {
  event.preventDefault();
  const inputOj = {
    value: toDoInput.value,
    hash: Date.now(),
  };
  toDoList.push(inputOj);
  saveToDo();
  paintToDo(inputOj);
  toDoInput.value = "";
}

function paintToDo(inputOj) {
  const ul = document.querySelector("#todo-list");
  const li = document.createElement("li");
  li.id = inputOj.hash;
  const span = document.createElement("span");
  span.innerText = inputOj.value;
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteToDo);

  li.append(span, button);
  ul.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoForm);

function deleteToDo(event) {
  const tag = event.target.parentElement;
  console.log(tag.id);
  toDoList = toDoList.filter((item) => parseInt(tag.id) !== item.hash);
  saveToDo();
  tag.remove();
}

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDoList));
}

if (LStoDo) {
  toDoList = LStoDo;
  toDoList.forEach(paintToDo);
}
