# Images Folder

## Required Images for Optimal Performance

To complete your landing page, add the following optimized images to this folder:

### 1. **og-image.jpg** (1200x630px)
- Open Graph image for social media sharing
- Should showcase your brand and value proposition
- **Format:** JPG or WebP
- **Max size:** 500KB

### 2. **hero-background.webp** (1920x1080px) - Optional
- Hero section background image
- **Format:** WebP for best performance
- **Max size:** 300KB

### 3. **testimonial-1.jpg, testimonial-2.jpg, testimonial-3.jpg** (200x200px)
- Client headshots for testimonials
- Currently using gray placeholders
- **Format:** JPG or WebP
- **Max size:** 50KB each

### 4. **client-logos/** (subfolder)
- Logo images for trusted companies
- **Format:** SVG (preferred) or PNG with transparency
- **Dimensions:** Variable, but optimize for ~150px width

### 5. **case-study-thumbnails/** (subfolder) - Optional
- Before/after screenshots or metrics visualizations
- **Format:** WebP
- **Dimensions:** 600x400px
- **Max size:** 100KB each

## Image Optimization Tips

1. **Use WebP format** whenever possible for 25-35% smaller file sizes
2. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)
3. **Use responsive images** with srcset for different screen sizes
4. **Lazy load** images below the fold

## Quick Optimization Command (if you have ImageMagick)

```bash
# Convert to WebP
magick input.jpg -quality 85 output.webp

# Resize and optimize
magick input.jpg -resize 1200x630 -quality 85 og-image.jpg
```

## Placeholder Service (Temporary)

While collecting real images, you can use placeholder services:
- https://placehold.co/1200x630?text=Your+Brand
- https://picsum.photos/1200/630

Replace placeholders before launch for professional appearance!
