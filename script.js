// Toggle active class on navigation links when scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset as needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Skill Circles Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCircles = document.querySelectorAll('.skill-circle .circle');

    const animateCircles = () => {
        skillCircles.forEach(circle => {
            const percentage = circle.dataset.percentage;
            circle.style.setProperty('--p', `${percentage}%`);
        });
    };

    // Trigger animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCircles();
                observer.unobserve(skillsSection); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(skillsSection);
});

// Optional: Form submission handling (example, you'll need a backend for actual submission)
// const contactForm = document.querySelector('.contact form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent default form submission
//     alert('Form submitted! (This is a placeholder. You need a backend for actual submission.)');
//     contactForm.reset(); // Clear the form
// });