# CV Project

Online CV website with Decap CMS for content management.

## 🚀 Features

- Pure HTML, CSS, JavaScript CV website
- Content management via Decap CMS
- Supports 2 environments:
  - **Development**: Direct local file editing
  - **Production**: Automatic commit and push to Git via GitHub OAuth

## 📁 Project Structure

```
.
├── admin/                  # Decap CMS
│   ├── index.html         # Admin UI
│   └── config.yml         # CMS configuration
├── api/
│   └── data.json          # CV Data (managed by CMS)
├── assets/                # Images and media
├── css/                   # Stylesheets
├── js/                    # JavaScript files
└── index.html             # Homepage
```

## 🛠️ Using Decap CMS

### Development (Local)

1. **Run automated script** (Windows):

   ```bash
   start-local-cms.bat
   ```

2. **Or run manually**:

   ```bash
   # Terminal 1: HTTP Server
   npx http-server -p 8080 -c-1

   # Terminal 2: Decap Server
   npx decap-server
   ```

3. **Access CMS**: http://localhost:8080/admin

4. **Edit**: All changes will be saved directly to the `api/data.json` file locally

### Production (GitHub OAuth)

**Step 1: Update config.yml**

- Open [admin/config.yml](admin/config.yml)
- Change `repo: your-username/cv` to your repository (e.g., `thanhnd4869/cv`)

**Step 2: Create GitHub OAuth App**

1. Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
2. Fill in the information:
   - **Application name**: CV Admin
   - **Homepage URL**: `https://your-site.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Save the **Client ID** and **Client Secret**

**Step 3: Configure on Netlify**

1. Go to Netlify Dashboard → Site settings → Access control → OAuth
2. Click "Install provider" → select GitHub
3. Enter **Client ID** and **Client Secret** from step 2
4. Save

**Step 4: Use CMS**

- Access: https://your-site.netlify.app/admin
- Click "Login with GitHub"
- Authorize the application
- All changes will be automatically committed and pushed to GitHub!

### Alternative: Self-hosted (without Netlify)

If you're not deploying on Netlify, you can self-host the OAuth server or use services like:

- [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- Cloudflare Workers
- Vercel Serverless Functions

## 📝 Content Management

CMS allows editing:

- ✅ Personal Information
- ✅ Objective
- ✅ Education
- ✅ Work Experience
- ✅ Projects
- ✅ Skills
- ✅ Certifications
- ✅ Interests

## ⚙️ Requirements

- **Node.js** (to run npx commands in development)
- No packages need to be installed (use npx directly)
- Modern browser (Chrome, Firefox, Edge...)
- **GitHub account** (for production authentication)

## 📚 Documentation

- [Decap CMS Docs](https://decapcms.org/docs/)
- [GitHub Backend](https://decapcms.org/docs/github-backend/)
- [Authentication Backends](https://decapcms.org/docs/authentication-backends/)
