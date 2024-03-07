const button = document.querySelector("#button-signup");
const inputtext = document.querySelector("#email-text");
const error = document.querySelector(".error-text");
const signupcont = document.querySelector(".signup-container");
const success = document.querySelector(".success-container");
const dismiss = document.querySelector("#dismiss");

button.addEventListener("click", function () {
  if (inputtext.value === "" || !isValidEmail(inputtext.value)) {
    error.style.display = "block";
    inputtext.style.backgroundColor = "hsl(7, 75%, 85%)";
    inputtext.style.borderColor = "hsl(4, 100%, 67%)";
    inputtext.style.color = "hsl(4, 100%, 67%)";
  } else {
    // Si pasa las validaciones anteriores, el email es válido
    /* alert("valido"); */
    signupcont.style.display = "none";
    success.style.display = "grid";
  }
});

dismiss.addEventListener("click", function () {
  signupcont.style.display = "flex";
  success.style.display = "none";
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
