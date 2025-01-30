const passwordBox = document.getElementById("password");
const length = 12; /// length of the password we want

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allChars = upperCase + lowerCase + symbols + number;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

//Function to copy the text
function copyPassword() {
  navigator.clipboard // it uses navigator API to copy the text inside the passwordBox to the clipboard
    .writeText(passwordBox.value) // passwordBox.value retrieves theactual text from the input field
    .then(() => console.log("Password copied!")) // if a text is copied successfull then a success message is shown to the user in console
    .catch((err) => console.error("Failed to copy:", err)); // If an error occurs, it logs the error message to the conole
}
