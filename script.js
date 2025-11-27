// Sticky CTA and Header functionality
window.addEventListener('scroll', function() {
  const stickyCta = document.getElementById('sticky-cta');
  const header = document.querySelector('.header-sticky');
  const heroSection = document.querySelector('.hero-gradient');
  
  // Sticky CTA
  if (heroSection && window.scrollY > heroSection.offsetHeight * 0.5) {
    stickyCta.classList.add('visible');
  } else {
    stickyCta.classList.remove('visible');
  }
  
  // Sticky header background
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Audit form submission handler
document.getElementById('audit-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  
  // Send to your backend or email service
  // Example with Formspree: action="https://formspree.io/f/YOUR_ID"
  // Or custom API endpoint:
  /*
  fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  });
  */
  
  // Show success message
  this.innerHTML = `
    <div class="text-center py-8">
      <svg class="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3 class="text-2xl font-bold mb-2 text-gray-900">Audit Request Received!</h3>
      <p class="text-gray-600 mb-4">We'll email your detailed profile audit within 48 hours.</p>
      <p class="text-sm text-gray-500 mb-6">Check your inbox (and spam folder) for our email.</p>
      <div class="mt-6">
        <a href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID" 
           target="_blank" 
           rel="noopener"
           class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg hover:shadow-xl">
          Book a Call While You Wait →
        </a>
      </div>
    </div>
  `;
  
  // Analytics tracking (uncomment when set up)
  // gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID/AUDIT_LABEL'});
  // fbq('track', 'Lead', {content_name: 'Profile Audit'});
  
  console.log('Audit form submitted:', data);
});

// Contact form submission handler
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
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

// CTA click tracking (Google Calendar and Audit buttons)
document.querySelectorAll('a[href*="calendar.google.com"], a[href="#audit"], a[href="#booking"]').forEach(cta => {
  cta.addEventListener('click', function() {
    // Track CTA clicks for conversion optimization
    const ctaText = this.textContent?.trim() || 'CTA';
    console.log('CTA clicked:', ctaText);
    
    // Analytics (uncomment when set up)
    // gtag('event', 'cta_click', {
    //   'event_category': 'engagement',
    //   'event_label': ctaText
    // });
  });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
  console.log('%c🎨 2025 SaaS Landing Page - Loaded', 'color: #7C3AED; font-size: 16px; font-weight: bold');
  console.log('%c✓ Modern purple gradient design', 'color: #059669; font-size: 12px');
  console.log('%c✓ Glass-morphism cards active', 'color: #059669; font-size: 12px');
  console.log('%c✓ Google Calendar integration', 'color: #059669; font-size: 12px');
  console.log('%c✓ Dual CTA strategy ready', 'color: #059669; font-size: 12px');
  console.log('%c📝 Update YOUR_SCHEDULE_ID in HTML', 'color: #DC2626; font-size: 12px; font-weight: bold');
});
