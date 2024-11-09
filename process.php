<?php
// process.php

// Start the session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if it's a login request
    if (isset($_POST['email']) && isset($_POST['password']) && !isset($_POST['confirm-password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Here you would typically validate the login credentials
        // For example, check against a database
        // Assuming login is successful
        $_SESSION['user_email'] = $email; // Store the email in session
        echo "Login successful for: " . htmlspecialchars($email);
    }

    // Check if it's a signup request
    if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirm-password'])) {
        $signup_email = $_POST['email'];
        $signup_password = $_POST['password'];
        $confirm_password = $_POST['confirm-password'];

        // Basic validation for signup
        if ($signup_password === $confirm_password) {
            // Here you would typically store the new user in a database
            // Assuming signup is successful
            echo "Sign up successful for: " . htmlspecialchars($signup_email);
        } else {
            echo "Passwords do not match!";
        }
    }
}
?>