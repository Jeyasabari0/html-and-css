document.getElementById("loginForm").addEventListener("submit", function(event) {
   
    event.preventDefault();
    
    // Get the values from the form
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "Jsabari" && password === "jsabari3") {
      window.alert("Login successful!");
    } else {
      window.alert("Invalid username or password. Please try again.");
    }
  });