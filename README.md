# Edwin Peraza - Personal Portfolio

Welcome to my personal portfolio! This project showcases my skills, projects, and experience as a developer.

## 🔧 Technologies Used

- **Frontend:** [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org)
- **UI Enhancements:** Lottie animations, Radix UI, React Icons
- **Deployment:** [Vercel](https://vercel.com)
- **Backend Integrations:** Web3Forms for contact form submissions

## 📂 Project Structure

```plaintext
portfolio/
├── README.md                // Description of the project
├── components.json          // Configuration for reusable UI components
├── next.config.mjs          // Next.js configuration file
├── package.json             // Project dependencies and scripts
├── postcss.config.mjs       // PostCSS configuration for processing styles
├── tailwind.config.ts       // TailwindCSS configuration with custom theme and extensions
├── tsconfig.json            // TypeScript configuration
├── .eslintrc.json           // ESLint configuration for code linting
├── app/                     // Next.js `app` directory structure for routing and layouts
│   ├── globals.css          // Global CSS styles for the entire app
│   ├── layout.tsx           // Root layout with meta tags and global structure
│   ├── page.tsx             // Default landing page of the portfolio
│   ├── template.tsx         // Template wrapper for shared animations/styles
│   ├── fonts/               // Custom font files used in the project
│   ├── landing/             // Landing page route
│   │   └── page.tsx         // Landing page content
│   └── projects/            // Projects-related pages
│       ├── layout.tsx       // Shared layout for all project pages
│       ├── page.tsx         // All projects page with filtering capabilities
│       └── [id]/            // Dynamic routing for individual project pages
│           └── page.tsx     // Details of a specific project
├── components/              // Reusable UI components
│   ├── Footer.tsx           // Footer component for consistent UI
│   ├── Galaxy.tsx           // Three.js component for interactive galaxy visuals
│   ├── GalaxyBG.tsx         // Animated background using Three.js
│   ├── ProjectCard.tsx      // Component for displaying project summaries
│   ├── TypingEffect.tsx     // Typing animation component for text
│   ├── motionUtils.ts       // Motion animations with Framer Motion
│   ├── lottie/              // Lottie animations for specific visuals
│   ├── navigation/          // Components for navigation elements
│   ├── projects/            // Components specific to project displays
│   ├── sections/            // Components representing key page sections (Hero, About, Skills, etc.)
│   └── ui/                  // shadcn/ui elements
├── data/                    // Static data for projects and skills
│   ├── projects.tsx         // Details of projects showcased in the portfolio
│   └── skills.ts            // Skill categories and related metadata
├── lib/                     // Utility functions and helpers
│   └── utils.ts             // Common utility functions used across the project
└── public/                  // Public assets like images and resume
```

## ✨ Features

- Dynamic project filtering and showcasing
- Interactive animations using Three.js and Framer Motion
- Responsive design optimized for all devices
- Web3Forms integration for seamless contact submissions
- Optimized for fast performance with Vercel deployment

## 🌐 Live Demo

Experience my portfolio live: [edwinperaza.com](https://www.edwinperaza.com)

## 📬 Contact

Feel free to connect with me for collaborations, questions, or networking opportunities:

- **Email:** [edwin.peraza111@gmail.com](mailto:edwin.peraza111@gmail.com)
- **LinkedIn:** [Edwin Peraza](https://www.linkedin.com/in/edwin-peraza/)

I look forward to hearing from you!
