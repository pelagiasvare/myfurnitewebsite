// Funiro Furniture Website - Interactive Features

// Smooth scrolling for navigation links
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

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.product-overlay .btn-primary');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const productCard = this.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    
    // Show a simple alert (you can replace this with a modal or toast notification)
    alert(`${productName} has been added to your cart!`);
  });
});

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  const subscribeButton = newsletterForm.querySelector('button');
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  
  subscribeButton.addEventListener('click', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (email && validateEmail(email)) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// Email validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add hover effect to all product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Active navigation link highlighting
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Console message
console.log('🪑 Funiro Furniture Website Loaded Successfully!');
console.log('✨ All interactive features are ready.');
