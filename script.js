// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numLength = prompt("How many characters would you like? (8-128)")

  if (numLength >= 8 && numLength <= 128) {
    console.log(numLength + "")
  }
  else {
    alert("Please select a charecter length between 8-128 ");
    return generatePassword();
  }

  const response = confirm("Would you like to include lowercase letters?")
  console.log(response);
  if (response) {
    console.log("OK was pressed");
  }
  else {
    console.log("Cancel was pressed");
  }

  const response2 = confirm("Would you like to include uppercase letters?")
  if (response2) {
    console.log("OK Was pressed");
  }
  else {
    console.log("Cancel was pressed")
  }

  const response3 = confirm("Would you like to include numbers?")
  if (response3) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }

  const response4 = confirm("Would you like to include special characters?")
  if (response4) {
    console.log("OK was pressed")
  }
  else {
    console.log("Cancel was pressed")
  }
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