// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Check on load

// Add more gold flecks dynamically
const createFlecks = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const flecksContainer = document.createElement('div');
        flecksContainer.className = 'gold-flecks';
        
        // Create many more flecks for better visibility
        for (let i = 0; i < 20; i++) {
            const fleck = document.createElement('div');
            fleck.className = 'fleck';
            fleck.style.top = Math.random() * 100 + '%';
            fleck.style.left = Math.random() * 100 + '%';
            fleck.style.animationDelay = Math.random() * 3 + 's';
            // Vary sizes slightly
            const size = 3 + Math.random() * 3;
            fleck.style.width = size + 'px';
            fleck.style.height = size + 'px';
            flecksContainer.appendChild(fleck);
        }
        
        section.style.position = 'relative';
        section.appendChild(flecksContainer);
    });
};

createFlecks();

// Navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(253, 248, 243, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.1)';
    } else {
        nav.style.background = 'rgba(253, 248, 243, 0.95)';
        nav.style.boxShadow = 'none';
    }
});