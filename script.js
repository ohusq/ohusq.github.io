document.addEventListener('DOMContentLoaded', () => {

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.anim-hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-show');
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    animatedElements.forEach(el => observer.observe(el));

});