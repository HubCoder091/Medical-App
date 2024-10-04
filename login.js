document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Get input values
    const inputUsername = document.getElementById("username").value.trim();
    const inputPassword = document.getElementById("password").value.trim();

    // Get the stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the stored credentials
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert("Login successful! Redirecting to the main page.");
        // Redirect to the main page or dashboard
        window.location.href = "login.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you can implement your login logic. For demonstration purposes,
    // let's assume the correct username is 'user' and password is 'pass'.
    if (username === "user" && password === "pass") {
        // Redirect to index.html if login is successful
        window.location.href = "login.html";
    } else {
        // Show error message if login fails
        document.getElementById("error-message").classList.remove("hidden");
    }
}
