
// 1. I click the button to generate a password

// 2. THEN I am presented with a series of prompts for password criteria (stu mini project)
// 3. create a function that lets user choose a length of at least 8 characters and no more than 128 characters
// 4. THEN I choose lowercase, 
// 5. uppercase, 
// 6. numeric,
// 7.  and/or special characters
// 8. THEN my input should be validated and at least one character type should be selected
// 9. THEN a password is generated that matches the selected criteria
// 10. THEN the password is either displayed in an alert or written to the page (Use alert function)
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("")

var upperArray = lowerString.toUpperCase().split("")

var numbersArray = [1,2,3,4,5,6,7,8,9]

var specialString = "!@#$%^&*<>?"

var specialArray = specialString.split("")





console.group(lowerArray, upperArray, numbersArray, specialArray)

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password !== undefined) {
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }

}

function generatePassword() {
var totalArray = []
var passlength = parseInt(prompt("How many characters would you like in your password?"))
if (passlength < 8 || passlength > 128) {
  alert("Please select a number greater than 8");
  return;
}
if (isNaN(passlength) === true) {
  alert("Please select a number value");
  return;
}
var isLower = confirm("Lower?")
var isUpper = confirm("Upper?")
var isNumber = confirm("Number?")
var isSpecial = confirm("Special?")

if (isLower === false && isUpper === false && isNumber === false && isSpecial === false) {
  alert("Please select at least one");
  return;
}
if (isLower){
  totalArray = totalArray.concat(lowerArray)
}
if (isUpper){
  totalArray = totalArray.concat(upperArray)
}
if (isNumber){
  totalArray = totalArray.concat(numbersArray)
}
if (isSpecial){
  totalArray = totalArray.concat(specialArray)
}
var results = []
for(var i = 0; i < passlength; i++){
  var index = Math.floor(Math.random() * totalArray.length);
  console.log(index)
  var digit = totalArray[index]
  results.push(digit)
}
  return results.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // create a function that pulls a random uppercase letter from the character code
// function getRandomUpper() {
//   var upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   return upper
// }
// console.log("random upper function: ", upper);

// // create a function that pulls a random lowercase letter from the character code
// function getRandomLower() {
//   var lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   console.log("random lower function: ", lower);
//   return lower
// }


// // create a function that pulls a random special character from the specified string
// function getRandomSpecial() {
//   const special = '!@#$%^&*<>?';
//   var specialChar = special[Math.floor(Math.random() * special.length)];
//   console.log("random special function: ", specialChar);
//   return specialChar
// }


// // create a function that pulls a random number from the character code 
// function getRandomNumber() {
//   var number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   console.log("random number function: ", number);
//   return number
// }

