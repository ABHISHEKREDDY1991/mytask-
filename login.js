document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    
    let usernameError = document.getElementById("loginUsernameError");
    let passwordError = document.getElementById("loginPasswordError");
    
    
    if (username.length < 3) {
      usernameError.innerText = "Username must be at least 3 characters";
    } else {
      usernameError.innerText = "";
    }
    
    
    if (password.length < 6) {
      passwordError.innerText = "Password must be at least 6 characters";
    } else {
      passwordError.innerText = "";
    }
  });