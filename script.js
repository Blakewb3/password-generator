// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numLength = prompt("How many characters would you like? (8-128)")
  var numbers = "1234567890"
  var lwrCaseChar = "abcdefghijklmnopqrstuvwxz"
  var uprCaseChar = lwrCaseChar.toUpperCase()
  var specialChar = "1@#$%^&*()"

  var passwordchar = [numbers, lwrCaseChar, uprCaseChar, specialChar] ;
    
  
  if (numLength >= 8 && numLength <= 128) {
    console.log(numLength + "")
  }
  else {
    alert("Please select a charecter length between 8-128 ");
    return generatePassword();
  }

  const lwrCaseConf = confirm("Would you like to include lowercase letters?")
  console.log( lwrCaseConf);
  if ( lwrCaseConf) {
    console.log("OK was pressed");
  }
  else {
    console.log("Cancel was pressed");
  }

  const uprCaseConf = confirm("Would you like to include uppercase letters?")
  if (uprCaseConf) {
    console.log("OK Was pressed");
  }
  else {
    console.log("Cancel was pressed")
  }

  const numberConf = confirm("Would you like to include numbers?")
  if (numberConf) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }

  const specialCharConf = confirm("Would you like to include special characters?")
  if (specialCharConf) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }

  return "see this"
  //function refrence week 3 mini project for mathfloor and math random, take all charecters varible passwordchar .length return varible 
  // for loop that goes over password lenth and the options and pushes them together ".push <20" push all the otions together then return the result together 
  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//mathrandom 