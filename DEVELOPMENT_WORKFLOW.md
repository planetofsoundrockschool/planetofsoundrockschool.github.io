# Development Workflow Guide
## Planet of Sound Rock School Website

This guide outlines the professional development workflow for making changes to the website using Pull Requests (PRs) and Netlify preview deployments.

## 🚀 Quick Start

### For Any Website Changes:
1. **Create a new branch**
2. **Make your changes** 
3. **Create a Pull Request**
4. **Test the preview deployment**
5. **Merge when ready**

## 📋 Detailed Workflow

### 1. Start a New Feature Branch
```bash
# Make sure you're on main and up-to-date
git checkout main
git pull origin main

# Create and switch to a new feature branch
git checkout -b feature/your-feature-name
# Examples:
# git checkout -b feature/update-pricing
# git checkout -b feature/new-blog-post
# git checkout -b fix/contact-form-bug
```

### 2. Make Your Changes
- Edit files as needed
- Test locally with `npm run dev`
- Commit changes with descriptive messages:

```bash
git add .
git commit -m "type: Brief description

More detailed explanation if needed
- What was changed
- Why it was changed
- Any important notes"
```

**Commit Types:**
- `feat:` - New features
- `fix:` - Bug fixes  
- `update:` - Content updates
- `style:` - Styling changes
- `docs:` - Documentation
- `refactor:` - Code improvements

### 3. Push Your Branch
```bash
git push origin feature/your-feature-name
```

### 4. Create a Pull Request
**Option A: GitHub CLI (Recommended)**
```bash
gh pr create --title "Brief PR Title" --body "Description of changes and why"
```

**Option B: GitHub Web Interface**
- Visit the repository on GitHub
- Click "Compare & pull request"
- Fill in title and description
- Create pull request

### 5. Test the Preview Deployment

#### What Happens Automatically:
- **Netlify builds a preview** within 2-3 minutes
- **Preview URL posted** in PR comments
- **Preview banner shows** on the preview site only
- **Production remains unchanged**

#### Testing Checklist:
- [ ] Preview URL loads correctly
- [ ] Your changes appear as expected
- [ ] Navigation still works
- [ ] Forms still work (if applicable)
- [ ] Mobile view looks good
- [ ] CMS still accessible at `/admin/`

### 6. Review and Merge
- **Review your own changes** on the preview
- **Request review** from team members if needed
- **Make additional commits** if changes needed
- **Merge when satisfied** (use "Squash and merge" for clean history)

### 7. Clean Up
```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete the feature branch
git branch -d feature/your-feature-name
```

## 🌐 Environment Overview

### **Production** 
- **URL**: `https://planetofsoundrockschool.netlify.app/`
- **Source**: `main` branch
- **Deploys**: Automatically when PRs are merged
- **CMS**: `https://planetofsoundrockschool.netlify.app/admin/`

### **Preview Deployments**
- **URL**: `https://deploy-preview-[PR-NUMBER]--planetofsoundrockschool.netlify.app/`
- **Source**: Any PR branch
- **Deploys**: Automatically on every push to PR branch
- **Features**: Shows preview banner, full site functionality

### **Local Development**
- **URL**: `http://localhost:8080` (or custom port)
- **Command**: `npm run dev`
- **Features**: Live reload, no preview banner

## 🛠️ Common Workflows

### Content Updates
```bash
git checkout -b update/pricing-changes
# Edit content files
git add .
git commit -m "update: Adjust pricing for 2025 programs"
git push origin update/pricing-changes
gh pr create --title "Update 2025 Program Pricing" --body "Adjusted pricing based on market analysis"
```

### Bug Fixes
```bash
git checkout -b fix/contact-form-validation
# Fix the issue
git add .
git commit -m "fix: Resolve email validation in contact form"
git push origin fix/contact-form-validation
gh pr create --title "Fix Contact Form Email Validation" --body "Resolves issue where valid emails were rejected"
```

### New Features
```bash
git checkout -b feature/student-gallery
# Build the feature
git add .
git commit -m "feat: Add student performance gallery

- New gallery page with photo uploads
- Integration with existing navigation
- Mobile-responsive design"
git push origin feature/student-gallery
gh pr create --title "Add Student Performance Gallery" --body "New section showcasing student performances with photo gallery"
```

## 📝 Best Practices

### Branch Naming
- `feature/description` - New functionality
- `fix/description` - Bug fixes
- `update/description` - Content updates
- `style/description` - Design/styling changes

### Commit Messages
- **Use imperative mood**: "Add feature" not "Added feature"
- **Be specific**: "Update pricing page" not "Update content"
- **Include context**: Why the change was made

### Pull Request Descriptions
- **What changed**: Brief summary of modifications
- **Why changed**: Business reason or problem solved
- **Testing notes**: How to verify the changes work
- **Screenshots**: For visual changes

### Testing
- **Always test the preview** before merging
- **Check mobile responsiveness**
- **Verify CMS functionality** if admin changes made
- **Test forms and interactive elements**

## ⚠️ Important Notes

### CMS Access Control
- Preview deployments have **same CMS access control** as production
- Only GitHub repository collaborators with Write+ permissions can access `/admin/`
- Test CMS functionality on preview URLs before merging

### Environment Variables
- Preview deployments inherit environment variables from Netlify
- `CONTEXT=deploy-preview` enables preview banner
- Local development uses `CONTEXT=development`

### Emergency Procedures
- **Urgent fixes**: Can push directly to main if critical
- **Rollbacks**: Use GitHub's revert functionality
- **Hotfixes**: Create PR from main, merge immediately after testing

## 🔧 Setup Commands

### One-time Setup
```bash
# Install GitHub CLI (if not already installed)
brew install gh
gh auth login

# Install dependencies
npm install
```

### Daily Commands
```bash
# Start development server
npm run dev

# Build for production (testing)
npm run build

# Create and switch to new branch
git checkout -b feature/branch-name

# Push current branch
git push origin $(git branch --show-current)

# Create PR from current branch
gh pr create

# List current PRs
gh pr list
```

## 📊 Workflow Benefits

### **Safety**
- ✅ Production never breaks from untested changes
- ✅ Preview testing catches issues before they go live
- ✅ Easy rollback if something goes wrong

### **Collaboration**
- ✅ Team can review changes before deployment
- ✅ Clear history of what changed and when
- ✅ Preview URLs for stakeholder review

### **Professional Development**
- ✅ Industry-standard workflow
- ✅ Clean commit history
- ✅ Proper change documentation

---

**Remember**: Every change goes through a PR with preview testing. This keeps the live site stable while allowing confident iteration and improvement.

**For questions**: Check this guide first, then review previous PRs for examples of good workflow practices.
