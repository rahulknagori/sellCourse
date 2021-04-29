let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMessage = document.getElementById("errorMessage");

// Using Regular Expressions for Password Authentication

form.addEventListener("submit", (e)=>{
    let alertMessage = [""];
    let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
    if(password.value.length === 0 || password.value.length < 6){
    alertMessage.push("Password must be more than 6 characters")
    e.preventDefault();
    errorMessage.innerText = alertMessage.join('')
} else if(password.value.length > 20){
    alertMessage.push("Password must have than 20 characters")
    e.preventDefault();
    errorMessage.innerText = alertMessage.join('')
}
  // Validate lowercase letters
  else if(!(password.value.match(lowerCaseLetters))) {  
    alertMessage.push("Password must contain Lowercase letters")
    e.preventDefault();
    errorMessage.innerText = alertMessage.join('')
  }
  
  // Validate capital letters
  else if (!(password.value.match(upperCaseLetters))) {  
    alertMessage.push("Password must contain Uppercase letters")
    e.preventDefault()
    errorMessage.innerText = alertMessage.join('')
  } 
//   Validate numbers
  else if(!(password.value.match(numbers))){
    alertMessage.push("Password must contain a number")
    e.preventDefault()
    errorMessage.innerText = alertMessage.join('')
  }
})