# Developer Portfolio

A modern, static portfolio website built with Next.js showcasing your skills, experience, projects, and achievements.

## Features

- 📱 Fully responsive design
- 🎨 Clean, professional dark theme
- 📊 Data-driven content from JSON files
- 🚀 Fast and optimized
- 📧 Contact via WhatsApp and Email
- 🎯 Sections for:
  - About/Hero
  - Skills & Technologies
  - Work Experience
  - Projects
  - Education
  - Awards & Recognition
  - Testimonials
  - Contact

## Setup

1. **Update your data**: Edit the JSON files in the `/data` folder with your information:
   - `profile.json` - Your name, bio, and social links
   - `skills.json` - Your technical skills
   - `experience.json` - Work experience
   - `projects.json` - Your projects
   - `education.json` - Educational background
   - `awards.json` - Awards and recognition
   - `testimonials.json` - Client/colleague testimonials

2. **Configure environment variables**:
   - Copy `.env.example` to `.env.local`
   - Update with your WhatsApp number and email:
     \`\`\`
     NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
     NEXT_PUBLIC_EMAIL=your.email@example.com
     \`\`\`

3. **Customize the theme** (optional):
   - Edit `app/globals.css` to change colors
   - Current theme uses a professional dark blue palette

## Deployment

This portfolio can be deployed to Vercel with one click using the "Publish" button in v0, or you can:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Customization

- **Colors**: Edit the CSS variables in `app/globals.css`
- **Content**: Update JSON files in `/data` folder
- **Images**: Replace placeholder images with your own
- **Sections**: Add/remove sections in `app/page.tsx`

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Lucide Icons
- shadcn/ui components
