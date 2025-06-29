/* ===========================
   TYPING ANIMATION
   ===========================*/
var typed = new Typed('.typing', {
  strings: ['Web Developer', 'Software Engineer', 'Tech Enthusiast'],
  typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

/* ===========================
   NAVIGATION BAR FUNCTIONALITY
   ===========================*/

// ========== SMOOTH SCROLLING SECTION ==========
// Get all navigation links
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

// Add smooth scrolling to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate offset for smooth scrolling (accounting for any fixed headers)
            const offsetTop = targetSection.offsetTop - 20; // 20px offset for better positioning
            
            // Smooth scroll to the target section
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active navigation link
            updateActiveNavLink(this);
            
            // Hide mobile menu if open (for responsive design)
            closeMobileMenu();
        }
    });
});

// ========== ACTIVE NAVIGATION STATE SECTION ==========/
/**
 * Updates the active navigation link
 * @param {Element} activeLink - The clicked navigation link
 */
function updateActiveNavLink(activeLink) {
    // Remove active class from all navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the clicked link
    activeLink.classList.add('active');
}

// ========== SCROLL SPY SECTION ==========
// Highlight navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport (accounting for sidebar width and offset)
        if (window.scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active navigation link based on current section
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== MOBILE NAVIGATION SECTION ==========
// Get mobile navigation elements
const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

// Toggle mobile navigation menu
if (navToggler) {
    navToggler.addEventListener('click', () => {
        aside.classList.toggle('open');
    });
}

/**
 * Close mobile navigation menu
 */
function closeMobileMenu() {
    if (aside.classList.contains('open')) {
        aside.classList.remove('open');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!aside.contains(e.target) && !navToggler.contains(e.target)) {
        closeMobileMenu();
    }
});

// ========== PAGE LOAD INITIALIZATION ==========
// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set home as active by default
    const homeLink = document.querySelector('.nav a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    // Ensure all sections are visible for scrolling
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('hidden');
    });
});