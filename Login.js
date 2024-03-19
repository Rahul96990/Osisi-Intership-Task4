document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const authenticatedUser = users.find(user => user.username === username && user.password === password);

        if (authenticatedUser) {
            // User authenticated, redirect to secured page or display success message
            message.textContent = "Login Successful";
            message.style.background = "green"
            message.style.display = "block"
            setTimeout(function() {
                window.location.href = "./SecurePage.html";
            }, 1000);
        } else {
            // User not found or incorrect credentials
            message.style.display = "block"
            message.style.background = "red"
            message.textContent = "Invalid username or password";
        }
    });
});
