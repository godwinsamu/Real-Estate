const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const expectedName = "chennaiadmin";
const expectedEmail = "chennaiadmin@gmail.com";
const expectedPassword = "603000";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Validate name
  if (!nameInput.value.trim()) {
    nameError.textContent = "Name should not be empty";
    isValid = false;
  } else if (nameInput.value.trim() !== expectedName) {
    nameError.textContent = "Incorrect name";
    isValid = false;
  }

  // Validate email
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email should not be empty";
    isValid = false;
  } else if (emailInput.value.trim() !== expectedEmail) {
    emailError.textContent = "Incorrect email";
    isValid = false;
  }

  // Validate password
  if (!passwordInput.value.trim()) {
    passwordError.textContent = "Password should not be empty";
    isValid = false;
  } else if (passwordInput.value.trim() !== expectedPassword) {
    passwordError.textContent = "Incorrect password";
    isValid = false;
  }

  // If all inputs are valid
  if (isValid) {
    window.location.href = "home.html";
    form.reset(); // Reset the form inputs
  }
});

// Clear error message on input correction
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim()) {
    nameError.textContent = "";
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim()) {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim()) {
    passwordError.textContent = "";
  }
});