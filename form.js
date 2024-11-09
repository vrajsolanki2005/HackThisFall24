// form.js

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-section").querySelector("form");
    const signupForm = document.getElementById("signup-section").querySelector("form");

    // Event listener for the login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();

        if (validateEmail(email) && password) {
            alert(`Logging in with Email: ${email}`);
            // You can submit the form here or handle login logic
            // loginForm.submit(); // Uncomment this line to submit the form
        } else {
            alert("Please enter a valid email and password.");
        }
    });

    // Event listener for the signup form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const email = signupForm.email.value.trim();
        const password = signupForm.password.value.trim();
        const confirmPassword = signupForm['confirm-password'].value.trim();

        if (validateEmail(email) && password && password === confirmPassword) {
            alert(`Signing up with Email: ${email}`);
            // You can submit the form here or handle signup logic
            // signupForm.submit(); // Uncomment this line to submit the form
        } else {
            alert("Please ensure your passwords match and enter a valid email.");
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(String(email).toLowerCase());
    }
});