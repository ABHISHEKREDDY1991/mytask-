document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    
    let usernameError = document.getElementById("signupUsernameError");
    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");
    
    
    if (username.length < 3) {
      usernameError.innerText = "Username must be at least 3 characters";
    } else {
      usernameError.innerText = "";
    }
    
    
    if (!validateEmail(email)) {
      emailError.innerText = "Invalid email format";
    } else {
      emailError.innerText = "";
    }
    

    if (password.length < 6) {
      passwordError.innerText = "Password must be at least 6 characters";
    } else {
      passwordError.innerText = "";
    }
  });
  
  function validateEmail(email) {
    
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }