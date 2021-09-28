const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

$("#login-form").on("submit", function (event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, $("#login-form input:first-child").val());
  paintUserName();
});

function paintUserName() {
  const username = localStorage.getItem(USERNAME_KEY);
  $("#greeting").text(`Hello ${username}`);
  $("#login-form").addClass(HIDDEN_CLASS);
}

if (localStorage.getItem(USERNAME_KEY)) {
  paintUserName();
}
