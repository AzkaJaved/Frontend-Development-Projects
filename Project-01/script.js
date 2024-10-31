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
function isValidEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `This is not a vlid email`);
  }
}
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getInputId(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
function getInputId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLength(input, lowerBound, upperBound) {
  if (input.value.length < lowerBound) {
    showError(input, `${getInputId(input)} must be greater than ${lowerBound}`);
  } else if (input.value.length > upperBound) {
    showError(input, `${getInputId(input)} must be smaller than ${upperBound}`);
  }
}
function checkPasswordMatch(input1, input2) {
  console.log("check called");
  if (input1.value !== input2.value) {
    showError(input2, "passowrd don't match");
  }
}
//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  isValidEmail(email);
  checkPasswordMatch(password, password2);
});
