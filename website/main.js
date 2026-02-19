document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal intersections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .journal-item, .square-item').forEach(el => {
        observer.observe(el);
    });

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const icon = header.querySelector('.icon');

            // Toggle active class
            item.classList.toggle('active');

            // Toggle icon
            if (item.classList.contains('active')) {
                icon.innerText = '−'; // Minus sign
            } else {
                icon.innerText = '+';
            }

            // Close other items (optional, Kalm usually allows multiple open but let's be refined)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.icon').innerText = '+';
                }
            });
        });
    });

    // Simple Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(250, 249, 246, 0.95)";
            navbar.style.padding = "20px 60px";
            navbar.style.borderBottom = "1px solid rgba(0,0,0,0.05)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.padding = "40px 60px";
            navbar.style.borderBottom = "none";
        }
    });

    // Hero Parallax (Subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-kalm');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.2) + 'px';
        }
    });

    // Booking Form Handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Transmitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you. Your request has been transmitted to our concierge team. We will be in touch within 24 hours.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                bookingForm.reset();
            }, 2000);
        });
    }
});
