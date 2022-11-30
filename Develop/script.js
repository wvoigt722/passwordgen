// create variables to hold the character options for special, lowercase, uppercase, and numeric characters.

var generateBtn = document.querySelector("#generate");
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+']


// create an empty array that will hold the users selected characters.

var possibleChars = []
var passwordArray = []

// on game start prompt for users number of characters and hold in variable.

var numChars = prompt("How many characters would you like in your password?")




// check the users input and confirm they put in a number between 8 - 128
// write function that validates user input and that is it numeric

//  function validateUserInput(chars) {
//    if (chars < 8 || chars > 128) {
//    return null
//    }
//  }

//after validation create variables for character selections

// var symbolChars = confirm("Would you like to use symbols in your password?")
// var numberChars = confirm("Would you like to use numbers in your password?")
// var lowerChars = confirm("Would you like to use lowercase letters in your password?")
// var upperChars = confirm("Would you like to use uppercase letters in your password?")

// validate that at least one option was selected

// if (!symbolChars && !numberChars && !lowerChars && !upperChars) {
//  alert("You need to select at least one type of character!")
//  return generatePassword()
//}

// after validation is complete start pushing the selected characters into the possibleChars array

// if (symbolChars) {
//  possibleChars.concat(symbolArray)
//}
// if (numberChars) {
//  possibleChars.concat(numbersArray)
//}
// if (lowerChars) {
//  possibleChars.concat(upperArray)
//}
// if (upperChars) {
//  possibleChars.concat(upperArray)
//}

// create a random number

// loop through possibleChars select random characters from possibleChars array based on how many characters they selected from the prompt

// push the randomly generated character to an empty array called passwordArray

//return passwordArray.join()


// Assignment Code



// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

