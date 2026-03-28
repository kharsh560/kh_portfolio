# Kumar Harsh - Portfolio Website

A modern, responsive portfolio website built with Next.js and shadcn/ui components, featuring a clean design inspired by contemporary developer portfolios.

## Features

- **Modern Design**: Clean, minimalist aesthetic with dark mode support
- **Fully Responsive**: Optimized for all device sizes
- **Dynamic Content**: All portfolio data is managed through JSON files for easy updates
- **Modular Components**: Well-organized, reusable React components
- **Built with**:
  - Next.js 13+ (App Router)
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - Lucide React icons

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Updating Portfolio Content

All portfolio content can be easily updated by modifying the `data/portfolio.json` file. This file contains:

### 1. Profile Information
Update your name, title, description, email, resume URL, and social media links:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "subtitle": "Your Subtitle",
    "description": "Your description...",
    "email": "your@email.com",
    "resumeUrl": "link-to-resume",
    "socials": [...]
  }
}
```

### 2. Skills & Tech Stack
Add or modify your skills by category:

```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["HTML, CSS", "JavaScript", "React"]
    }
  ]
}
```

### 3. Experience
Add your work experience:

```json
{
  "experience": [
    {
      "id": 1,
      "role": "Your Role",
      "company": "Company Name",
      "duration": "Start -> End",
      "responsibilities": ["Description 1", "Description 2"]
    }
  ]
}
```

### 4. Achievements
Showcase your achievements:

```json
{
  "achievements": [
    {
      "id": 1,
      "title": "Achievement Title",
      "description": "Description...",
      "link": "optional-link"
    }
  ]
}
```

### 5. Projects
Add your projects with images and links:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Brief description",
      "image": "image-url",
      "tech": ["Tech1", "Tech2"],
      "liveUrl": "deployed-url",
      "githubUrl": "github-repo-url"
    }
  ]
}
```

### 6. Blog Posts
Add blog entries:

```json
{
  "blogs": [
    {
      "id": 1,
      "date": "Date",
      "title": "Blog Title",
      "content": "Blog content..."
    }
  ]
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section with profile
│   ├── Experience.tsx      # Experience section
│   ├── Achievements.tsx    # Achievements section
│   ├── Projects.tsx        # Projects/Portfolio section
│   ├── Blog.tsx            # Blog section with navigation
│   ├── Footer.tsx          # Footer with contact info
│   └── ui/                 # shadcn/ui components
├── data/
│   └── portfolio.json      # All portfolio content (EDIT THIS!)
├── lib/
│   └── utils.ts            # Utility functions
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Colors
Edit the color scheme in `app/globals.css` by modifying CSS variables in the `:root` and `.dark` selectors.

### Typography
The portfolio uses Inter font. You can change this in `app/layout.tsx`.

### Components
All components are in the `components/` directory and can be customized individually.

## Important Notes

- **Data Management**: Simply update `data/portfolio.json` to change content across the entire site
- **Images**: Use external image URLs or add images to the `public/` folder
- **No Code Changes Needed**: For content updates, you only need to edit the JSON file
- **Type Safety**: The project uses TypeScript for better development experience

## License

This portfolio template is open source and available for personal use.
