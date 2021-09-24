const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function handleLoginForm(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintUserName();
}

function paintUserName() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", handleLoginForm);

if (localStorage.getItem(USERNAME_KEY)) {
  paintUserName();
}
