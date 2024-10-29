// Get all sections with animations
const animatedSections = document.querySelectorAll('.fade-in, .slide-in, .zoom-in, .parallax');

// Add event listener to window scroll
window.addEventListener('scroll', () => {
  // Loop through each section
  animatedSections.forEach((section) => {
    // Check if section is in viewport
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Add visible class to trigger animation
      section.classList.add('visible');
    } else {
      // Remove visible class to reset animation
      section.classList.remove('visible');
    }
  });
});

// Add parallax scrolling effect
const parallaxSection = document.querySelector('.parallax');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  parallaxSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});