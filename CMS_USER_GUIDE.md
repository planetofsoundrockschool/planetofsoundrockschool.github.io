# Content Management System User Guide
## Planet of Sound Rock School Website

This guide explains how to update your website content without touching any code!

## 🚀 Getting Started

### Access Your CMS
1. Go to your website URL + `/admin` (e.g., `https://yoursite.netlify.app/admin`)
2. Click "Login with Netlify Identity" 
3. Use your email/password to log in

### First-Time Setup (Done by developer)
- Netlify Identity needs to be enabled in your Netlify dashboard
- You'll be invited as a CMS user via email
- Git Gateway needs to be enabled for the CMS to work

## 📝 What You Can Edit

### 1. **Main Pages** (Most Common)
Edit the content on all your main pages:
- **Home Page** - Hero text, program descriptions, calls-to-action
- **About Page** - Your story, mission, why choose us
- **Programs Page** - Program descriptions and details  
- **Pricing Page** - All pricing information
- **Contact Page** - Contact information and forms
- **Recording Services** - Recording service details
- **Referrals** - Referral program information

### 2. **Site Settings** (Business Info)
Update key business information that appears site-wide:
- Site title and description
- Contact email
- Instagram handle  
- Location
- Phone number

### 3. **Program Information** (Structured Data)
Edit individual program details:
- Program names and descriptions
- Pricing for each program
- What students will learn (curriculum)
- Program duration

### 4. **Pricing Information**
Update pricing for:
- Individual lesson types
- Recording service rates
- Add-on services

### 5. **Blog Posts** (Future)
Create new blog posts when you're ready to add content marketing.

## ✏️ How to Make Changes

### Editing a Page
1. Click **"Main Pages"** in the CMS
2. Select the page you want to edit (e.g., "Home Page")
3. Make your changes in the editor
4. Click **"Save"** (saves as draft)
5. Click **"Publish"** to make changes live

### The Editor Interface
- **Rich Text Editor**: Like a simplified Microsoft Word
- **Markdown Support**: For advanced formatting
- **Live Preview**: See how changes will look
- **Media Library**: Upload and manage images

### Publishing Changes
- **Save**: Creates a draft (not live yet)
- **Publish**: Makes changes live on your website
- **Unpublish**: Takes content offline
- **Duplicate**: Creates a copy to work from

## 🖼️ Managing Images

### Uploading Images
1. Click the **image icon** in any rich text field
2. Choose **"Upload"** from Media Library
3. Select your image file
4. Add alt text (for accessibility)
5. Click **"Choose selected"**

### Image Best Practices
- **Size**: Keep under 1MB for fast loading
- **Format**: JPG for photos, PNG for graphics
- **Names**: Use descriptive filenames
- **Alt Text**: Describe the image for screen readers

## 🔄 Workflow Tips

### Making Major Changes
1. **Plan first**: Know what you want to change
2. **Save often**: Don't lose your work
3. **Preview**: Check how it looks before publishing
4. **Test**: Visit the live site after publishing

### Emergency Changes
- Changes go live within 1-2 minutes of publishing
- If you make a mistake, you can quickly edit and republish
- All changes are version-controlled (can be reverted if needed)

### Working with Forms
- Don't edit the form HTML code directly
- Contact your developer to modify form fields
- You can edit the text around forms

## 🛟 Common Tasks

### Updating Prices
1. Go to **"Pricing Information"**
2. Select **"Individual Lessons"** or **"Recording Services Pricing"**
3. Edit the prices
4. Click **"Publish"**

### Changing Program Details
1. Go to **"Program Information"** 
2. Select the program to edit
3. Update description, price, or curriculum
4. Click **"Publish"**

### Updating Contact Information
1. Go to **"Site Settings"** → **"Site Configuration"**
2. Update email, Instagram, location, etc.
3. Click **"Publish"**
4. This updates the info everywhere on your site

### Adding a New Blog Post
1. Go to **"Blog Posts"**
2. Click **"New Blog Post"**
3. Add title, content, and publish date
4. Click **"Publish"**

## ⚠️ Important Notes

### What NOT to Edit
- Don't modify the **Layout** field (it should stay "base.njk")
- Don't change **Navigation Order** numbers unless you want to reorder the menu
- Be careful with the **Navigation Key** field

### Formatting Tips
- **Bold text**: `**bold text**` 
- **Italic text**: `*italic text*`
- **Links**: `[link text](https://example.com)`
- **Lists**: Use the toolbar buttons for easier formatting

### Getting Help
- Changes not appearing? Wait 2-3 minutes for deployment
- Broke something? Contact your developer - all changes can be reverted
- CMS not loading? Check your internet connection and try refreshing

## 🚀 Go Live Process

1. **Test locally**: Developer builds and tests
2. **Deploy to Netlify**: Automatic when code is pushed
3. **Enable Identity**: Netlify dashboard → Identity → Enable
4. **Enable Git Gateway**: Netlify dashboard → Identity → Services → Git Gateway
5. **Invite CMS user**: Netlify dashboard → Identity → Invite users
6. **First login**: Check email for invitation, set password
7. **Start editing**: Go to yoursite.com/admin and start updating content!

---

**Remember**: The CMS is your content editing tool. For design changes, new features, or technical issues, contact your developer. For content updates, you're all set to go solo! 🎸
