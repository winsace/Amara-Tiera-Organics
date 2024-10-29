// hamburger.js

// Function to toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Attach event listener to the hamburger icon
document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);