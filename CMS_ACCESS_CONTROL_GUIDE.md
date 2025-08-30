# CMS Access Control Guide

## Overview
The Planet of Sound Rock School website uses **Decap CMS** (formerly Netlify CMS) with **GitHub OAuth authentication** to manage content. Access control is now enforced through GitHub repository permissions rather than open registration.

## How Access Control Works

### 1. GitHub Repository Permissions
Access to the CMS is controlled through GitHub repository collaborator permissions. Only users with **write access or higher** to the repository can log in and edit content.

### 2. Permission Levels
- **Admin**: Full repository access + CMS access
- **Write**: Can push to repository + CMS access
- **Read**: Can view repository only (NO CMS access)
- **No access**: Cannot see repository or access CMS

### 3. Technical Implementation
The CMS now includes client-side permission checking that:
- Verifies the user has write access to the repository
- Blocks unauthorized users with clear error messages
- Uses GitHub's API to validate permissions in real-time

## Managing CMS Access

### Adding New Users
1. Go to the GitHub repository: `https://github.com/planetofsoundrockschool/planetofsoundrockschool.github.io`
2. Click **Settings** tab
3. Click **Manage access** in the left sidebar
4. Click **Invite a collaborator**
5. Enter the user's GitHub username or email
6. Select permission level:
   - Choose **Write** for CMS access
   - Choose **Admin** for full repository management
7. Send the invitation

### Removing Users
1. Go to repository **Settings** → **Manage access**
2. Find the user in the collaborators list
3. Click **Remove** next to their name
4. Confirm the removal

### Checking Current Access
- View all collaborators at: **Settings** → **Manage access**
- Users must accept GitHub invitations before gaining access
- CMS access is immediate once repository access is granted

## User Login Process

### For Authorized Users
1. Visit: `https://planetofsoundrockschool.netlify.app/admin/`
2. Click **Login with GitHub**
3. Authorize the Netlify application if prompted
4. CMS interface loads automatically

### For Unauthorized Users
1. Visit the CMS admin page
2. Click **Login with GitHub**
3. See error message: "Access denied: You do not have write access to this repository"
4. Contact repository admin to request access

## Configuration Details

### Backend Configuration
The CMS is configured with:
```yaml
backend:
  name: github
  repo: planetofsoundrockschool/planetofsoundrockschool.github.io
  branch: main
  auth_endpoint: https://api.netlify.com/api/v1/oauth/github
  site_domain: planetofsoundrockschool.netlify.app
```

### OAuth Setup
- Uses Netlify's OAuth proxy for GitHub authentication
- Requires Netlify site to be connected to the GitHub repository
- No additional OAuth app setup needed on GitHub

## Best Practices

### Security
- Only invite trusted users as collaborators
- Use **Write** permission for content editors (not Admin unless needed)
- Regularly review collaborator list
- Remove users who no longer need access

### User Management
- Keep a list of who has access and why
- Use descriptive commit messages when managing access
- Consider using GitHub teams for larger organizations

### Troubleshooting Access Issues

#### User Can't Log In
1. Verify they're a repository collaborator
2. Check they have **Write** or **Admin** permission (not just Read)
3. Ensure they've accepted the GitHub invitation
4. Have them try logging in again

#### Permission Errors
1. Check GitHub repository permissions
2. Verify the user's GitHub account is active
3. Ensure Netlify OAuth is properly configured
4. Check browser console for detailed error messages

## Migration Notes
- **Previous system**: Netlify Identity (deprecated)
- **Current system**: GitHub OAuth with repository-based access control
- **Benefit**: More secure, easier to manage, future-proof

## Support
For technical issues or access requests:
1. Contact the repository administrator
2. Check GitHub's collaboration documentation
3. Review Decap CMS documentation for advanced configuration

---

**Last Updated**: December 2024
**Configuration Version**: GitHub OAuth with Repository Permissions
