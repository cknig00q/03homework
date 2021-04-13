// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spcCharArr = ["!", "@", "#", "$", "%", "&"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Ask user for length
  do {
    var length = prompt("Choose a length of at least 8 charachters and no more than 128 characters");
    console.log("User entered length: " + length);
    if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please choose a valid length");
    }
  } while (length < 8 || length > 128 || isNaN(length));

  // prompt user for different character types
  var randomArr = [];
  do {
    console.log("Random characters before any prompts: ");
    console.log(randomArr);
    
    var lowerConfirm = confirm("Would you like lowercase characters in your password?");
    console.log("Use lowercase is: " + lowerConfirm);
    if (lowerConfirm === true) {
      randomArr = randomArr.concat(lowerCharArr);
    }
    console.log(randomArr);

    var upperConfirm = confirm("Would you like uppercase characters in your password?");
    console.log("Use uppercase is: " + upperConfirm);
    if(upperConfirm === true) {
      randomArr = randomArr.concat(upperCharArr);
    }
    console.log(randomArr);
    
    var numericConfirm = confirm("Would you like numeric characters in your password?");
    console.log("Use numbers is: " + numericConfirm);
    if(numericConfirm === true) {
      randomArr = randomArr.concat(numericCharArr);
    }
    console.log(randomArr);

    var specialCharConfirm = confirm("Would you like special characters in your password?");
    console.log("Use special charachters is: " + specialCharConfirm);
    if (specialCharConfirm === true) {
      randomArr = randomArr.concat(spcCharArr);
    }
    console.log(randomArr);

    if (lowerConfirm === false && upperConfirm === false && numericConfirm === false && specialCharConfirm === false) {
      alert("You must select yes to at least one character prompt");
    }
  } while (lowerConfirm === false && upperConfirm === false && numericConfirm === false && specialCharConfirm === false);
  
  console.log("Random characters we can use: ");
  console.log(randomArr);
  // generate password
  var selectedArr = [];
  console.log("Selected Characters for password (should be blank): ");
  console.log(selectedArr);
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * randomArr.length);
    var randomLetter = randomArr[random];
    selectedArr.push(randomLetter);
    console.log("Selected random character: " + randomLetter);
  }
  console.log("Selected Characters for password: ");
  console.log(selectedArr);

  // return generated password
  return selectedArr.join('');

}