const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Apply ScrollReveal to specific elements
sr.reveal('.landing', { delay: 300 });
sr.reveal('.about', { delay: 400 });
sr.reveal('.projects', { delay: 500 });
sr.reveal('.customers', { delay: 600 });
sr.reveal('.contact', { delay: 700 });
sr.reveal('.footer', { delay: 800 });

// Select all buttons with the class 'read-more'
const readMoreButtons = document.querySelectorAll('.read-more');

// Function to scroll to a specific section
function scrollToSection(section) {
    const targetSection = document.querySelector(section);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add click event listeners to each button
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-target');
        scrollToSection(sectionId);
    });
});