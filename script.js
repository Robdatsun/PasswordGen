var generateBtn = document.querySelector("#generate");

function generatePassword(){
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
let lower = "abcdefghijklmnopqrstuvwxyz".split('')
let number = "1234567890".split('')
let symbol = "!@#$%^&*()_+".split('')
let choices = []
let psword = ""

function randomCharacter(arr){
    let length = arr.length
    return arr[Math.floor(Math.random() * length)]
}

let plength = parseInt(prompt("How long do you want your password to be?(Between 8-128)"))
let promptok = false;

function promptfunction(){
    if (confirm("Use uppercase letters?")) {
        choices = choices.concat(uppercase)
        promptok = true;
    }
}
function promptfunction(){
    if (confirm("Use lowercase letters?")) {
        choices = choices.concat(lowercasecase)
        promptok = true;
    }
}
function promptfunction(){
    if (confirm("Use numbers?")) {
        choices = choices.concat(numbers)
        promptok = true;
    }
}
function promptfunction(){
    if (confirm("Use symbols?")) {
        choices = choices.concat(symbols)
        promptok = true;
    }
}
}   

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);