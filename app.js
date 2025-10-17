// Region Navigation
const regionBtns = document.querySelectorAll('.region-btn');
const regionSections = document.querySelectorAll('.region-section');

regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const region = btn.dataset.region;
        
        // Update active button
        regionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active section
        regionSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === `${region}-section`) {
                section.classList.add('active');
            }
        });
        
        // Scroll to top of content
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Day Tabs Navigation
const dayTabs = document.querySelectorAll('.day-tab');
const dayContents = document.querySelectorAll('.day-content');

dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const day = tab.dataset.day;
        
        // Update active tab
        dayTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        dayContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === day) {
                content.classList.add('active');
            }
        });
        
        // Smooth scroll to content
        const contentElement = document.getElementById(day);
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Install prompt for PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button (you can add this to your UI)
    console.log('PWA install prompt available');
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
});

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('Back online');
    // You can show a notification here
});

window.addEventListener('offline', () => {
    console.log('Gone offline');
    // You can show a notification here
});

// Smooth scroll for anchor links
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

// Add ripple effect to buttons (optional enhancement)
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
}

// Add ripple to buttons
document.querySelectorAll('.day-tab, .region-btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Log app version
console.log('India 2025 Travel App v1.0');
console.log('Ready for your adventure! 🇮🇳');

