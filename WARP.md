# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This is the Planet of Sound Rock School website - a static site built with Eleventy (11ty) and deployed to GitHub Pages. It showcases a four-tier music education program in London, Ontario.

## Development Commands

### Core Commands
- `npm install` - Install all dependencies
- `npm run dev` - Start development server with live reload and file watching
- `npm start` - Start development server (same as dev)
- `npm run build` - Build the site for production (outputs to `_site/`)

### Development Workflow
- Run `npm run dev` for local development - this watches for changes and auto-reloads
- The dev server typically runs on http://localhost:8080
- All source files are in the `src/` directory
- Built files output to `_site/` directory (ignored in git)

## Architecture

### Site Structure
- **Static Site Generator**: Eleventy (11ty) using CommonJS configuration
- **Template Engine**: Nunjucks (.njk files) for layouts and templating
- **Content**: Markdown files with YAML front matter
- **Styling**: Bootstrap 5.3.3 via CDN + custom CSS in `src/css/style.css`
- **Navigation**: Uses `@11ty/eleventy-navigation` plugin for automated navigation

### Directory Structure
```
src/
├── _layouts/
│   └── base.njk          # Main layout template
├── css/
│   └── style.css         # Custom CSS styles
├── *.md                  # Content pages (index, about, programs, etc.)
└── assets/               # Static assets (copied during build)
```

### Content Management
- Each page is a Markdown file with YAML frontmatter
- Navigation is configured via `eleventyNavigation` in frontmatter
- All pages extend `base.njk` layout
- Site uses semantic HTML with Bootstrap classes

### Styling System
- **CSS Variables**: Custom properties defined in `:root` for brand colors
  - `--rock-red: #e74c3c`
  - `--rock-dark: #2c3e50` 
  - `--rock-orange: #f39c12`
- **Component Styling**: Custom classes for hero sections, cards, buttons with hover effects
- **Animations**: CSS keyframes for floating icons and card entrance animations
- **Responsive Design**: Bootstrap grid + custom media queries

### Navigation Structure
Pages are ordered by `eleventyNavigation.order`:
1. Home
2. About 
3. Programs
4. Pricing
5. (other pages)
6. Contact

## Key Features

### Content Architecture
- **Four-Tier Program System**: Learn To Play → Bandstarter → Show Ready → Tour
- **Pricing Transparency**: Individual lessons and program pricing clearly displayed
- **Contact Integration**: Email links with pre-populated subject/body text
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Template System
- Single base layout with Nunjucks templating
- Automated navigation generation from frontmatter
- Consistent header/footer across all pages
- Bootstrap integration with custom CSS overrides

## Deployment

- **Platform**: GitHub Pages
- **Automation**: GitHub Actions workflow in `.github/workflows/deploy.yml`
- **Trigger**: Pushes to `main` branch automatically build and deploy
- **Build Process**: Node.js 18, npm ci, npm run build, artifact upload
- **Output**: `_site/` directory contents served at GitHub Pages URL

## Development Guidelines

### Adding New Pages
1. Create new `.md` file in `src/`
2. Add YAML frontmatter with `layout: base.njk`, `title`, `description`
3. Include `eleventyNavigation` if it should appear in main navigation
4. Write content in Markdown or HTML

### Modifying Styles
- Edit `src/css/style.css` for custom styling
- Follow existing CSS variable naming convention
- Use Bootstrap utility classes where possible
- Test responsive design across breakpoints

### Content Updates
- Program information is in `src/programs.md` and `src/index.md`
- Pricing details in `src/pricing.md`
- Contact information in `src/contact.md`
- All content uses consistent Bootstrap component structure

### Local Development
- Use `npm run dev` for development with live reload
- CSS and JS files are watched for changes
- Static assets are copied from `src/assets/`, `src/css/`, `src/js/`
- Test builds locally with `npm run build` before deploying

## Development Roadmap & Task List

The following tasks represent planned improvements and enhancements for the Planet of Sound Rock School website:

### Priority 1: Accessibility & Inclusion

#### 1. Add Accessibility Statement Page
- Create dedicated accessibility statement page (`src/accessibility.md`)
- Document WCAG compliance level and goals
- Include contact information for accessibility feedback
- List known accessibility issues and improvement timeline
- Add to main navigation with appropriate `eleventyNavigation` settings

