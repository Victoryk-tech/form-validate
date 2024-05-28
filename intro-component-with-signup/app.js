const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const show = document.getElementById("btnShow");
const inputed = document.getElementById("inputed");

const close = document.getElementById("btnClose");
console.log(firstName);

//password visibility
show.addEventListener("click", () => {
  inputed.type = inputed.type === "password" ? "text" : "password";
  show.style.display = "none";
  close.style.display = "block";
});
//password invisibility
close.addEventListener("click", () => {
  inputed.type = inputed.type === "text" ? "password" : "text";
  show.style.display = "block";
  close.style.display = "none";
});

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
  } else {
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
  } else {
    lastName.classList.remove("error");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
  } else {
    password.classList.remove("error");
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
