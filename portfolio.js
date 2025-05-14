
// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.querySelector('.back-to-top');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Scroll to top visibility
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
  
  // Add scroll animation to sections
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 300;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      section.classList.add('fade-in');
      
      // Active navigation item
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = '#9b87f5';
        } else {
          link.style.color = '';
        }
      });
    }
  });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Log form data (in a real scenario, you would send this to a server)
  console.log({name, email, subject, message});
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  contactForm.reset();
});

// Initialize section animations on page load
window.addEventListener('DOMContentLoaded', () => {
  // Add animation to hero section
  document.querySelector('.hero').classList.add('fade-in');
});
