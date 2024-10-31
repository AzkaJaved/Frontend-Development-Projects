//Retriveing HTML values from DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementsByTagName("button");

//function for error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}
//function for success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //check if username input is empty of not
  if (username.value === "" || username.value === " ") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
  //check if email input is empty of not
  if (email.value === "" || email.value === " ") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is invalid");
  } else {
    showSuccess(email);
  }
  //check if username input is empty of not
  if (password.value === "" || password.value === " ") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  //check if username input is empty of not
  if (password2.value === "" || password2.value === " ") {
    showError(password2, "confirm password required");
  } else {
    showSuccess(password2);
  }
});
