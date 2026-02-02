
# Project Detail Page - Single Page Design

## Overview
A comprehensive, single-page project detail template that showcases individual case studies with a bold, editorial layout matching the existing portfolio aesthetic.

---

## Page Structure

The page will be divided into distinct sections that flow vertically, creating an immersive storytelling experience:

```text
+------------------------------------------+
|  HEADER (Navigation + Back link)         |
+------------------------------------------+
|                                          |
|  HERO SECTION                            |
|  Full-width project image                |
|  Project title overlay                   |
|                                          |
+------------------------------------------+
|  PROJECT INFO BAR                        |
|  Client | Year | Category | Services     |
+------------------------------------------+
|                                          |
|  CHALLENGE & SOLUTION                    |
|  Two-column layout with text blocks      |
|                                          |
+------------------------------------------+
|                                          |
|  IMAGE GALLERY                           |
|  Grid of project images                  |
|                                          |
+------------------------------------------+
|                                          |
|  KEY RESULTS / METRICS                   |
|  Stats and achievements                  |
|                                          |
+------------------------------------------+
|  PREV / NEXT PROJECT NAV                 |
+------------------------------------------+
|  CONTACT FOOTER                          |
+------------------------------------------+
```

---

## Section Details

### 1. Header
- Minimal header with "PORTFOLIO_RG" logo (smaller than homepage)
- "Back to Projects" link with arrow icon
- Consistent with homepage navigation style

### 2. Hero Section
- Full-width, full-viewport-height hero image
- Project title in large Bebas Neue typography overlaid at bottom-left
- Category tag (yellow accent) positioned in corner
- Subtle gradient overlay for text readability

### 3. Project Info Bar
- Horizontal strip with border styling (matching homepage grid borders)
- 4 columns: Client, Year, Category, Services
- Clean, minimal typographic presentation
- Electric blue accent on labels

### 4. Challenge & Solution
- Two-column grid layout
- Left column: "THE CHALLENGE" - problem statement
- Right column: "THE SOLUTION" - approach description
- Large display typography for section headers
- Body text in Inter font for readability

### 5. Image Gallery
- Masonry-style or grid layout
- Mix of image sizes (full-width, half-width, thirds)
- Hover effects matching homepage project cards
- Optional image captions

### 6. Key Results / Metrics
- 3-4 large statistics in a row
- Big numbers in Bebas Neue display font
- Supporting text below each metric
- Optional background color block for visual break

### 7. Prev/Next Project Navigation
- Full-width split design
- Left side: Previous project with thumbnail preview
- Right side: Next project with thumbnail preview
- Hover reveals more of the image
- Arrow icons and project titles

### 8. Footer
- Reuse existing Contact component
- "Let's Work Together" CTA

---

## Technical Implementation

### New Files to Create

| File | Purpose |
|------|---------|
| `src/pages/ProjectDetail.tsx` | Main page component |
| `src/components/ProjectHero.tsx` | Full-width hero section |
| `src/components/ProjectInfo.tsx` | Metadata bar component |
| `src/components/ProjectContent.tsx` | Challenge/Solution section |
| `src/components/ProjectGallery.tsx` | Image gallery component |
| `src/components/ProjectMetrics.tsx` | Stats/results section |
| `src/components/ProjectNav.tsx` | Prev/Next navigation |

### Routing
- Add route: `/project/:slug` in App.tsx
- Update project links in Projects.tsx to use React Router Links

### Data Structure
Each project will have:
- `slug` - URL-friendly identifier
- `title` - Project name
- `category` - Design, Social Media, etc.
- `heroImage` - Main showcase image
- `client` - Client name
- `year` - Project year
- `services` - Array of services provided
- `challenge` - Problem description
- `solution` - Approach description
- `gallery` - Array of gallery images
- `metrics` - Optional stats array
- `prevProject` / `nextProject` - Navigation links

### Styling Approach
- Leverage existing CSS utilities (`.btn-hero`, `.category-tag`, `.link-underline`)
- Use Bebas Neue for display headings
- Maintain border-based grid system from homepage
- Apply existing animations (fade-in, slide-up)
- Keep high-contrast black/white with electric blue and yellow accents

---

## Responsive Behavior

| Breakpoint | Adjustments |
|------------|-------------|
| Desktop (lg+) | Full multi-column layouts, large typography |
| Tablet (md) | Two-column becomes stacked in some sections |
| Mobile (sm) | Single column, reduced typography scale, stacked nav |

---

## Summary

This single-page design creates a complete case study experience that:
- Tells the project story from problem to solution
- Showcases work through a rich image gallery
- Highlights measurable results
- Provides seamless navigation to other projects
- Maintains the bold, high-contrast aesthetic established in the homepage
