
// defined variables and set up some option arrays
var passwordLength = 8;
var optionsArray = [];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*','+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", "{", "|", "}", "~" ];

var characterCodes = Array.from(Array(26)).map((_, i) => i +97);
 // console.log(characterCodes); // Tested in console
  
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
 // console.log(lowercaseLetters); //Tested in console

var uppercaseLetters = lowercaseLetters.map(letter =>letter.toUpperCase());
 // console.log(uppercaseLetters); //Tested in console



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){







  // Test for button click
  // console.log ("Button Clicked Test");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


