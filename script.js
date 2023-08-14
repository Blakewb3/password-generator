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

function generatePassword() {

  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lwrCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
  var uprCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
  var specialChar = ["1", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var passwordChar = ([]);

  var numLength = prompt("How many characters would you like? (8-128)");

  if (numLength >= 8 && numLength <= 128) {
    console.log(numLength + "")
  }
  else {
    alert("Please select a charecter length between 8-128 ");
    return generatePassword();
  }

  var lwrCaseConf = confirm("Would you like to include lowercase letters?")
  console.log(lwrCaseConf);
  if (lwrCaseConf) {
    console.log("OK was pressed");
  }
  else {
    console.log("Cancel was pressed");
  }

  var uprCaseConf = confirm("Would you like to include uppercase letters?");
  if (uprCaseConf) {
    console.log("OK Was pressed");
  }
  else {
    console.log("Cancel was pressed")
  }

  var numberConf = confirm("Would you like to include numbers?");
  if (numberConf) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }

  var specialCharConf = confirm("Would you like to include special characters?");
  if (specialCharConf) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }

  //function refrence week 3 mini project for mathfloor and math random, take all charecters varible  passwordchar.length return varible 
  // for loop that goes over password lenth and the options 
  if (lwrCaseConf) {
    passwordChar = passwordChar.concat(lwrCaseChar)
  }
 
  if (uprCaseConf) {
    passwordChar = passwordChar.concat(uprCaseChar)
  }
 
  if (numberConf) {
    passwordChar = passwordChar.concat(numbers)
  }
  
  if (specialCharConf) {
    passwordChar = passwordChar.concat(specialChar)
  }
  
  var password = "";
  for (let i = 0; i < numLength; i++) {
    var index = Math.floor(Math.random() * passwordChar.length)
    password += passwordChar[index];
    console.log(index);
  }
  return password

}








