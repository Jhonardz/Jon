document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validate username and password (simplified example)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Normally, you would perform an AJAX request or some other validation here
    // For simplicity, let's assume username and password validation is successful
    if (username === "admin" && password === "password") {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
