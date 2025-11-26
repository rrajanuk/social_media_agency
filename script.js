// Sticky CTA functionality
window.addEventListener('scroll', function() {
  const stickyCta = document.getElementById('sticky-cta');
  const heroSection = document.querySelector('.gradient-bg');
  
  if (window.scrollY > heroSection.offsetHeight * 0.5) {
    stickyCta.classList.add('visible');
  } else {
    stickyCta.classList.remove('visible');
  }
});

// Smooth scrolling for anchor links
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

// No pricing toggle needed - simplified pricing structure

// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to your backend or form service
  // For now, we'll show a success message
  
  // Example: Send to a webhook or email service
  // fetch('YOUR_FORM_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  
  // Replace form with success message
  this.innerHTML = `
    <div class="text-center py-8">
      <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
      <p class="text-gray-600">We'll contact you within 24 hours to schedule your free strategy call.</p>
    </div>
  `;
  
  // Optional: Track conversion with analytics
  // gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID'});
  // fbq('track', 'Lead');
});

// Add button hover animations
document.querySelectorAll('button, a[class*="bg-"]').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  element.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
  phoneLink.addEventListener('click', function() {
    // Track phone click for analytics
    console.log('Phone number clicked');
    // gtag('event', 'phone_click', {'event_category': 'engagement'});
  });
});

// Lazy loading for images (when you add them)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}

// FAQ accordion enhancement (optional smooth animation)
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', function() {
    if (this.open) {
      // Scroll to show full answer on mobile
      setTimeout(() => {
        this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  });
});

// Add to cart / CTA tracking
document.querySelectorAll('a[href="#contact"]').forEach(cta => {
  cta.addEventListener('click', function() {
    // Track CTA clicks for conversion optimization
    console.log('CTA clicked:', this.textContent);
    // gtag('event', 'cta_click', {'event_label': this.textContent});
  });
});

console.log('Social Media Management - 100% Done-For-You - Scripts Loaded ✓');
