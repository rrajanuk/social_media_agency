# Testing Guide - Landing Page Features

## Quick Test Checklist

### ✅ Feature 1: Exit-Intent Newsletter Pop-Up (Limited to 2/session)

**Test Steps:**
1. Open the site in a browser
2. Move your mouse cursor to the very top of the page (within top 50px)
3. Wait ~300ms - Newsletter pop-up should appear
4. Close the pop-up (click outside or "No, thanks")
5. Repeat step 2-3 - Pop-up appears **second time**
6. Try again - Pop-up should **NOT** appear (max 2 reached)
7. Open DevTools → Application → Session Storage
   - Check `exitIntentShowCount` = "2"

**Mobile Test:**
- Resize browser to < 768px width
- Move mouse to top
- Pop-up should **NOT** appear (disabled on mobile)

---

### ✅ Feature 2: Suppress Newsletter on Unsubscribe URL

**Test URLs:**
```
http://localhost:5173/?unsubscribe=true
http://localhost:5173/?action=unsubscribe
```

**Expected Behavior:**
1. Visit one of the URLs above
2. Unsubscribe modal opens **automatically**
3. URL parameters removed from address bar
4. Try triggering exit-intent - Newsletter pop-up **suppressed**
5. Check Session Storage: `suppressNewsletterPopup` = "true"

---

### ✅ Feature 3: Improved Badge Readability

**Visual Check:**
1. Scroll to hero section (top of page)
2. Locate badge: "Fluent in English • 5+ Years Async Agency Experience"
3. Verify gradient coloring (cyan → blue → purple)
4. Text should be clearly visible with high contrast

**Before vs After:**
- Before: Plain white/gray text
- After: Vibrant gradient text matching "Tech-Powered" headline

---

### ✅ Feature 4: Enhanced Cookie Consent Banner

#### Test GDPR Mode (Simulated EU Location)

**Manual Override for Testing:**
Edit `CookieConsent.tsx` line 50:
```typescript
setIsGDPR(true); // Force GDPR mode
```

**Expected Layout:**
- **Row 1**: Accept All | Accept Necessary
- **Row 2**: Reject | Manage Preferences

**Test Each Button:**

1. **Accept All**
   - Click button
   - Banner disappears
   - Check localStorage: `cookieConsent` has all cookies enabled
   ```json
   {
     "necessary": true,
     "analytics": true,
     "marketing": true,
     "functional": true
   }
   ```

2. **Accept Necessary**
   - Click button
   - Banner disappears
   - Check localStorage: Only necessary enabled
   ```json
   {
     "necessary": true,
     "analytics": false,
     "marketing": false,
     "functional": false
   }
   ```

3. **Reject**
   - Click button
   - Banner disappears
   - Check localStorage: Only necessary enabled (same as Accept Necessary)

4. **Manage Preferences**
   - Click button
   - Modal opens showing 4 cookie categories
   - All except "Necessary" show "Disabled"
   - Click "Save Preferences" - closes modal and saves settings

#### Test Non-GDPR Mode (Default)

**Expected Layout:**
- **Single Row**: Accept All | Reject

**Responsive Test:**
- **Desktop (≥768px)**: Buttons side-by-side
- **Mobile (<768px)**: Buttons stacked vertically, full-width

**Banner Specifications:**
- Max height: 400px
- Padding: 24px (p-6)
- Content scrollable if overflow
- Buttons always visible at bottom

---

### ✅ Feature 5: Unsubscribe Modal

**Test Steps:**
1. Scroll to footer
2. Click "Unsubscribe" link
3. Modal opens

**Form Validation:**
- Leave email empty → Submit → Error: "Email address is required"
- Enter invalid email (e.g., "test") → Submit → Error: "Please enter a valid email address"
- Enter valid email → Submit → Success toast appears

**Styling Check:**
- Title: "Unsubscribe" (2xl, bold)
- Email input: Same style as contact form
- Submit button: Gradient background (primary CTA style)
- Cancel button: Outline style

---

### ✅ Feature 6: Email Content Viewer

**Test URL:**
```
http://localhost:5173/?email=view&contentId=test123
```

**Expected Behavior:**
1. Modal opens automatically on page load
2. Shows placeholder email content with:
   - Email subject as title
   - Formatted HTML content
   - Scrollable area
3. Close modal → URL params removed
4. Modal doesn't reappear on refresh

---

### ✅ Feature 7: Privacy Policy Modal

