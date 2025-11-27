# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fef2892a-dce7-40b5-b7d7-2f8c779634ac

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

## Quick Start

### Option 1: Open Locally

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. That's it! No build process required.

### Option 2: Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization Guide

### 1. Update Your Business Information

**In `index.html`, search and replace:**

- `Social Growth Pro` → Your company name
- `Your City` → Your actual city (lines 416, update JSON-LD schema)
- `(123) 456-7890` → Your real phone number
- `info@socialgrowthpro.com` → Your email

**Update meta tags (lines 6-18):**
- Title should include your city for local SEO
- Description should highlight your unique value proposition

### 2. Customize Pricing

**In `index.html` (lines 110-160):**
- Update plan names, prices, and features
- Adjust monthly/yearly pricing in `script.js` (lines 21-30)

### 3. Add Real Testimonials
- Select the "Codespaces" tab.
- Click on "New codespace"# 🎨 SocialGrowth - Modern Social Media Agency Landing Page

A high-converting, premium landing page for a boutique social media management agency serving financial advisors and consultants.

## ✨ Features

### **2025 Modern SaaS Design**
- ✅ Clean purple gradient aesthetic (`#7C3AED` → `#6366F1` → `#8B5CF6`)
- ✅ Glass-morphism cards with backdrop blur
- ✅ Ambient gradient orbs and glow effects
- ✅ Perfect typography with Inter font
- ✅ Mobile-first responsive design
- ✅ Generous whitespace and improved line spacing

### **Conversion-Optimized**
- ✅ **Dual CTA Strategy:**
  - Primary: Google Calendar booking (no iframe)
  - Secondary: Free Profile Audit form
- ✅ **Quick Chat Icons:** WhatsApp + Telegram in hero
- ✅ Sticky mobile CTA
- ✅ Clear visual hierarchy
- ✅ Multiple contact points

### **Forms & Lead Capture**
- ✅ **Profile Audit Form** with:
  - Name & Email
  - LinkedIn Profile URL
  - X (Twitter) Handle
  - Platform selection (1, 2, or 3 platforms)
- ✅ **Contact Form** with message textarea
- ✅ Form success states with booking CTAs

### **Pricing Tiers**
- ✅ Single Platform - $899/month
- ✅ Two Platforms - $1,499/month (Most Popular)
  - Includes post boosting service (budget-based)
- ✅ Three+ Platforms - Custom pricing
  - Includes post boosting service (budget-based)

---

## 🚀 Quick Setup (3 Steps)

### **1. Update Google Calendar Schedule ID**

Replace `YOUR_SCHEDULE_ID` in **5 locations**:

1. **Header button** (line ~161)
2. **Hero primary CTA** (line ~193)
3. **Booking section** (line ~750)
4. **Sticky mobile CTA** (line ~693)
5. **Audit success message** in `script.js` (line ~71)

```html
<!-- BEFORE -->
https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID

<!-- AFTER -->
https://calendar.google.com/calendar/appointments/schedules/AcZssZ2R8vQ4h6m9_abc123
```

