# Planet of Sound Rock School - AI Coding Agent Instructions

## Project Architecture

This is an **Eleventy (11ty) static site** with a unique hybrid approach: Nunjucks templates for structure + DecapCMS for content management. Key architectural decisions:

### Template Strategy (CRITICAL)
- **Pure Nunjucks**: All pages are `.njk` files (not Markdown) for complete HTML control
- **Empty P-tag Prevention**: Custom HTML transform in `.eleventy.js` aggressively removes `<p></p>` tags
- **Selective Markdown**: Only use markdown filter in Nunjucks: `{{ content | markdown }}`
- **Never mix**: Don't create `.md` files for pages - they cause empty paragraph issues
- **Recent Migration**: Template architecture was overhauled in January 2025 - all pages converted from `.md` to `.njk`

### Development Workflow
```bash
npm run dev          # Parallel SCSS watch + Eleventy serve (runs on :8080)
npm run build        # SCSS compile → Eleventy build → HTML cleanup
npm run build:sass   # Standalone SCSS compilation
npm start            # Same as npm run dev
```

### Current State (Important)
- **Live Site**: https://planetofsoundrockschool.netlify.app
- **Deployment**: Netlify (primary) + GitHub Pages (backup)
- **Branch Strategy**: Main branch for production, feature branches for development

## Content Management System

### DecapCMS Component-Based Architecture
Content is managed through **individual JSON data files**, not traditional CMS pages:

```
src/_data/
├── programs/           # Individual program files
│   ├── learn_to_play.json
│   ├── bandstarter.json
│   ├── show_ready.json
│   └── tour.json
├── pricing/
│   ├── individual_lessons.json
│   └── recording.json
└── site.json          # Global contact info
```

### Policy System Pattern (Recently Migrated)
**CRITICAL**: Policies recently migrated from JSON to Markdown files:
- Each policy: `src/policies/policy-name.md` with YAML frontmatter
- Template loop: `{% for policy in collections.policies %}` in `src/policies.njk`
- CMS config: Folder collection in `src/admin/config.yml`
- **Migration complete**: Old JSON files in `src/_data/policies/` removed

### Four-Tier Program Structure
Planet of Sound uses a unique tiered approach:
1. **Learn To Play**: Foundation skills for beginners
2. **Bandstarter**: Collaborative music-making and band dynamics  
3. **Show Ready**: Performance preparation and live show skills
4. **Tour**: Professional touring readiness and industry knowledge

## Styling System

### SCSS Architecture (Modular @use)
```scss
// src/scss/main.scss structure
@use 'abstracts/variables' as *;  // SCSS variables
@use 'abstracts/mixins';          // Responsive helpers
@use 'base/dark-theme';           // Dark mode vars
@use 'components/hero';           // Component styles
```

### Color System & Accessibility
- **WCAG AAA Compliance**: All colors have 7:1+ contrast ratios
- **CSS Custom Properties**: Runtime theme switching in `:root`
- **SCSS + CSS Variables**: Dual system for compile-time and runtime values
- **Dark Mode**: `data-theme="dark"` attribute with localStorage persistence

### Bootstrap Integration Pattern
- Bootstrap 5.3.3 via CDN (don't override)
- Custom components extend Bootstrap classes
- Use existing responsive breakpoints: `@include mobile-only`, `@include large-desktop-up`

## Key File Patterns

### Base Layout (`src/_layouts/base.njk`)
- **Early dark mode script**: Prevents flash before body loads
- **Cache busting filter**: `{{ '/css/style.css' | cacheBust }}` uses Git hash
- **Skip links**: Accessibility-first navigation
- **Mobile settings banner**: Unique UX pattern for mobile display controls
- **Enhanced Mobile Navigation**: Custom "MENU" button (not hamburger) for clarity
- **Full-Width Mobile Menu**: Spans complete container width across all breakpoints

### Eleventy Configuration (`.eleventy.js`)
- **Critical transform**: `cleanEmptyParagraphs` prevents Markdown artifacts
- **Custom markdown filter**: Returns empty string for null/empty values
- **Environment globals**: `env.context`, `env.isPreview` for deployment awareness

### Navigation Pattern
Use `eleventyNavigation` in frontmatter:
```yaml
---
layout: base.njk
eleventyNavigation:
  key: programs
  order: 3
---
```

## Development Conventions

### Adding New Content Types
1. Create data structure: `src/_data/new-type/item.json`
2. Update DecapCMS: Add collection in `src/admin/config.yml`
3. Template access: `{{ new-type.item.property }}` or loop through collection
4. Test CMS workflow at `/admin/` locally

### Styling New Components
1. Create `src/scss/components/_component.scss`
2. Add `@use 'components/component';` to `main.scss`
3. Use existing SCSS variables from `abstracts/_variables.scss`
4. Provide dark mode styles in `base/_dark-theme.scss`

### Accessibility Requirements
- **Touch targets**: Minimum 44px (WCAG 2.2)
- **Color contrast**: 7:1 ratio (AAA level)
- **Focus indicators**: Visible for all interactive elements
- **Motion preferences**: Respect `prefers-reduced-motion`

### HTML Cleanup Rules
- Never use raw Markdown files for pages (causes `<p></p>` issues)
- Use Nunjucks templates with selective `| markdown` filter
- Test HTML output - the build process removes artifacts but prevention is better
- Bootstrap card structures don't mix well with Markdown processing

## Testing & Deployment
- **Local CMS**: `local_backend: true` in DecapCMS config
- **Build validation**: HTML cleanup script runs post-build
- **GitHub Pages**: Auto-deploy from main branch
- **Preview deploys**: Netlify for PR previews
- **Dev server**: Runs on http://localhost:8080 by default

## Recent Architectural Changes
- **Template Migration**: All pages converted from `.md` to `.njk` (January 2025)
- **Policy System**: Migrated from complex JSON to individual Markdown files
- **Mobile UX**: Enhanced navigation with "MENU" button and improved touch targets
- **Accessibility**: WCAG 2.2 compliance with AAA color contrast ratios (7:1)
- **Animation Controls**: User preferences with localStorage persistence