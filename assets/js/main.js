const header = document.querySelector('header');
const backToTopBtn = document.querySelector('.back-to-top');
const closeEventBtn = document.querySelector('.close');
const upcomingEventBtn = document.querySelector('.events-btn .btn');
const upcomingEventsSection = document.querySelector('section.upcoming-events-container');

// Change header background color for homepage on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 30) {
        header.classList.remove('homepage-header');
    } else {
        header.classList.add('homepage-header');
    }
})

// Open upcoming events
upcomingEventBtn.addEventListener('click', () => {
    upcomingEventBtn.disabled = true;
    upcomingEventsSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

// Close upcoming events
closeEventBtn.addEventListener('click', () => {
    upcomingEventBtn.disabled = false;
    upcomingEventsSection.style.display = 'none';
    document.body.style.overflow = 'scroll';
})
