
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolArray = ['!', '#', '$', '%', '&', '(',')', '*', '+']



function generatePassword() {

var possibleChars = [];
  
var numChars = prompt("How many characters would you like in your password (Must be a number between 8-128)?");



if (isNumeric(numChars) === false || validatePassLength(numChars) === false) {
  alert("Must enter a number between 8-128");
  return generatePassword();
}

var symbolChars = confirm("Would you like to use symbols in your password?");
var numberChars = confirm("Would you like to use numbers in your password?");
var lowerChars = confirm("Would you like to use lowercase letters in your password?");
var upperChars = confirm("Would you like to use uppercase letters in your password?");


if (!symbolChars && !numberChars && !lowerChars && !upperChars) {
 alert("You need to select at least one type of character!");
 return generatePassword();
}


if (symbolChars) {
  possibleChars = possibleChars.concat(symbolArray);
}

if (numberChars) {
 possibleChars= possibleChars.concat(numberArray);
}

if (lowerChars) {
 possibleChars = possibleChars.concat(lowerArray);
}

if (upperChars) {
 possibleChars = possibleChars.concat(upperArray);
}


var passwordArray = [];

for (let i = 0; i < numChars ; i++) {
  var randomNum = [Math.floor(Math.random() * possibleChars.length)];
  const selectedChar = possibleChars[randomNum];
  passwordArray.push(selectedChar)
}
  return passwordArray.join('');
}



function isNumeric(num){
  return !isNaN(num)
}


function validatePassLength(chars) {
  var intChars = parseInt(chars);
  if (intChars < 8 || intChars > 128) {
  return false;
  }

  return true;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