**How to get your Schedule ID:**
1. Go to [Google Calendar](https://calendar.google.com)
2. Settings → Appointment schedules
3. Create or select a schedule
4. Copy the booking page URL
5. Extract the ID after `/schedules/`

---

### **2. Update Contact Information**

**Phone Numbers** (3 locations):
```html
tel:+1234567890 → tel:+YOUR_NUMBER
```

**WhatsApp** (2 locations):
```html
https://wa.me/1234567890 → https://wa.me/YOUR_NUMBER
```

**Telegram** (1 location):
```html
https://t.me/YOUR_TELEGRAM_USERNAME
```

**Email** (footer):
```html
info@socialgrowth.com → your@email.com
```

---

### **3. Set Up Form Backend (Optional)**

#### **Option A: Formspree (Free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create forms for "Profile Audit" and "Contact"
3. Add action attribute:

```html
<form id="audit-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### **Option B: Custom API**
Update `script.js` lines 47-59 with your endpoint.

---

## 📁 File Structure

```
project/
├── index.html         # Main landing page
├── script.js          # Minimal vanilla JS
├── README.md          # This file
└── images/
    └── README.md      # Image optimization guide
```

---

## 🎨 Design System

### **Colors**
```css
Primary Purple:   #7C3AED
Indigo Accent:    #6366F1
Violet Accent:    #8B5CF6
Background:       #FAFBFC
```

### **Typography**
- **Font:** Inter (Google Fonts)
- **Hero:** 5xl-7xl (80-112px) Bold
- **Headings:** 3xl-5xl (48-60px) Bold
- **Body:** lg-xl (18-20px) Regular
- **Line Height:** 1.7 for paragraphs, 1.2 for headings

### **Spacing**
- **Sections:** py-20 (80px vertical)
- **Cards:** p-8 to p-10 (32-40px)
- **Buttons:** px-8 py-4 (large, tappable)
- **Border Radius:** rounded-2xl / rounded-3xl (16-24px)

---

## 📱 Key Sections

1. **Hero Section**
   - Simplified headline: "LinkedIn & X 100% Managed"
   - Dual CTAs (Book Call + Free Audit)
   - WhatsApp + Telegram quick chat buttons
   - Social proof strip

2. **Free Profile Audit**
   - Glass-morphism card
   - LinkedIn URL + X handle fields
   - Platform selection dropdown

3. **Pricing**
   - 3 tiers with clear features
   - Post boosting service in tiers 2 & 3
   - "Most Popular" badge on tier 2

4. **FAQ**
   - Collapsible details elements
   - Addresses common objections

5. **Contact Section**
   - Clear "Get In Touch" heading
   - Message textarea
   - Alternative contact methods
   - Glass-morphism card

6. **Booking Section**
   - Google Calendar button (no iframe)
   - Phone + WhatsApp fallbacks

---

## ✅ What's Fixed

| Issue | Solution |
|-------|----------|
| Hero too cluttered | Simplified to 3-line headline + subhead |
| Logo invisible on purple | White logo in gradient box |
| Broken Calendly embed | Google Calendar button (no iframe) |
| Unclear audit form | Glass card with clear purpose |
| No line spacing | Added `line-height: 1.7` globally |
| Missing contact clarity | Renamed "Final CTA" to "Get In Touch" |
| No quick chat | Added WhatsApp + Telegram buttons |
| No boosting service | Added to pricing tiers 2 & 3 |

---

## 🧪 Testing Checklist

### **Desktop**
- [ ] Logo visible on all backgrounds
- [ ] Hero WhatsApp/Telegram buttons work
- [ ] Audit form submits successfully
- [ ] Google Calendar opens in new tab
- [ ] Contact form has message field
- [ ] Pricing shows boosting service
- [ ] All hover effects working

### **Mobile**
- [ ] Text has proper line spacing
- [ ] Sticky CTA appears on scroll
- [ ] Forms are easy to fill
- [ ] Buttons are tappable (44px min)
- [ ] WhatsApp/Telegram tap-to-open

---

## 🌐 Deployment

### **Option 1: Netlify (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### **Option 2: Vercel**
```bash
vercel --prod
```

### **Option 3: GitHub Pages**
1. Push to GitHub
2. Settings → Pages → Deploy from main branch

---

## 📊 Performance

**Expected Metrics:**
- **LCP:** < 2s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)
- **Lighthouse:** 90+ score

**Optimizations:**
- No React framework (removed)
- No Calendly iframe (removed)
- Minimal vanilla JS (~5KB)
- Tailwind CDN (gzipped ~50KB)
- No images in critical path

---

## 🎯 Conversion Strategy

**Primary Goal:** Book 15-minute intro calls

**Secondary Goal:** Capture leads via free audit

**User Journey:**
1. Land on hero → See value prop
2. Quick chat (WhatsApp/Telegram) OR
3. Get free audit (lower commitment) OR
4. Book call directly (high intent)
5. Have questions? Contact form

---

## 💡 Customization

### **Change Brand Colors**
Edit `tailwind.config` in `index.html`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#DARKER_SHADE',
}
```

### **Change Logo**
Replace gradient box (line ~153):
```html
<!-- Your custom logo -->
<img src="/logo.svg" alt="Brand" class="h-10">
```

### **Adjust Spacing**
- More whitespace: `py-20` → `py-24`
- Less whitespace: `py-20` → `py-16`

---

## 📝 License

All rights reserved. 2025 SocialGrowth

---

## 🆘 Support

**Questions?** Check the code comments in `index.html` and `script.js`

**Need help?** All setup steps are documented above.

**Ready to launch?** Just update the 3 items in Quick Setup section!

---

**Built with:** Pure HTML + Tailwind CSS + Vanilla JavaScript

**No frameworks** • **No build step** • **Production-ready**

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fef2892a-dce7-40b5-b7d7-2f8c779634ac) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
=======
# robin-rajan-landing-page
Techy VA Landing Page 

