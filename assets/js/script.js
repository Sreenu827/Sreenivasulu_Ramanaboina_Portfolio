// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Smooth scroll to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation effect for sections on page load
window.onload = () => {
    const sections = document.querySelectorAll('.home-section, .about-section, .projects-section, .contact-section');
    sections.forEach((section, index) => {
        // Initially set opacity to 0 for each section
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';

        // Add a timeout to create a delay between animations for each section
        setTimeout(() => {
            section.style.opacity = 1;
        }, 500 * (index + 1)); // The delay increases with each section
    });
};
