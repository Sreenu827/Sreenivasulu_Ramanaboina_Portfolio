// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation effect for sections on page load
window.onload = () => {
    const sections = document.querySelectorAll('.home-section, .about-section, .projects-section, .contact-section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            section.style.opacity = 1;
        }, 500);
    });
};
