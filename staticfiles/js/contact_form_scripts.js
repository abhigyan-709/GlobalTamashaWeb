document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Assuming form submission was successful
        // Show the success popup
        successPopup.style.display = 'block';

        // Simulate a delay before redirecting (you can adjust the time)
        setTimeout(function() {
            window.location.href = '/'; // Redirect to the home page
        }, 3000); // Redirect after 3 seconds (adjust as needed)
    });
});
