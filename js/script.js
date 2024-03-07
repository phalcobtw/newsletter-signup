const button = document.querySelector("#button-signup");
const inputtext = document.querySelector("#email-text");
const error = document.querySelector(".error-text");
const signupcont = document.querySelector(".signup-container");
const success = document.querySelector(".success-container");
const dismiss = document.querySelector("#dismiss");
const email = document.querySelector(".success-email");

button.addEventListener("click", function () {
  if (inputtext.value === "" || !isValidEmail(inputtext.value)) {
    /* Validacion no pasada, se muestra error */
    error.style.display = "block";
    inputtext.style.backgroundColor = "hsl(7, 75%, 85%)";
    inputtext.style.borderColor = "hsl(4, 100%, 67%)";
    inputtext.style.color = "hsl(4, 100%, 67%)";
  } else {
    // Si pasa las validaciones anteriores, el email es válido
    signupcont.style.display = "none";
    success.style.display = "grid";
    email.innerText = inputtext.value;
  }
});

dismiss.addEventListener("click", function () {
  /* Se cierra la ventana de success y se muestra denuevo el signup */
  signupcont.style.display = "flex";
  success.style.display = "none";
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
