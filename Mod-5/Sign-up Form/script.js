document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const showError = (input, message) => {
    const errorSpan = document.getElementById(`${input.id}-error`);
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorSpan.textContent = message;
  };

  const showSuccess = (input) => {
    const errorSpan = document.getElementById(`${input.id}-error`);
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorSpan.textContent = "";
  };

  const validateUsername = () => {
    if (username.value.trim().length < 3) {
      showError(username, "Username must be at least 3 characters.");
    } else {
      showSuccess(username);
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      showError(email, "Please enter a valid email.");
    } else {
      showSuccess(email);
    }
  };

  const validatePassword = () => {
    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters.");
    } else {
      showSuccess(password);
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match.");
    } else {
      showSuccess(confirmPassword);
    }
  };

  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    const allValid =
      username.classList.contains("valid") &&
      email.classList.contains("valid") &&
      password.classList.contains("valid") &&
      confirmPassword.classList.contains("valid");

    if (allValid) {
      alert("Form submitted successfully!");
      form.reset();

      // Remove valid/invalid classes after reset
      [username, email, password, confirmPassword].forEach((input) => {
        input.classList.remove("valid", "invalid");
        document.getElementById(`${input.id}-error`).textContent = "";
      });
    } else {
      alert("Please fix the errors before submitting.");
    }
  });
});
