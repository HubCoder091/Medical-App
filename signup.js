document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Get input values
    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if all fields are filled out
    if (name === "" || username === "" || password === "") {
        document.getElementById("error-message").classList.remove("hidden");
        return;
    }

    // Save the username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign Up successful! Redirecting to login page.");

    // Redirect to login page
    window.location.href = "index.html";
});
