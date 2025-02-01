// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const hardcodedUsername = "user123";
    const hardcodedPassword = "pass123";

    // Validate if both fields are entered
    if (username === hardcodedUsername || password === hardcodedPassword) {
        // Proceed with the login process (for now, we'll just simulate success)
        alert("Login successful!");
        // You can add the actual login logic here (e.g., check username and password)
        window.location.href = "index.html";

    } else {
        alert("Invalid username or password!");
    }
});

// Sign up link behavior
document.getElementById("signUpLink").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirect to the sign-up page!");

    // You can replace this with actual navigation to sign-up page
});
