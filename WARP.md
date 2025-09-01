# Planet of Sound Rock School - Warp Continuation Guide

## Project Overview

**Project:** Planet of Sound Rock School Website  
**Technology Stack:** Eleventy (11ty), Nunjucks templates, Bootstrap 5, Decap CMS  
**Repository:** https://github.com/planetofsoundrockschool/planetofsoundrockschool.github.io  
**Live Site:** https://planetofsoundrockschool.netlify.app  
**Current Branch:** `policies-markdown-migration` (created in this session)

## 🚨 URGENT - CURRENT SESSION STATUS 🚨

### Policy Management System Migration IN PROGRESS
**Status:** ~85% Complete - Ready for final cleanup and testing

**Problem:** Policies were managed as complex JSON data files with nested structures, making content editing difficult in Decap CMS.

**Solution:** Migrated to individual Markdown files for each policy document.

#### ✅ COMPLETED IN THIS SESSION:
- Created individual policy Markdown files in `src/policies/`
- Updated Decap CMS configuration for folder collection
- Updated policies.njk template to read from Markdown collection

#### 🔴 REMAINING TASKS TO COMPLETE:
- [ ] Remove old JSON policy files from `src/_data/policies/`
- [ ] Test policies page in development (`npm run dev`)
- [ ] Verify CMS functionality at `/admin/`
- [ ] Commit changes and push to GitHub
- [ ] Merge to main branch after testing

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
- **Template Engine**: Nunjucks (.njk files) for all pages and layouts
- **Content**: Pure HTML/Nunjucks templates with YAML front matter
- **Markdown Usage**: Only for specific content sections managed through DecapCMS components
- **Styling**: Bootstrap 5.3.3 via CDN + SCSS compiled to custom CSS
- **Navigation**: Uses `@11ty/eleventy-navigation` plugin for automated navigation
- **CSS Architecture**: SCSS with organized structure (abstracts, base, components, layout)

### Directory Structure
```
src/
├── _layouts/
│   └── base.njk          # Main layout template with enhanced mobile navigation
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss   # SCSS variables and brand colors
│   │   └── _mixins.scss      # Responsive mixins and utilities
│   ├── base/
│   │   ├── _dark-theme.scss  # Dark mode styles and theming
│   │   ├── _accessibility.scss
│   │   ├── _animations.scss
│   │   ├── _reset.scss
│   │   └── _utilities.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _forms.scss
│   │   └── _hero.scss
│   ├── layout/
│   │   ├── _header.scss      # Navigation and mobile menu styling
│   │   └── _footer.scss
│   └── main.scss         # Main SCSS entry point
├── css/
│   └── style.css         # Compiled CSS output
├── js/
│   ├── main.js
│   ├── dark-mode.js      # Dark mode toggle functionality
│   └── accessibility-aaa.js
├── *.njk                # Content pages (index, about, programs, etc.)
└── assets/               # Static assets (copied during build)
```

### Content Management
- Each page is a Nunjucks (.njk) file with YAML frontmatter
- Navigation is configured via `eleventyNavigation` in frontmatter
- All pages extend `base.njk` layout
- Site uses semantic HTML with Bootstrap classes
- Markdown is only used for specific content sections in DecapCMS components

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

### Navigation & User Experience Features
- **Enhanced Mobile Navigation**: Custom "MENU" button replaces hamburger icon for better clarity
- **Full-Width Mobile Menu**: Menu items span complete container width across all mobile breakpoints (including 1010-1210px)
- **Desktop Navigation Styling**: Left borders between navigation items instead of pipe separators
- **Dark Mode Support**: Comprehensive dark theme implementation with proper contrast ratios
- **Accessibility Features**: WCAG 2.2 compliant touch targets, keyboard navigation, and screen reader support
- **Animation Controls**: User toggle for motion preferences with localStorage persistence
- **Responsive Design**: Seamless experience across all device sizes with proper breakpoint handling

## Deployment

- **Platform**: GitHub Pages
- **Automation**: GitHub Actions workflow in `.github/workflows/deploy.yml`
- **Trigger**: Pushes to `main` branch automatically build and deploy
- **Build Process**: Node.js 18, npm ci, npm run build, artifact upload
- **Output**: `_site/` directory contents served at GitHub Pages URL

## Development Guidelines

### Adding New Pages
1. Create new `.njk` file in `src/`
2. Add YAML frontmatter with `layout: base.njk`, `title`, `description`
3. Include `eleventyNavigation` if it should appear in main navigation
4. Write content in HTML/Nunjucks templating
5. Use component data from DecapCMS when appropriate

### Modifying Styles
- **SCSS Architecture**: Edit SCSS files in `src/scss/` directory structure
  - `abstracts/_variables.scss`: Brand colors, breakpoints, and design tokens
  - `base/_dark-theme.scss`: Dark mode theming and color overrides
  - `layout/_header.scss`: Navigation, mobile menu, and header styling
  - `components/`: Reusable component styles