**Test Steps:**
1. Scroll to footer
2. Click "Privacy Policy" link
3. Modal opens with:
   - Shield icon (blue tint)
   - Title: "Privacy Policy" (3xl, bold)
   - Scrollable content
   - Multiple sections with gradient headings
   - Close button at bottom

**Keyboard Test:**
- Press `Escape` → Modal closes
- Click outside modal → Modal closes

---

### ✅ Feature 8: Terms of Service Modal

**Test Steps:**
1. Scroll to footer
2. Click "Terms of Service" link
3. Modal opens with:
   - FileText icon (cyan tint)
   - Title: "Terms of Service" (3xl, bold)
   - 14 sections with numbered headings
   - Scrollable content
   - Close button at bottom

**Content Check:**
- Sections numbered 1-14
- Gradient text on section headers
- Links styled in primary color
- Lists and paragraphs properly formatted

---

## Browser Testing Matrix

### Desktop Testing
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Mobile Testing
- ✅ iOS Safari
- ✅ Chrome Mobile (Android)
- ✅ Firefox Mobile

### Responsive Breakpoints
- ✅ Mobile: 375px - 767px
- ✅ Tablet: 768px - 1023px
- ✅ Desktop: 1024px+

---

## Performance Checks

### Lighthouse Scores
Run in Chrome DevTools (Incognito mode):
```
npm run build
npm run preview
```
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

### Network Panel
- All modals lazy-loaded (no initial bundle bloat)
- Geolocation API call only once
- No memory leaks on modal open/close

---

## Accessibility Testing

### Screen Reader (NVDA/JAWS)
- All modals announced properly
- Button labels clear
- Form fields have labels
- Focus management works

### Keyboard Navigation
- `Tab` navigates through interactive elements
- `Enter` activates buttons
- `Escape` closes modals
- Focus trap works in modals

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text)
- Gradient text has sufficient contrast
- Error messages clearly visible

---

## Common Issues & Solutions

### Issue: Exit-Intent triggers too easily
**Solution:** Adjust threshold in `ExitIntentNewsletter.tsx` line 42:
```typescript
if (e.clientY <= 50) // Change 50 to higher value (e.g., 30)
```

### Issue: Cookie banner doesn't appear
**Solution:** Clear localStorage:
```javascript
localStorage.removeItem('cookieConsent');
```

### Issue: Modals not closing on Escape
**Solution:** Radix UI Dialog handles this automatically. Ensure no JavaScript errors in console.

### Issue: Gradient text not visible
**Solution:** Check `index.css` has `.gradient-text` class definition

---

## Debugging Tips

### Check Session Storage
```javascript
// Console commands
sessionStorage.getItem('exitIntentShowCount')
sessionStorage.getItem('suppressNewsletterPopup')
```

### Check Local Storage
```javascript
localStorage.getItem('cookieConsent')
```

### Clear All Storage
```javascript
sessionStorage.clear()
localStorage.clear()
location.reload()
```

### Force Cookie Banner
```javascript
localStorage.removeItem('cookieConsent')
location.reload()
```

---

## Automated Testing (Future Enhancement)

### Playwright Test Example
```typescript
test('Exit-intent newsletter appears twice', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Trigger exit-intent
  await page.mouse.move(50, 10);
  await page.waitForTimeout(300);
  
  // First appearance
  await expect(page.locator('[role="dialog"]')).toBeVisible();
  await page.click('button:has-text("No, thanks")');
  
  // Second appearance
  await page.mouse.move(50, 10);
  await page.waitForTimeout(300);
  await expect(page.locator('[role="dialog"]')).toBeVisible();
  
  // Third attempt - should not appear
  await page.click('button:has-text("No, thanks")');
  await page.mouse.move(50, 10);
  await page.waitForTimeout(300);
  await expect(page.locator('[role="dialog"]')).not.toBeVisible();
});
```

---

## Sign-Off Checklist

Before marking complete:
- [ ] All 8 features tested manually
- [ ] Desktop responsive layouts verified
- [ ] Mobile responsive layouts verified
- [ ] Accessibility checks passed
- [ ] No console errors
- [ ] Session/Local storage working
- [ ] All modals close properly
- [ ] Gradient text visible
- [ ] Cookie consent geo-detection works
- [ ] Unsubscribe URL detection works

---

**Testing completed by:** _________________  
**Date:** _________________  
**Browser versions tested:** _________________
