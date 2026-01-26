// Custom JS functionality

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-sm');
    } else {
        // We can add logic here if we want it to be transparent at the top initially, 
        // but for now it's white. We can adjust this if we want a transparent header overlay.
    }
});
