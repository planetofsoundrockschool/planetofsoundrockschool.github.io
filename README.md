# Planet of Sound Rock School Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/08430ece-6bdd-4a29-9af2-68dc02d5ea6a/deploy-status)](https://app.netlify.com/projects/planetofsoundrockschool/deploys)

A modern, professional website for Planet of Sound Rock School - a mentorship-based music education program in London, Ontario. Built with Eleventy (11ty) and deployed on Netlify with a headless CMS for easy content management.

## 🌐 Live Websites

**Production**: [planetofsoundrockschool.netlify.app](https://planetofsoundrockschool.netlify.app)  
**Development**: [planetofsoundrockschool.github.io](https://planetofsoundrockschool.github.io) (GitHub Pages)

## 🎵 About Planet of Sound Rock School

Planet of Sound Rock School offers a unique four-tier program system:
- **Learn To Play**: Foundation skills for beginners
- **Bandstarter**: Collaborative music-making and band dynamics
- **Show Ready**: Performance preparation and live show skills
- **Tour**: Professional touring readiness and industry knowledge

## 🛠️ Technology Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Hosting & Deployment**: [Netlify](https://netlify.com)
- **Content Management**: [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- **Authentication**: GitHub OAuth via Netlify
- **Styling**: Bootstrap 5 + Custom CSS
- **Version Control**: Git + GitHub
- **Languages**: HTML, CSS, JavaScript, Nunjucks templates

## 🚀 Features

### 🎨 **User Experience**
- Fully responsive design (mobile-first)
- Fast loading with static site generation
- SEO optimized with semantic HTML
- Accessibility focused (WCAG guidelines)
- Progressive enhancement approach

### 🔐 **Content Management**
- Repository-based access control
- Real-time permission validation
- User-friendly visual editor
- Media library for images
- Form handling via Netlify

### 🌐 **Development & Deployment**
- **Dual deployment strategy**: 
  - **Netlify** (`coming-soon` branch): Live production site with coming-soon page
  - **GitHub Pages** (`main` branch): Development site for full Eleventy build
- **GitHub Actions**: Automated Eleventy builds on push to main
- **PR-based development workflow** with automatic previews
- **Environment-aware configurations** for different deployment targets
- **Continuous deployment** with build status monitoring

#### Deployment Strategy

**Production Site (Netlify)**
- Branch: `coming-soon` 
- URL: [planetofsoundrockschool.netlify.app](https://planetofsoundrockschool.netlify.app)
- Purpose: Live coming-soon page with newsletter signup
- Deployment: Automatic on push to `coming-soon` branch

**Development Site (GitHub Pages)**  
- Branch: `main`
- URL: [planetofsoundrockschool.github.io](https://planetofsoundrockschool.github.io)
- Purpose: Full Eleventy site development and testing
- Deployment: GitHub Actions on push to `main` branch

## 📁 Project Structure

```
├── src/                    # Source files
│   ├── _data/             # Global data files (JSON)
│   ├── _includes/         # Reusable components
│   ├── _layouts/          # Page templates
│   ├── admin/             # CMS configuration
│   ├── assets/            # Images and static files
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── *.md               # Content pages (Markdown)
├── _site/                 # Generated site (build output)
├── .eleventy.js           # Eleventy configuration
├── netlify.toml           # Netlify deployment config
├── package.json           # Dependencies and scripts
└── DEVELOPMENT_WORKFLOW.md # Development guide
```

## 🏗️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- GitHub CLI (recommended)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/planetofsoundrockschool/planetofsoundrockschool.github.io.git
cd planetofsoundrockschool.github.io

# Install dependencies
npm install

# Start development server
npm run dev
# Site will be available at http://localhost:8080
```

### Available Scripts
```bash
npm run dev     # Start development server with live reload
npm run build   # Build for production
npm start       # Start development server (alias for dev)
```

### Development Workflow

**Important**: All changes should go through Pull Requests with preview testing.

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Create PR: `gh pr create --title "Your Feature" --body "Description"`
4. Test preview deployment automatically provided by Netlify
5. Merge when ready

📖 **Full workflow guide**: [DEVELOPMENT_WORKFLOW.md](./DEVELOPMENT_WORKFLOW.md)

## 🔒 Content Management System (CMS)

### Access
- **CMS URL**: [planetofsoundrockschool.netlify.app/admin](https://planetofsoundrockschool.netlify.app/admin)
- **Authentication**: GitHub OAuth
- **Permissions**: Repository collaborators with Write+ access only

### Content Types
- **Main Pages**: Homepage, About, Programs, Pricing, etc.
- **Site Settings**: Business information, contact details
- **Program Data**: Structured program information
- **Pricing Data**: Service rates and packages
- **Blog Posts**: Future content marketing

### Access Control
- Repository-based permissions (GitHub collaborators)
- Real-time permission validation
- Persistent error messages for unauthorized users
- No open registration - invite-only access

📖 **Full CMS guide**: [CMS_ACCESS_CONTROL_GUIDE.md](./CMS_ACCESS_CONTROL_GUIDE.md)

## 🌍 Deployment

### Production Deployment
- **Trigger**: Push/merge to `main` branch
- **URL**: [planetofsoundrockschool.netlify.app](https://planetofsoundrockschool.netlify.app)
- **Build Command**: `npm run build`
- **Publish Directory**: `_site`

### Preview Deployments
- **Trigger**: Any Pull Request
- **URL**: `deploy-preview-[PR-NUMBER]--planetofsoundrockschool.netlify.app`
- **Features**: Full site functionality with preview banner
- **Duration**: Available until PR is merged/closed

### Build Status
- **Current Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/08430ece-6bdd-4a29-9af2-68dc02d5ea6a/deploy-status)](https://app.netlify.com/projects/planetofsoundrockschool/deploys)
- **Build Logs**: Available in Netlify dashboard
- **Deploy History**: Full deployment history and rollback options

## 📊 Features & Integrations

### Forms
- Contact form with Netlify form handling
- Newsletter signup with spam protection
- Automatic email notifications

### SEO & Performance
- Semantic HTML structure
- OpenGraph and Twitter Card meta tags
- Optimized images and assets
- Fast CDN delivery via Netlify

### Security
- HTTPS by default
- Security headers configured
- Environment variable protection
- Repository-based CMS access control

## 📝 Content Editing

### For Content Editors
- Use the CMS at `/admin/` for all content updates
- No code knowledge required
- Visual editor with live preview
- Media library for image management

### For Developers
- Follow the PR workflow for all technical changes
- Use semantic commit messages
- Test preview deployments before merging
- Update documentation when adding features

## 🆘 Support & Troubleshooting

### Common Issues
- **CMS Access Denied**: Check GitHub repository permissions
- **Build Failures**: Check Netlify deploy logs
- **Content Not Updating**: Allow 2-3 minutes for deployment

### Getting Help
1. Check the [Development Workflow Guide](./DEVELOPMENT_WORKFLOW.md)
2. Review previous Pull Requests for examples
3. Check Netlify deploy logs for build issues
4. Contact repository administrator for access issues

## 📄 License

This project is private and proprietary to Planet of Sound Rock School.

## 🤝 Contributing

This is a private repository for Planet of Sound Rock School. Access is limited to authorized collaborators.

For authorized contributors:
1. Follow the [Development Workflow](./DEVELOPMENT_WORKFLOW.md)
2. Use descriptive commit messages
3. Test all changes in preview deployments
4. Request reviews for significant changes

---

**Last Updated**: December 2024  
**Maintained by**: Planet of Sound Rock School development team