- **CSS Output**: SCSS compiles to `src/css/style.css`
- **Variables**: Use existing SCSS variables and mixins from abstracts layer
- **Responsive Design**: Use provided mixins (`@include mobile-only`, `@include large-desktop-up`)
- **Dark Mode**: Add corresponding dark theme styles in `_dark-theme.scss`
- **Bootstrap Integration**: Extend Bootstrap classes with custom SCSS
- **Testing**: Test across all breakpoints and both light/dark modes

### Content Updates
- Program information is in `src/programs.md` and `src/index.md`
- Pricing details in `src/pricing.md`
- Contact information in `src/contact.md`
- All content uses consistent Bootstrap component structure

### Working with DecapCMS Components
The site uses a **component-based approach** where Decap CMS manages individual content pieces that are assembled by templates:

#### Accessing the CMS
- Navigate to `/admin/` on the live site to access DecapCMS interface
- Requires GitHub authentication and repository write access
- Changes are committed directly to the repository main branch

#### Available Content Types
1. **Site Settings** (`src/_data/site.json`): Global site configuration
2. **Main Pages**: Full page content for major site sections
3. **Program Data** (`src/_data/programs/`): Individual program information cards
4. **Pricing Data** (`src/_data/pricing/`): Service pricing and lesson types
5. **Policy Components** (`src/_data/policies/`): Individual policy cards and sections

#### Component-Based Policy System
The policies page demonstrates the component approach:
- **Individual Policy Files**: Each policy is a separate JSON file (e.g., `code_of_conduct.json`)
- **Template Assembly**: The `policies.md` template loops through and renders all policies
- **Flexible Structure**: Each policy can have different fields (points, sections, areas)
- **Visual Styling**: Policies can use different card styles (light, warning, primary, secondary)
- **Ordering**: Policies are sorted by `order` field for consistent display

#### Adding New Component Types
1. **Update DecapCMS Config**: Add new collection in `src/admin/config.yml`
2. **Create Data Structure**: Define JSON schema for the component
3. **Update Templates**: Modify page templates to loop through and display components
4. **Test Workflow**: Ensure CMS interface works and data displays correctly

#### Template Data Access
In Nunjucks templates, access CMS data via:
```nunjucks
{%- for policy in policies -%}  {# Loops through all policy files #}
{{ policies.code_of_conduct.title }}  {# Accesses specific policy file #}
{{ programs.learn_to_play.price }}   {# Accesses program data #}
```

#### Benefits of Component Approach
- **Non-technical Updates**: Staff can update content without touching code
- **Consistent Styling**: Templates ensure uniform presentation
- **Flexible Content**: Easy to add/remove/reorder components
- **Version Control**: All changes tracked in Git with full revision history
- **Preview Mode**: DecapCMS preview shows changes before publishing

### Local Development
- Use `npm run dev` for development with live reload
- CSS and JS files are watched for changes
- Static assets are copied from `src/assets/`, `src/css/`, `src/js/`
- Test builds locally with `npm run build` before deploying

## Development Roadmap & Task List

The following tasks represent planned improvements and enhancements for the Planet of Sound Rock School website:

### ✅ Recently Completed Features

#### Enhanced Mobile Navigation (January 2025)
- ✅ **Mobile Menu UX**: Replaced hamburger icon with clear "MENU" text button
- ✅ **Full-Width Mobile Menu**: Fixed menu width issues across all mobile breakpoints (1010-1210px)
- ✅ **Desktop Navigation Styling**: Implemented left borders between nav items instead of pipe separators
- ✅ **WCAG 2.2 Compliance**: Added proper touch targets, focus states, and accessibility features
- ✅ **Mobile Menu Functionality**: Enhanced keyboard navigation and screen reader support

#### Dark Mode Implementation (Previously Completed)
- ✅ **Dark Mode Toggle**: Fully functional dark/light mode switching with localStorage persistence
- ✅ **Comprehensive Theme Coverage**: Dark mode styles for all components and layouts
- ✅ **Proper Contrast**: WCAG AA compliant color contrast ratios in both modes
- ✅ **User Preference**: Respects system preference and remembers user choice

#### Animation Controls (Previously Completed)
- ✅ **Motion Preferences**: User toggle for animations with localStorage persistence
- ✅ **Accessibility Integration**: Respects `prefers-reduced-motion` system preference
- ✅ **Feedback System**: Visual feedback when toggling animation preferences

#### Template Architecture Overhaul (January 2025)
- ✅ **Nunjucks Migration**: Converted all pages from Markdown (.md) to Nunjucks (.njk) templates
- ✅ **Empty Tag Elimination**: Completely eliminated empty `<p></p>` tags by preventing unwanted Markdown processing
- ✅ **Clean HTML Output**: Achieved semantic, properly formatted HTML without markup artifacts
- ✅ **Selective Markdown Usage**: Markdown now only used for specific content sections in DecapCMS components
- ✅ **Template Consistency**: All pages now use pure HTML/Nunjucks for maximum control

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

### Future Enhancements & Strategic Roadmap

