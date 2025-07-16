const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");
console.dir(form);

const username = form[0];
const email = form[1];
const quantity = form[2];
const website = form[3];
const password = form[4];
const age = form[5];
const zipcode = form[6];

email.addEventListener("input", function (e) {
  if (e.target.validity.valueMissing) {
    e.target.setCustomValidity("Please enter an email address.");
  } else if (e.target.validity.typeMismatch) {
    e.target.setCustomValidity(
      "Please enter a valid email address, for example, name@example.com.",
    );
  } else {
    email.setCustomValidity(""); // Clear custom error if valid
  }

  // update the error message span with the custom error message
  errorMessage.textContent = e.target.validationMessage;
  console.log(e.target.validity);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(`Form data: ${email.value}`);
});