// app.js

// Function to handle the search functionality
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-button");
    const searchInput = document.querySelector(".search-input");

    // Event listener for search button click
    searchButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can add logic here to handle the search query
            // For example, redirecting to a search results page or filtering results
        } else {
            alert("Please enter a search term.");
        }
    });

    // Event listener for the Start Planning Now button
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", function() {
        alert("Let's start planning your adventure!");
        // You can add logic here to redirect users to a planning page or show a form
    });
});