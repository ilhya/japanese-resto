// Smooth scrolling for footer links
document.addEventListener('DOMContentLoaded', function() {
    // Get all footer links that start with #
    const footerLinks = document.querySelectorAll('.footer-link[href^="#"], .footer-bottom-link[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Current time-based greeting (optional enhancement)
    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        const greetingElement = document.querySelector('.footer-description');
        
        if (greetingElement) {
            let greeting = 'Experience authentic Japanese flavors crafted with traditional techniques and the finest ingredients.';
            
            if (hour >= 11 && hour < 15) {
                greeting = 'Join us for lunch and experience authentic Japanese flavors crafted with traditional techniques.';
            } else if (hour >= 17 && hour < 22) {
                greeting = 'Perfect time for dinner! Experience authentic Japanese flavors in our welcoming atmosphere.';
            }
            
            greetingElement.textContent = greeting;
        }
    }
    
    // Update greeting on page load
    updateGreeting();
    
    // Add click tracking for analytics (placeholder)
    const trackableElements = document.querySelectorAll('.footer-link, .social-link, .footer-bottom-link');
    
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Placeholder for analytics tracking
            console.log('Footer link clicked:', this.textContent || this.getAttribute('aria-label'));
        });
    });
    
    // Animate footer sections on scroll (intersection observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe footer sections
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Utility function to format phone number on click
function formatPhoneNumber(phoneElement) {
    const phone = phoneElement.textContent;
    const formatted = phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    phoneElement.textContent = formatted;
}

// Add phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneElements = document.querySelectorAll('.contact-item span');
    phoneElements.forEach(element => {
        if (element.textContent.includes('555')) {
            element.addEventListener('click', () => formatPhoneNumber(element));
        }
    });
});