#### 2. Add Reduce Motion Accessibility Option
- Implement `prefers-reduced-motion` media query support
- Create manual toggle for motion preferences in site settings
- Disable CSS animations and transitions when reduce motion is enabled
- Store user preference in localStorage
- Update existing floating icons and card animations to respect setting

#### 3. Add Dark Mode Support
- Implement dark mode toggle with CSS custom properties
- Extend existing color variable system with dark mode variants:
  - `--rock-red-dark`, `--rock-dark-light`, `--rock-orange-dark`
- Ensure WCAG AA contrast ratios in both light and dark modes
- Store user preference in localStorage
- Add toggle button to site header/navigation

### Priority 2: Quality Assurance & Testing

#### 4. Implement Automated Accessibility Testing
- Integrate axe-core or pa11y into build process
- Test for:
  - Color contrast ratios (WCAG AA/AAA compliance)
  - Keyboard navigation functionality
  - Screen reader compatibility and ARIA attributes
  - Focus management and visual indicators
- Add accessibility tests to GitHub Actions workflow
- Set up automated reporting and failure notifications

#### 5. Add Automated Security Testing
- Implement `npm audit` in CI/CD pipeline
- Add Snyk or similar dependency vulnerability scanning
- Configure Content Security Policy (CSP) headers
- Regular security dependency updates
- Monitor for common web vulnerabilities (XSS, CSRF)

#### 10. Evaluate Cookie Banner/Privacy Compliance Requirements
- Research current data collection practices (analytics, tracking pixels)
- Determine GDPR/CCPA compliance requirements for the site
- Implement cookie banner if required for current tracking
- Consider privacy-first alternatives (server-side analytics, cookieless tracking)
- Create privacy policy page if needed
- Evaluate switching to privacy-focused analytics (Plausible, Fathom, etc.)

#### 6. Implement Automated Performance Testing
- Integrate Lighthouse CI for Core Web Vitals monitoring
- Set performance budgets for:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - First Input Delay (FID)
- Monitor bundle size and loading performance
- Test across different connection speeds

#### 7. Add Automated HTML/CSS Validation Testing
- Integrate W3C HTML validator into build process
- Add CSS validation for standards compliance
- Ensure semantic HTML structure
- Validate ARIA attributes and accessibility markup

#### 8. Implement Automated Link Checking
- Add broken link detection for internal navigation
- Test external links (email, social media)
- Validate contact form functionality
- Check for proper redirects and error handling

#### 9. Add Automated Cross-Browser Testing
- Test across major browsers (Chrome, Firefox, Safari, Edge)
- Validate responsive design on different screen sizes
- Consider Playwright or Puppeteer for automated testing
- Test keyboard navigation across browsers

### Implementation Guidelines

#### Testing Integration
- All tests should be integrated into GitHub Actions workflow
- Tests should run on pull requests and main branch pushes
- Failed tests should prevent deployment
- Regular scheduled testing for external dependencies

#### Accessibility Implementation
- Follow WCAG 2.1 AA guidelines as minimum standard
- Test with actual screen readers (VoiceOver, NVDA, JAWS)
- Ensure keyboard-only navigation works throughout site
- Provide alternative text for all images and media

#### Performance Standards
- Target Lighthouse scores: 90+ for all categories
- Keep bundle sizes under reasonable limits
- Optimize images and assets for web delivery
- Implement lazy loading where appropriate

#### Security Best Practices
- Regular dependency updates and vulnerability patching
- Implement proper Content Security Policy headers
- Validate and sanitize any user inputs (contact forms)
- Use HTTPS everywhere and implement security headers

### Development Workflow Updates

Once these improvements are implemented:

1. **Pre-commit hooks**: Run accessibility and validation tests
2. **Pull request checks**: All automated tests must pass
3. **Deployment**: Include performance and security validation
4. **Monitoring**: Regular accessibility and performance audits
5. **User feedback**: Clear channels for accessibility and usability feedback

### Future Enhancements

- Progressive Web App (PWA) features
- Advanced analytics and user behavior tracking
- Multi-language support for accessibility
- Voice navigation integration
- Enhanced mobile experience optimizations
