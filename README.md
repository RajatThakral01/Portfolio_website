# Rajat Thakral | AI & Data Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility--first-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-Apache--2.0-A6ACAF)](LICENSE)

> A modern, interactive portfolio website showcasing AI automation projects, LLM pipelines, and agentic workflows with stunning animations, AI-powered chat, and responsive design.

---

## 🚀 Live Demo

Visit the deployed portfolio: **[AI & Data Portfolio](https://rajatthakral.vercel.app/)**

---

## 📸 Preview

### Hero Section
- **Full viewport height** with parallax scroll animations
- **Large animated gradient title** featuring "RAJAT" with glowing orb effects
- **Animated marquee banner** displaying key skills: "AI AUTOMATION • DATA ENGINEERING •"
- **Status badge** showing focus areas and location

### Key Sections
- **Projects Section** - Interactive 3-column grid with project cards, hover animations, and detailed project modals
- **Experience Section** - Professional timeline with hover effects and location/period badges
- **Skills Section** - 4 categories of technical expertise with glassmorphic cards
- **AI Chat Widget** - Gemini-powered AI assistant for visitor interactions
- **Custom Cursor** - Animated desktop cursor with "View" indicator on interactive elements
- **Fluid Background** - Animated gradient blobs, starfield, and grain texture overlay

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 19.2.0 |
| **Language** | TypeScript | 5.8.2 |
| **Build Tool** | Vite | 6.2.0 |
| **Styling** | Tailwind CSS | Latest (CDN) |
| **Animations** | Framer Motion | 12.23.24 |
| **Icons** | Lucide React | 0.553.0 |
| **AI Features** | Google Genai | 1.29.0 |
| **Fonts** | Google Fonts | Space Grotesk, Syncopate |
| **Node.js** | Node.js | 18+ |

---

## ✨ Features

- 🎯 **AI-Powered Chat** - Gemini API integration with RAJ AI assistant (RAG-capable system)
- 🖱️ **Custom Cursor** - Animated desktop cursor with smooth spring physics and hover states
- 🌊 **Fluid Background** - 3 animated gradient blobs, starfield, grain texture, and vignette effects
- ✨ **Gradient Animations** - Flowing gradient text that showcases expertise and skills
- 🎬 **Framer Motion** - Scroll-linked parallax, spring physics, staggered animations, and page transitions
- 🎨 **Responsive Design** - Mobile-first approach with adaptive layouts (1/2/3 column grids)
- 📱 **Mobile Menu** - Full-screen animated navigation overlay for touch devices
- 🗂️ **Project Showcase** - Interactive project cards with modal detail views and carousel navigation
- ⌨️ **Keyboard Navigation** - Arrow keys to navigate projects, Escape to close modal
- 🔗 **Smooth Scrolling** - Custom scroll behavior with offset for fixed header
- 📊 **Experience Timeline** - Styled cards with hover animations and location badges
- 💼 **Skills Grid** - 4 categories (AI & LLM, Data & Analytics, Engineering, Frontend) with categories

---

## 📁 Project Structure

```
portfolio_website/
├── index.html              # Main HTML entry point with Tailwind CDN and Google Fonts
├── index.tsx               # React app entry point with StrictMode
├── App.tsx                 # Main app component - layout, sections, modals, and navigation
├── types.ts                # TypeScript interfaces (Project, Experience, ChatMessage)
├── metadata.json           # App metadata (name, description)
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration with environment variables
├── .env.example            # Environment variable template
├── .env / .env.local       # Local environment variables (GEMINI_API_KEY)
├── .gitignore              # Git ignore rules
│
├── components/
│   ├── FluidBackground.tsx     # Animated gradient blobs, starfield, grain, vignette
│   ├── GradientText.tsx        # Animated flowing gradient text component
│   ├── CustomCursor.tsx        # Custom desktop cursor with spring physics
│   ├── ProjectCard.tsx         # Individual project card with hover effects
│   └── AIChat.tsx              # AI chat widget with Gemini integration
│
└── services/
    └── geminiService.ts        # Gemini API initialization, message handling, error states
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- **Google Gemini API Key** (get one at [Google AI Studio](https://ai.google.dev))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RajatThakral01/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the example file:
     ```bash
     cp .env.example .env.local
     ```
   - Add your Gemini API key:
     ```env
     GEMINI_API_KEY=your_actual_gemini_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run lint
```

---

## 🔑 Environment Variables

### Required Variables

| Variable | Description | How to Get |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI chat functionality | [Google AI Studio](https://ai.google.dev) - Create API key after signing up |

### Example `.env.local`

```env
# Google Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev)
2. Click "Get API key" or "Create new API key"
3. Copy the generated API key
4. Paste it into your `.env.local` file as shown above

---

## 🌐 Deployment

### Deploy to Railway

This project is optimized for deployment on [Railway](https://railway.app).

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Railway**
   - Create a new project at [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway auto-detects the Vite build configuration

3. **Set Environment Variables**
   - In Railway dashboard, go to **Variables**
   - Add `GEMINI_API_KEY=your_key_here`

4. **Deploy**
   - Railway automatically deploys on push
   - View your live site at the provided Railway domain

### Deploy to Other Platforms

The site can also be deployed to:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist/` folder or connect Git
- **GitHub Pages** - Configure vite.config.ts with `base: '/portfolio_website/'`

---

## 📖 Portfolio Sections Overview

### 1. **Hero Section** 🦸
- Full viewport height with parallax scroll effect
- Large animated gradient title: "RAJAT"
- Pulsing status badge: "AI Automation • Jaipur, India"
- Animated marquee banner with key focus areas
- Engaging tagline about expertise

### 2. **Projects Section** 🎯
- Interactive 3-column grid (responsive: 1→2→3 columns)
- **3 Featured Projects:**
  1. **RecruitIQ** - AI Resume Screener with LLM Orchestration
  2. **AI Analytics Platform** - Agentic Automation with 6 modules
  3. **Diabetes Prediction** - ML pipeline for hospital readmission prediction
- Click any card to open detailed project modal
- Arrow buttons to navigate between projects
- Keyboard support: Arrow keys for navigation, Escape to close

### 3. **Experience Section** 📱
- Vertical timeline of professional roles
- **3 Experience Entries:**
  1. Data Analyst at Lata Software (May–Jul 2025)
  2. Consultant at YP Foundation (Sep 2024–Apr 2025)
  3. Growth Intern at Zomato (May–Jul 2024)
- Hover effects reveal location and role highlights
- Achievement bullets with animated indicators

### 4. **Skills Section** 💻
- 4-column grid of skill categories (responsive)
- **Categories:**
  - **AI & LLM** - Orchestration, RAG, Prompt Engineering, LangChain, APIs
  - **Data & Analytics** - ETL, SQL, Pandas, NumPy, XGBoost
  - **Engineering** - Python, FastAPI, Docker, CI/CD, Cloud Deployment
  - **Frontend** - React, TypeScript, Tailwind, Framer Motion, Responsive Design
- Glassmorphic cards with hover lift animations
- Skill tags within each category

### 5. **AI Chat Widget** 🤖
- Fixed bottom-right corner button
- Powered by Google Gemini 3.0 Flash
- Pre-trained with Rajat's portfolio context
- Supports questions about projects, skills, and experience
- Smooth animations and typing indicators
- Error handling for offline scenarios

### 6. **Navigation & Footer** 🔗
- Fixed header with responsive menu
- Desktop: Horizontal menu (Projects, Experience, Skills, Resume button)
- Mobile: Hamburger menu → full-screen overlay
- Footer with contact info and social links (GitHub, LinkedIn)
- Smooth scroll-to-section on menu clicks

---

## 🎨 Design System

### Color Palette
- **Primary Base**: Deep Indigo `#31326f`
- **Accent 1 - Mint**: `#a8fbd3` (highlights, glows)
- **Accent 2 - Teal**: `#4fb7b3` (interactive elements)
- **Accent 3 - Periwinkle**: `#637ab9` (gradient layers)
- **Text**: White and opacity-based hierarchy

### Typography
- **Headings** (h1/h2/h3): Syncopate (geometric, bold)
- **Body**: Space Grotesk (clean, modern)
- **Mono**: System monospace (code, dates)

### Animation Approach
- **Scroll Effects**: Parallax opacity, scale, and position transforms
- **Hover States**: Spring physics, color transitions, scale changes
- **Entrance Animations**: Staggered opacity and position
- **Continuous**: Blob movements (25-35s loops), text gradient shift (6s loop)

---

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
- Dev server on port 3000
- React plugin enabled
- Environment variables exposed to client
- Path alias: `@/` maps to project root
- ES2022 module target

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2022
- JSX: react-jsx
- Module: ESNext
- Strict module checking enabled
- Path aliases for clean imports

---

## 📝 Development Notes

### Performance Optimizations
- **Star field**: Reduced to 15 stars for smooth animations
- **Blur effects**: Optimized from 60px to 40px for performance
- **Will-change**: Applied to frequently animated elements
- **GPU acceleration**: `translateZ(0)` on motion elements
- **Image optimization**: Grayscale filters, responsive sizing

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Android)

### Accessibility Features
- Semantic HTML structure
- Image alt text on all project images
- Keyboard navigation (arrow keys, escape)
- Focus states on interactive elements
- Color contrast compliant
- Reduced motion alternative (browsers respecting prefers-reduced-motion)

---

## 🤝 Connect With Me

- **GitHub**: [@RajatThakral01](https://github.com/RajatThakral01)
- **LinkedIn**: [@rajat-thakral-067548204](https://linkedin.com/in/rajat-thakral-067548204)
- **Email**: 2004rajatthakral@gmail.com
- **Location**: Jaipur, Rajasthan, India

---

## 📜 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

```
SPDX-License-Identifier: Apache-2.0
```

---

## 🙏 Acknowledgments

- **Vite** for lightning-fast builds
- **Framer Motion** for elegant animations
- **Tailwind CSS** for utility-first styling
- **Google Gemini API** for AI chat capabilities
- **Lucide React** for beautiful icons

---

<div align="center">

**Made with ❤️ by Rajat Thakral**

⭐ If you find this portfolio inspiring, consider giving it a star!

</div>
