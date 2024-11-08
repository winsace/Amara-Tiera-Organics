// subscription.js

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle form submission
function handleSubscription(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const messageContainer = document.getElementById('subscription-message');

    // Clear any previous messages
    messageContainer.textContent = '';

    // Validate email format
    if (validateEmail(email)) {
        messageContainer.textContent = 'Subscribed successfully!';
        messageContainer.style.color = 'green'; // Change text color to green
        emailInput.value = ''; // Clear the input field
    } else {
        messageContainer.textContent = 'Please enter a valid email address.';
        messageContainer.style.color = 'red'; // Change text color to red
    }
}

// Attach event listener to the form
document.getElementById('subscription-form').addEventListener('submit', handleSubscription);