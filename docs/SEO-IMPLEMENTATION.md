# SEO Implementation Guide for Transafrican Air

## Overview
This guide documents all SEO optimizations implemented for the Transafrican Air website.

## Files Created

### 1. `/lib/seo/metadata.ts` - Centralized Metadata Library
Contains all SEO metadata for 10 pages with:
- Title tags (50-60 characters)
- Meta descriptions (120-160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Keywords for each page

**Usage in page files:**
```typescript
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata = generatePageMetadata('home')
```

### 2. `/public/sitemap.xml` - XML Sitemap
Complete sitemap listing all 10 pages with:
- Last modified dates
- Change frequency (weekly, bi-weekly, monthly)
- Priority levels (1.0 for home, 0.85 for service pages, 0.8 for contact)

Automatically discovered by search engines at `https://transafricanair.com/sitemap.xml`

### 3. `/public/robots.txt` - Search Engine Directives
Guides crawlers on which content to index:
- Allows all public pages
- Blocks admin, internal API, and system files
- Sets crawl delay for respectful indexing
- References sitemap location

### 4. `/app/layout.tsx` - Global Metadata
Root layout updated with:
- Canonical URL
- OpenGraph tags for social sharing
- Twitter Card tags
- Robots meta directives
- Viewport and theme color settings
- Sitemap link in head

## Page-Specific SEO Keywords

### Home (`/`)
- Primary: "aircraft charter Africa", "private jet charter", "African air charter"
- Secondary: "charter flights Africa", "aircraft rental Africa", "flexible flight options"

### About (`/about`)
- Primary: "Transafrican Air", "professional charter service", "aircraft charter company"
- Secondary: "African aviation", "charter operator", "reliable flight service"

### Medical Charters (`/medical-charters`)
- Primary: "medical air charter", "air ambulance", "emergency medical transport"
- Secondary: "patient evacuation", "medical flight", "air ambulance Africa"

### Sports Charters (`/sports-charters`)
- Primary: "sports team charter", "athlete transport", "group charter flights"
- Secondary: "sports charter Africa", "team aircraft charter", "tournament transport"

### Film & TV Charters (`/film-tv-charters`)
- Primary: "film charter", "TV production charter", "film crew transport"
- Secondary: "production aircraft charter", "location filming", "production logistics"

### Executive Events (`/executive-events-charters`)
- Primary: "corporate charter", "executive charter", "business aircraft charter"
- Secondary: "VIP transport", "corporate retreat", "executive transport"

### Helicopter Charters (`/helicopter-charters`)
- Primary: "helicopter charter", "helicopter transport Africa", "remote location access"
- Secondary: "helicopter charter services", "emergency helicopter", "specialized access"

### Humanitarian Charters (`/humanitarian-charters`)
- Primary: "humanitarian charter", "NGO transport", "relief flight charter"
- Secondary: "disaster relief", "emergency humanitarian", "relief operations"

### Perishable Goods (`/perishable-goods-charters`)
- Primary: "refrigerated cargo charter", "cold chain transport", "perishable goods charter"
- Secondary: "pharmaceutical transport", "food cargo charter", "temperature-sensitive"

### Contact (`/contact`)
- Primary: "charter quote", "aircraft charter contact", "Transafrican Air contact"
- Secondary: "request quote", "get in touch", "charter support"

## How to Update Page Metadata

For each page (e.g., `/app/medical-charters/page.tsx`):

```typescript
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'

// Use the page key from /lib/seo/metadata.ts
export const metadata: Metadata = generatePageMetadata('medicalCharters')

export default function MedicalChartersPage() {
  return (
    // ... page content
  )
}
```

## SEO Best Practices Applied

### Technical SEO
- ✓ Mobile-responsive design (Viewport meta tag)
- ✓ Fast loading with Next.js optimization
- ✓ Structured URLs (no query parameters in primary routes)
- ✓ XML sitemap for crawlability
- ✓ robots.txt for crawler guidance
- ✓ Canonical URLs to prevent duplicate content

### On-Page SEO
- ✓ Unique title tags (50-60 chars) for each page
- ✓ Compelling meta descriptions (120-160 chars)
- ✓ Semantic HTML structure with proper heading hierarchy
- ✓ Alt text on images
- ✓ Internal linking between related pages

### Social SEO
- ✓ Open Graph tags for proper social sharing
- ✓ Twitter Card tags for Twitter sharing
- ✓ Rich preview images (1200x630px recommended)

### Off-Page SEO
- ✓ Clear business name and branding
- ✓ Geographic focus (Africa)
- ✓ Industry-specific keywords
- ✓ Service-specific keywords for each charter type

## Monitoring SEO Performance

### Google Search Console
1. Add website: https://transafricanair.com
2. Upload `/public/sitemap.xml`
3. Monitor search queries and impressions
4. Check for crawl errors
5. Verify security issues

### Google Analytics
- Track organic traffic by page
- Monitor bounce rate and session duration
- Identify high-performing pages
- Track conversions (quote form submissions)

### Keyword Rankings
Monitor rankings for primary keywords:
- "aircraft charter Africa"
- "air ambulance Africa"
- "medical air charter"
- "charter flights"
- Brand: "Transafrican Air"

## Content Optimization Tips

### Headings
- Use H1 for main page title (appears once per page)
- H2 for section headers
- Include keywords naturally but not excessively

### Content
- Include primary keyword in first 100 words
- Write for humans first, search engines second
- Use short paragraphs (2-3 sentences)
- Include calls-to-action

### Internal Linking
- Link to related charter services from home page
- Link contact form from service pages
- Link about page from other pages
- Use descriptive anchor text

## Future SEO Improvements

- Add structured data (Schema.org) for local business
- Add FAQ schema on relevant pages
- Create blog content targeting long-tail keywords
- Implement hreflang tags if adding multiple language versions
- Add breadcrumb navigation for better UX and SEO
- Monitor Core Web Vitals in Google Search Console
