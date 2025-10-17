# Jaipur Itinerary PWA

A Progressive Web App for your 3-day Jaipur trip (November 22-24, 2025).

## Features

- ✅ Installable on iPhone and other devices
- ✅ Works offline after first load
- ✅ Responsive design
- ✅ Optimized for mobile viewing

## Deployment Instructions for Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd jaipur_pwa
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - What's your project's name? **jaipur-itinerary** (or any name you prefer)
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

5. Your app will be deployed! Vercel will provide you with a URL.

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Click "Import" next to your GitHub repository (if you've pushed the code to GitHub)
   - OR -
   Upload the entire `jaipur_pwa` folder directly by dragging and dropping
4. Configure project settings:
   - Framework Preset: **Other**
   - Root Directory: **./jaipur_pwa** (if you uploaded the parent folder)
   - Build Command: Leave empty
   - Output Directory: Leave empty
5. Click "Deploy"

### Option 3: Deploy via GitHub

1. Create a new repository on GitHub
2. Push the `jaipur_pwa` folder contents to the repository:
   ```bash
   cd jaipur_pwa
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and import the repository
4. Vercel will automatically detect the settings and deploy

## Installing on iPhone

1. Once deployed, open the Vercel URL in Safari on your iPhone
2. Tap the Share button (square with arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Jaipur Trip" or whatever you prefer
5. Tap "Add"

The app will now appear on your home screen like a native app!

## Files Included

- `index.html` - Main HTML file
- `itinerary.html` - Converted itinerary content
- `style.css` - Styling
- `manifest.json` - PWA manifest
- `service-worker.js` - Service worker for offline functionality
- `icons/` - App icons in various sizes

## Customization

To update the itinerary content, edit the `itinerary.html` file and redeploy.

Enjoy your trip to Jaipur! 🇮🇳


