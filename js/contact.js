var form = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var messageInput = document.getElementById("message");
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var formSuccess = document.getElementById("form-success");

// validate name field
function validateName() {
  var val = nameInput.value.trim();
  if (!val) { nameError.textContent = "Name is required"; return false; }
  nameError.textContent = "";
  return true;
}

// validate email field
function validateEmail() {
  var val = emailInput.value.trim();
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) { emailError.textContent = "Email is required"; return false; }
  if (!regex.test(val)) { emailError.textContent = "Enter a valid email address"; return false; }
  emailError.textContent = "";
  return true;
}

// validate phone field
function validatePhone() {
  var val = phoneInput.value.trim();
  var digits = /^\d+$/;
  if (!val) { phoneError.textContent = "Phone number is required"; return false; }
  if (!digits.test(val)) { phoneError.textContent = "Phone number must contain only digits"; return false; }
  phoneError.textContent = "";
  return true;
}

// validate message field
function validateMessage() {
  var val = messageInput.value.trim();
  if (!val) { messageError.textContent = "Message is required"; return false; }
  messageError.textContent = "";
  return true;
}

// live validation on input
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valid = validateName() & validateEmail() & validatePhone() & validateMessage();
  if (valid) {
    form.reset();
    formSuccess.classList.remove("hidden");
    setTimeout(function () { formSuccess.classList.add("hidden"); }, 4000);
  }
});
