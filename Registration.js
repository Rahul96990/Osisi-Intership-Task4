document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const message = document.getElementById("message");
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(user => user.username === username && user.password === password);

        if (existingUser) {
            // User already exists
            message.style.display = "block"
            message.style.background = "red"
            message.textContent = "User Already Exists";
        } else {
            // Add new user to localStorage
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            message.textContent = "Registration Successful";
            message.style.background = "green"
            message.style.display = "block"
            registrationForm.reset();
        }
    });
});
