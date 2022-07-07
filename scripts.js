const form = document.getElementById("form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from input
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "") {
    //show error icon
    //show error message
    setErrorFor(firstname, "First name cannot be empty");
  } else {
    //add success class
    setSuccessFor(firstname);
  }
  if (lastnameValue === "") {
    setErrorFor(lastname, "Last name cannot be empty");
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
    }
    
      if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
      } else {
        setSuccessFor(password);
      }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
