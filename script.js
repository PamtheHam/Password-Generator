// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getRandomSpecial, getRandomUpper, getRandomLower, getRandomNumber);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create a function that pulls a random uppercase letter from the character code
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(getRandomUpper());

// createa a function that pulls a random lowercase letter from the character code
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower());

// create a function that pulls a random special character from the specified string
function getRandomSpecial() {
  const special = '!@#$%^&*<>?';
  return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());

// create a function that pulls a random number from the character code 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(getRandomNumber());