#### Phase 1: Dynamic Content Management
- **✅ DecapCMS Integration**: Component-based headless CMS implementation
  - ✅ Individual policy components (Code of Conduct, Cancellation, etc.)
  - ✅ Program data structure (Learn To Play, Bandstarter, Show Ready, Tour)
  - ✅ Pricing information management (Individual lessons, Recording services)
  - ✅ Site configuration and contact information
  - 🔄 Template integration for dynamic page components
  - 📋 Blog/news section structure (configured but unused)
  - 📋 Image and media management capabilities
- **Form Enhancement**: Replace static contact forms with dynamic submission handling
  - Student inquiry forms with automated email responses
  - Program registration and waitlist management
  - Contact form submissions to database/CRM integration

#### Phase 2: Student Management System
- **User Authentication**: Student and instructor login system
  - Secure user accounts with password reset functionality
  - Role-based access (students, instructors, admin)
  - OAuth integration (Google, Facebook login options)
- **Student Portal**: Personalized dashboard for enrolled students
  - Schedule viewing and lesson booking
  - Progress tracking and practice logs
  - Resource library (tabs, chord charts, backing tracks)
  - Communication tools with instructors
- **Instructor Dashboard**: Tools for music educators
  - Student roster and progress tracking
  - Lesson planning and resource sharing
  - Schedule management and availability setting

#### Phase 3: E-commerce & Payment Integration
- **Payment Processing**: Secure online payments for lessons and programs
  - Stripe integration for credit card processing
  - Recurring payment options for ongoing lessons
  - Package deals and promotional pricing
  - Invoice generation and payment tracking
- **Online Store**: Merchandise and digital products
  - Rock school branded merchandise
  - Digital lesson packages and courses
  - Sheet music and tablature downloads
  - Gift certificates and vouchers

#### Phase 4: Advanced Learning Features
- **Learning Management System (LMS)**: Structured course delivery
  - Progressive skill-based curriculum
  - Video lessons with progress tracking
  - Interactive exercises and quizzes
  - Achievement badges and certificates
- **Community Features**: Social learning platform
  - Student forums and discussion boards
  - Practice group formation and collaboration
  - Performance video sharing and feedback
  - Event coordination and band matching

#### Phase 5: Business Intelligence & Analytics
- **Advanced Analytics**: Data-driven business insights
  - Student retention and engagement metrics
  - Revenue tracking and financial reporting
  - Marketing campaign effectiveness
  - Instructor performance analytics
- **Customer Relationship Management**: Comprehensive CRM integration
  - Lead tracking and conversion optimization
  - Automated follow-up sequences
  - Student lifecycle management
  - Referral program tracking

#### Phase 6: Mobile & Progressive Web App
- **Native Mobile Experience**: Enhanced mobile capabilities
  - Push notifications for lessons and events
  - Offline content access for students
  - Mobile-optimized practice tools
  - Camera integration for progress videos
- **Progressive Web App Features**:
  - Installable web app experience
  - Background sync for offline functionality
  - Push notifications and engagement
  - Enhanced performance and caching

#### Technical Implementation Considerations

**Backend Infrastructure**:
- **Database**: PostgreSQL or MongoDB for user and content data
- **API Layer**: Node.js/Express or Python/Django REST framework
- **Authentication**: JWT tokens with refresh token rotation
- **File Storage**: AWS S3 or Cloudinary for media assets
- **Email Service**: SendGrid or Mailgun for transactional emails

**Security & Compliance**:
- **PCI DSS Compliance**: For payment card data security
- **GDPR/CCPA Compliance**: User data privacy and consent management
- **Security Headers**: CSP, HSTS, and other protective measures
- **Data Encryption**: At-rest and in-transit encryption
- **Regular Security Audits**: Vulnerability assessments and penetration testing

**Performance & Scalability**:
- **CDN Implementation**: Global content delivery for media files
- **Database Optimization**: Query optimization and indexing strategies
- **Caching Layers**: Redis for session management and frequently accessed data
- **Load Balancing**: Horizontal scaling for increased traffic
- **Monitoring**: Application performance monitoring (APM) tools

#### Migration Strategy

**Phase Transition Plan**:
1. **Static to Dynamic**: Gradual conversion maintaining existing functionality
2. **Content Migration**: Automated tools for moving existing content to CMS
3. **User Data Import**: Secure migration of any existing customer data
4. **Testing Environment**: Comprehensive staging environment for each phase
5. **Rollback Plans**: Safe deployment with quick rollback capabilities

**Technology Stack Evolution**:
- **Current**: Eleventy (11ty) + GitHub Pages + Static HTML/CSS
- **Phase 1**: Eleventy + DecapCMS + Netlify/Vercel + Form handling
- **Phase 2**: Node.js/Express + Database + Authentication system
- **Phase 3**: Full-stack application with payment integration
- **Future**: Microservices architecture with API-first approach

**Development Priorities**:
1. Maintain current site functionality throughout all phases
2. Ensure zero downtime during migrations
3. Preserve SEO rankings and site performance
4. Maintain accessibility standards across all new features
5. Keep development and operational costs reasonable for small business

This roadmap transforms Planet of Sound from a static informational site into a comprehensive music education platform while maintaining its current strengths in accessibility, performance, and user experience.
