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
  //pseudocode  
  
  //present user series of prompts/confirms
    // let sign = prompt("What is your sign?")
    //length prompt -var lengthChoice
    //lowercase confirm - var lowerChoice
    //uppercase confirm - var upperChoice
    //number confirm - var numChoice
    //special confirm - varspecChoice

  //length prompt 
    //if conditional to check if length is between 8-128
      //if true contine to confirms
      //if false ask length again until number in rage is selected
  //confirm for lower, upper, nums special characters
  //input validation - correct number input, at least one character type choser
    //if/ conidtional check using or whis is written ||
      //true continue to generate
      //false ask them the confirns again
  //randomly generate password string from choices
    //arrays of lower, upper, numbs and spcial
    //generate a list of all possible characters user could choose from
    //array of all chosen characters

      //method used to make a single array from multiple arrays is concat
    //need to chooce from al lthe options arr number of chars required (length proompt)
      //for loop, run based on the value of the length prompt
      //math.random choose index positions from array
      //grab from our chosen array, add to password array
      //convert array to string
      //return string
  //display password in textbox- written to page

  var lengthChoice = prompt("Please choose a length between 8-128 characters.")
  console.log("length", lengthChoice)

  if (7 < lengthChoice || lengthChoice > 128) {
    var lowerConfirm = confirm("Do your password to contain lowercase letters?")
    console.log("lowercase " + lowerConfirm)

    var upperConfirm = confirm("Do your password to contain uppercase letters?")
    console.log("Upper choice " + upperConfirm)

    var numConfirm = confirm("Do your password to contain numbers?")
    console.log("number choice " + numConfirm)

    var specialConfirm = confirm("Do your password to contain special characters?")
    console.log("special " + specialConfirm)
  } 
  else {
    alert("Invalid value, try again.")
  } 

  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "1234567890".split("");
  var special = "~!@#$%^&*()_+-=".split("");

  var finalConfirms = [];

  if (lowerConfirm) {
    finalConfirms = finalConfirms.concat(lowerCase);
  }
  if (upperConfirm) {
    finalConfirms = finalConfirms.concat(upperCase);
  }
  if (numConfirm) {
    finalConfirms = finalConfirms.concat(numbers);
  }
  if (specialConfirm) {
    finalConfirms = finalConfirms.concat(special);
  }
  
  console.log(finalConfirms)

  if (!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
    alert("Invalid: no character types selected. Please try again.")
  }

  for (var i = 0; i < lengthChoice; i++) {
    password += finalConfirms[Math.floor(Math.random() * finalConfirms.length)];
  }

  password = password.toString();
  return password;


}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// //pseudocode
// //first write out the different functions for the different type of charcter types being used for the password

// var allRandomFunction = {
//   upper: randomUpperCase,
//   lower: randomLowerCase,
//   number: randomNumbers,
//   symbol: randomSymbols
// };

// function randomUpperCase () {
//    var UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//    return UpperCase [Math.floor(Math.random() * UpperCase.length)]
// }

// function randomLowerCase () {
//   var lowerCase = 'abcdefgghijklmnopqrstuvwxyz'
//   return lowerCase [Math.floor(Math.random() * lowerCase.length)]
// }

// function randomNumbers () {
//   var numbers = '0123456789'
//   return numbers [Math.floor(Math.random() * numbers.length)]
// }


// function randomSymbols () {
//   var symbols = '!@#$%^&*<>?'
//   return symbols [Math.floor(Math.random() * symbols.length)]
// }

// console.log(randomNumbers());
