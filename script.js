// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(getRandomUpper());


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower());


function getRandomSpecial() {
  const special = '!@#$%^&*<>?';
  return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(getRandomNumber());
