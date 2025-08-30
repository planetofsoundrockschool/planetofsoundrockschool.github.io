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
