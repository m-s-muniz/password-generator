
// defined variables and set up some option arrays
var passwordLength = 8;
var optionsArray = [];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*','+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", "{", "|", "}", "~" ];

var characterCodes = Array.from(Array(26)).map((_, i) => i +97);
 // console.log(characterCodes); // Tested in console
  
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
 // console.log(lowercaseLetters); //Tested in console

var uppercaseLetters = lowercaseLetters.map(letter =>letter.toUpperCase());
 // console.log(uppercaseLetters); //Tested in console



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctSelects = userSelects();
  var passwordText = document.querySelector("#password");

  //  Work in progress to address if no options are selected
    if (correctSelects) {
      var password = generatePassword();
     passwordText.value = password;
    } else {
      passwordText.value = "";
     }
  
}

// GeneratePassword based on user selection from the prompts
function generatePassword() {

  var password ="";
  for(var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * optionsArray.length);
      password = password + optionsArray[randomIndex];
  }

  return password;

}

// Series of prompts for user to decide length of password that is a real number(not a letter or word) within a range of at least 8 but < 128 and select yes or no for other options (to include in password generation.
function userSelects() {
  optionsArray = [];

  passwordLength = parseInt(prompt("Choose password length (8-128 characters) and choose at least one or all of the 4 options in the following prompts.")); 

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
     alert("Password length has to be a number from 8 - 128 digits. Try again!");
     return false;
  }

  if (confirm("Would you like numbers in your password?")) {
    optionsArray = optionsArray.concat(numbers);

  }

  if (confirm("Would you like symbols in your password?")) {
    optionsArray = optionsArray.concat(symbols);

  }
  if (confirm("Would you like lowercase letters in your password?")) {
    optionsArray = optionsArray.concat(lowercaseLetters);

  }
  if (confirm("Would you like uppercase letters in your password?")) {
    optionsArray = optionsArray.concat(uppercaseLetters);
 
  }
  return true;
}