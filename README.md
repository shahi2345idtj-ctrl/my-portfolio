# Shahid — Personal Portfolio Website

A modern, responsive personal portfolio website for **Shahid**, a first-year B.Tech Computer Science & Engineering (Artificial Intelligence) student at **Thejus Engineering College**, Thrissur, Kerala (affiliated with APJ Abdul Kalam Technological University - KTU).

Designed to closely match the dark-themed reference design with a near-black palette, subtle grid background, floating pill navbar, vibrant orange (`#F7931E`) accents, micro-interactions, and floating animated accents.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Outfit (Headings) & Inter (Body)

---

## 🎨 Visual Design Language

- **Background**: Near-black (`#0A0A0A`) with a subtle 40px grid-line pattern and radial amber spotlight.
- **Accent Color**: Vibrant orange (`#F7931E`), matching the reference CTA buttons, active links, and highlights.
- **Card & Nav Styling**: Dark gray (`#141414`) containers, 1px subtle borders (`white at 8% opacity`), 24px-32px rounded corners, and soft orange glow on hover.
- **Decorative Accents**: Floating colored dots (emerald green, sky blue ring, rose pink dot) around the hero portrait card.
- **Accessibility**: Semantic HTML5 landmarks, keyboard focus rings (`outline-accent`), contrast compliance, and full `prefers-reduced-motion` support.

---

## 📁 Project Structure

```text
├── data/
│   └── content.ts             # ⭐️ SINGLE SOURCE OF TRUTH (All personal info, projects, skills, blogs)
├── public/
│   ├── favicon.svg            # Custom orange grid favicon
│   ├── shahid.jpg             # Hero profile photo placeholder
│   └── projects/              # Project thumbnail previews
├── src/
│   ├── app/
│   │   ├── globals.css        # Dark theme, grid pattern, custom scrollbar & animations
│   │   ├── layout.tsx         # Root layout, Google Fonts (Outfit & Inter), SEO & OG meta tags
│   │   └── page.tsx           # Home page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx         # Floating pill navbar with scroll-spy & mobile drawer
│   │   ├── Hero.tsx           # Two-column hero with chat bubble, badge & floating dots
│   │   ├── TechStackStrip.tsx # "My Tech Stack" with auto-scrolling marquee on mobile
│   │   ├── Projects.tsx       # Project grid with tags, live links, GitHub & detail modal
│   │   ├── About.tsx          # Bio, Thejus Engineering College card, stats & timeline
│   │   ├── Skills.tsx         # Grouped chips (Programming, Web, AI/ML, Tools) with levels
│   │   ├── Blog.tsx           # 3 learning journey cards with article read modal
│   │   ├── Contact.tsx        # Validated contact form, toast alert & copy email button
│   │   └── Footer.tsx         # Minimal footer with copyright & back-to-top button
│   └── lib/
│       └── utils.ts           # Tailwind merge helper
├── tailwind.config.ts         # Theme colors, keyframes & font configurations
└── package.json
```

---

## ✏️ How to Customize

### 1. Update Personal Info & Projects (`data/content.ts`)
Everything is centralized in `data/content.ts`. Simply open this file to update:
- Your name, bio, college, university, and location
- Social profile links (GitHub, LinkedIn, Instagram, Email)
- Projects (titles, descriptions, tech stack tags, demo and repository URLs)
- Technical skills and proficiency levels
- Educational timeline entries
- Blog articles / learning notes

### 2. Replace Your Photo
1. Rename your photo to `shahid.jpg`.
2. Place it directly inside the `public/` directory:
   ```text
   public/shahid.jpg
   ```
3. The hero section will automatically display your picture inside the rounded organic frame with the "Hi, I'm Shahid" chat bubble and "B.Tech CSE (AI) · Year 1" status badge!

---

## 💻 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🚢 Deploying to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shahid Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with an SSL certificate and global CDN!

