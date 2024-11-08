// Get modal element
const modal = document.getElementById("authModal");
const closeModal = document.getElementsByClassName("close")[0];
const toggleForm = document.getElementById("toggleForm");
const authForm = document.getElementById("authForm");

// Open modal
document.querySelector(".header-right .btn:nth-child(2)").onclick = function() {
    modal.style.display = "block";
};

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Toggle between Login and Sign Up
toggleForm.onclick = function() {
    const loginButton = document.querySelector("#authForm button");
    if (loginButton.innerText === "Login") {
        loginButton.innerText = "Sign Up";
        toggleForm.innerText = "Login";
    } else {
        loginButton.innerText = "Login";
        toggleForm.innerText = "Sign Up";
    }
};

// Handle form submission
authForm.onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === sampleUser .email && password === sampleUser .password) {
        alert("Login successful!");
        modal.style.display = "none";
    } else {
        alert("Invalid email or password.");
    }
};