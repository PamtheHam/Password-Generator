var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("")
// .split will separate each character into substrings, and the "" will take out the commas in between each character in strings

var upperArray = lowerString.toUpperCase().split("")
//  this is useful to use the lowerString variable and to use the .toUpperCase method for the uppercase array
// .split will separate each character into substrings, and the "" will take out the commas in between each character in strings

var numbersArray = [1,2,3,4,5,6,7,8,9]
// numbers aren't strings so we don't have to use .split

var specialString = "!@#$%^&*<>?"

var specialArray = specialString.split("")

// .split will separate each character into substrings, and the "" will take out the commas in between each character in strings
var generateBtn = document.querySelector("#generate");

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
// parseInt returns a number, not a string
// if user enters in numbers less than 8 or more than 128 they will receive an alert 
if (passlength < 8 || passlength > 128) {
  alert("Please select at least 8 characters and no more than 128 characters");
  return;
}
// if user does not type a number, they will receive an alert to use number values
if (isNaN(passlength) === true) {
  alert("Please select a number value");
  return;
}
var isLower = confirm("Would you like your password to contain lowercase letters?")
var isUpper = confirm("Would you like your password to contain uppercase letters?")
var isNumber = confirm("Would you like your password to contain numbers?")
var isSpecial = confirm("Would you like your password to contain special characters?")

// if user does not select any of the character types, they will receive an alert to select at least one
if (isLower === false && isUpper === false && isNumber === false && isSpecial === false) {
  alert("Please select at least one character type");
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
  // 
  console.log(index)
  var digit = totalArray[index]
  results.push(digit)
  // the push method puts the results into an array
}
  return results.join("");
}

generateBtn.addEventListener("click", writePassword);
// clicking button generates the writePassword function

