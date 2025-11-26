# 🎨 Customization Guide - Social Media Management Landing Page

## Quick Customization Checklist

### 1. Update Your Contact Information

**In `index.html`, search and replace:**

- [ ] **Phone Number:** Search for `(123) 456-7890` → Replace with your actual phone
  - Found in: Hero CTA, Final CTA section, Sticky mobile bar
  - Line 337: `<a href="tel:+1234567890">`
  - Update both display text AND href

- [ ] **Company Name:** Search for `Social Growth Pro` → Replace with your company name
  - Footer (line 347)
  - JSON-LD schema (line 410)

- [ ] **Email:** Search for `info@socialgrowthpro.com` → Replace with your email
  - Footer (line 370)

### 2. Set Up Contact Form

**Choose ONE option:**

#### Option A: Formspree (Recommended - 5 minutes)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (looks like `abc123xyz`)
5. In `index.html` line 319, update the form tag:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="space-y-4">
```

#### Option B: Calendly Integration

Replace all CTAs with your Calendly link:

```html
<!-- Replace line 62 -->
<a href="https://calendly.com/YOUR_USERNAME/15min" target="_blank" 
   class="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg...">
  Book Your Free 15-Minute Intro Call
</a>
```

Search for all instances of `href="#contact"` and replace with your Calendly URL.

#### Option C: Custom Backend

Update `script.js` line 37-51 with your API endpoint:

```javascript
fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

### 3. Update Testimonials

**Location:** Lines 211-265 in `index.html`

**To customize:**

1. **Replace client names** (Michael Chen, Sarah Williams, David Rodriguez)
2. **Update companies** (Merrill Lynch, Williams Consulting, etc.)
3. **Change quotes** to real client feedback
4. **Add headshots:**
   - Save images as `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`
   - Put in `/images/` folder
   - Replace line 232: `<div class="w-12 h-12 bg-gray-300 rounded-full"></div>`
   - With: `<img src="/images/testimonial-1.jpg" alt="Client name" class="w-12 h-12 rounded-full object-cover">`

### 4. Customize Pricing (Optional)

**Location:** Lines 96-155 in `index.html`

**To change prices:**
- **Single Platform:** Line 107 - Currently `$899`
- **Two Platforms:** Line 125 - Currently `$1,499`
- **Three+ Platforms:** Line 142 - Custom quote

**To update features:**
- Edit the `<li>` items within each pricing card
- Keep checkmark SVG icons intact

### 5. Update Your City/Location (for local SEO)

**Location:** Line 416 in JSON-LD schema

```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Your City",      ← Change this
  "addressRegion": "State",            ← Change this
  "addressCountry": "US"               ← Change if needed
}
```

Also update page title (line 6) to include your city:
```html
<title>Your Social Media, 100% Handled — [Your City] Social Media Management</title>
```

### 6. Add Real Images

**Required images in `/images/` folder:**

#### og-image.jpg (1200x630px)
- Social media sharing image
- Shows when page is shared on LinkedIn, Facebook, Twitter
- Keep under 500KB

**How to create:**
1. Use Canva or Figma
2. Include your brand, headline, and key benefit
3. Export as JPG, optimize with [TinyPNG](https://tinypng.com)
4. Save as `/images/og-image.jpg`

#### Testimonial headshots (200x200px each)
- Professional photos of clients (with permission)
- Square crop, faces centered
- Export as JPG or WebP

#### Client logos (optional)
- Trust badges/logos
- Replace text names (lines 67-69, 280-283) with:
```html
<img src="/images/logo-company.svg" alt="Company name" class="h-8">
```

### 7. Google Analytics Setup

**Add before `</head>` in `index.html` (after line 33):**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

---

## Advanced Customizations

### Update Brand Colors

**Current:** Purple gradient (#667eea → #764ba2)

**To change:** Edit line 29 in `index.html`:

```css
.gradient-bg { background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%); }
```

Also update button colors:
- Search for `bg-purple-600` → Replace with your brand color
- Search for `text-purple-700` → Replace with your brand color

### Add Video to Hero

**After line 63, add:**

```html
<div class="mt-8 max-w-3xl mx-auto">
  <div class="relative" style="padding-bottom: 56.25%; height: 0;">
    <iframe 
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
</div>
```

### Add Live Chat Widget

**Before `</body>` tag (line 465), add:**

**Intercom:**
```html
<script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "YOUR_APP_ID"
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
```

**Drift:**
```html
<script>
"use strict";
!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}();
drift.SNIPPET_VERSION='0.3.1';
drift.load('YOUR_DRIFT_ID');
</script>
```

---

## Testing Checklist

Before launching, test:

- [ ] All CTA buttons lead to contact form
- [ ] Phone number is tap-to-call on mobile
- [ ] Form submits successfully
- [ ] Sticky CTA appears on scroll (mobile only)
- [ ] Smooth scrolling works
- [ ] FAQ dropdowns expand/collapse
- [ ] All links in footer work
- [ ] Images load correctly
- [ ] Page is responsive (test 375px to desktop)
- [ ] Load speed is < 3 seconds

### Test Tools:
- **Mobile:** Chrome DevTools → Toggle device toolbar
- **Speed:** [PageSpeed Insights](https://pagespeed.web.dev/)
- **SEO:** [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Forms:** Submit test entry and check email/Formspree dashboard

---

## FAQ

### How do I change the headline?

**Line 40** in `index.html`:
```html
<h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  YOUR NEW HEADLINE HERE
</h1>
```

### How do I add another pricing tier?

Copy an existing pricing card (lines 104-118) and paste after the last card. Update:
- Price
- Features list
- Card styling (border color, badge, etc.)

### How do I change button text?

Search for the button text in `index.html` and replace. Common buttons:
- "Book Your Free 15-Minute Intro Call" (appears 3x)
- "Get Started" (pricing cards)

### Can I remove a section?

Yes! Just delete the entire `<section>` block. For example, to remove testimonials, delete lines 207-277.

### How do I update the FAQ?

**Lines 283-308** - Each FAQ is a `<details>` element:

```html
<details class="bg-white p-6 rounded-lg shadow">
  <summary class="font-semibold text-lg cursor-pointer">YOUR QUESTION?</summary>
  <p class="mt-4 text-gray-600">Your answer here.</p>
</details>
```

Add, remove, or edit as needed.

---

## Need Help?

- **Forms not working?** Check Formspree setup in line 319
- **Images not loading?** Verify file names and paths match exactly
- **Sticky CTA not showing?** Clear browser cache and scroll down
- **Mobile issues?** Test in Chrome DevTools device mode

---

**Pro Tip:** Make one change at a time and test in the browser immediately. This helps you catch errors quickly!

**Ready to launch?** See `DEPLOYMENT-GUIDE.md` for hosting instructions.
