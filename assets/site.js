// Main site JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('PetbizOS site loaded');

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Add click tracking for affiliate links
    document.querySelectorAll('a[href*="shop"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Affiliate link clicked:', this.href);
            // Here you would add your actual tracking code
        });
    });

    // Add visual feedback for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Expose utilities globally if needed
    window.PetbizOS = {
        validateEmail: validateEmail,
        version: '1.0.0'
    };
});
