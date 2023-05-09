const nameReg = /^[a-zA-Z\s]*$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobReg = /^\d{10}$/;
const telReg = /^\d{10}$/;
const websiteReg =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
const addressReg = /^[a-zA-Z0-9\s\-\,\#\.\'\(\)]*$/;

function validateInput(inputId, pattern, errorMsg) {
  var input = document.getElementById(inputId);
  var error = document.getElementById(inputId + "Error");
  if (input.value == "") {
    error.textContent = "Please enter " + errorMsg;
    error.style.color = "red";
    disableButtons();
  } else if (!pattern.test(input.value)) {
    error.textContent = "Please enter a valid " + errorMsg;
    error.style.color = "red";
    disableButtons();
  } else {
    error.textContent = "";
    enableButtons();
  }
}
// function validateFunction(type) {
// switch (type) {
//   case "validateName()":
//     validateInput("name", nameReg, "name");
//     break;
//   case "validateEmail()":
//     validateInput("email", emailReg, "email");
//     break;
//   case "validateMobile()":
//     validateInput("mob", mobReg, "mobile number");
//     break;
//   case "validateLandline()":
//     validateInput("tel", telReg, "telephone number");
//     break;
//   case "validateWebsite()":
//     validateInput("website", websiteReg, "website");
//     break;
//   case "validateAddress()":
//     validateInput("address", addressReg, "address");
//     break;
//   default:
//     break;
// }
// }
function disableButtons() {
  document.getElementsByClassName("btn")[0].disabled = true;
  document.getElementsByClassName("btn-update")[0].disabled = true;
}

function enableButtons() {
  document.getElementsByClassName("btn")[0].disabled = false;
  document.getElementsByClassName("btn-update")[0].disabled = false;
}

function validateName() {
  validateInput("name", nameReg, "name");
}

function validateEmail() {
  validateInput("email", emailReg, "email");
}

function validateMobile() {
  validateInput("mob", mobReg, "mobile number");
}

function validateLandline() {
  validateInput("tel", telReg, "telephone number");
}

function validateWebsite() {
  validateInput("website", websiteReg, "website");
}

function validateAddress() {
  validateInput("address", addressReg, "address");
}

function addBlurListener(elementId, validationFunction) {
  document
    .getElementById(elementId)
    .addEventListener("blur", validationFunction);
  validationFunction();
}

addBlurListener("name", validateName);
addBlurListener("email", validateEmail);
addBlurListener("mob", validateMobile);
addBlurListener("tel", validateLandline);
addBlurListener("website", validateWebsite);
addBlurListener("address", validateAddress);

// addBlurListener("name",validateFunction(validateName));
// addBlurListener("email",validateFunction(validateEmail));
// addBlurListener("mob",validateFunction(validateMobile));
// addBlurListener("tel",validateFunction(validateLandLine));
// addBlurListener("tel",validateFunction(validateWebsite));
// addBlurListener("address",validateFunction(validateAddress));
