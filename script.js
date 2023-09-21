var criteria = []
var passwordArray = []

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
 
//asks for length of password
var passLength = window.prompt("enter length of password, between 8 and 128 characters");

if (passLength < 8 || passLength > 128) {
  alert("Please enter a valid password length");
  return;
}

//asks to include numbers
var num = window.confirm("Include numbers?");

//asks to include symbols
var sym = window.confirm("Include symbols?");

//asks to include lowercase
var low = window.confirm("Include lowercase?");

//asks to include capitals
var cap = window.confirm("Include capitals?");
//adds user criteria to array
  //all criteria
  if (num === true && cap === true && sym === true && low === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //numbers, capitals, and symbols
  } else if (num === true && cap === true && sym === true) {
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //capitals, symbols, and lowercase
  } else if (cap === true && sym === true && low === true) {
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    //lowercase, numbers, and capitals
  } else if (low === true && num === true && cap === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    //lowercase, numbers, and symbols
  } else if (low === true && num === true && sym === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //numbers and capitals
  } else if (num === true && cap === true) {
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    //numbers and symbols
  } else if (num === true && sym === true) {
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //capitals and symbols
  } else if (cap === true && sym === true) {
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //lowercase and capitals
  } else if (low === true && cap === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    //lowercase and munbers
  } else if (low === true && num === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    //lowercase and symbols
  } else if (low === true && sym === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
    //just numbers
  } else if (num === true) {
    criteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    //just capitals
  } else if (cap === true) {
    criteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    //just symbols
  } else if (sym === true) {
     criteria.push(".","\\", ":", ";", "!", "?", ",", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "`", "~", "|");
     //just lowercase
  } else if (low === true) {
    criteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  };

console.log(criteria);

//selects random characters
for (let i = 0; i < passLength; i++) {
  var chosenchar = criteria[Math.floor(Math.random() * criteria.length)];
  passwordArray.push(chosenchar);
}

//converts the password array to a string
var passwordString = passwordArray.join("");
var passwordText = document.querySelector("#password");
//prints the created password
passwordText.value = passwordString;
//resets the array
passwordArray = [""];
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
