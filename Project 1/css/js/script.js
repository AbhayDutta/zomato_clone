document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)'; // Scale effect on hover
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)'; // Reset scale
        });
    });

    // Simple scroll effect for main content
    const main = document.querySelector('main');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        main.style.opacity = 1 - scrollPos / 300; // Fade out effect as you scroll
    });

    // Add functionality to search input
    const searchInput = document.querySelector('input');
    searchInput.addEventListener('focus', () => {
        searchInput.style.border = '2px solid #ffeb3b'; // Highlight border on focus
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.style.border = 'none'; // Reset border
    });
});
