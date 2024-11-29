// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page
    
    // Hide the form and show the thank-you message
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});
