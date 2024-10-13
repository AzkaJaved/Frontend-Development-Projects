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

//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //chceck if username input is empty of not
  if (username.value === "" || username.value === " ") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
  //chceck if email input is empty of not
  if (email.value === "" || email.value === " ") {
    showError(email, "email is required");
  } else {
    showSuccess(email);
  }
  //chceck if username input is empty of not
  if (password.value === "" || password.value === " ") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  //chceck if username input is empty of not
  if (password2.value === "" || password2.value === " ") {
    showError(password2, "confirm password required");
  } else {
    showSuccess(password2);
  }
});
