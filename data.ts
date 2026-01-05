import { Project, VideoItem } from './types';

export const personalProjects: Project[] = [
  {
    id: 1,
    title: "React Personal Dashboard",
    description: "A React single-page application demonstrating components, state, props, conditional rendering, and theme toggling, built with modern React and deployed on GitHub Pages.",
    image: "https://raw.githubusercontent.com/shittuadams/react-dashboard/main/screenshots/react-dashboard.jpg",
    tags: ["React", "CSS", "useState", "Conditional Rendering"],
    category: 'web',
    details: "https://github.com/shittuadams/react-dashboard#readme",
    link: "https://shittuadams.github.io/react-dashboard/"
  },
  {
    id: 2,
    title: "Data Viz Dashboard",
    description: "Interactive dashboard visualizing complex sales data using D3.js and React. Allows filtering by region, date, and product category.",
    image: "https://raw.githubusercontent.com/shittuadams/task-manager/main/screenshots/task-manager.png",
    tags: ["Power BI", "SQL", "Excel", "D3.js"],
    category: 'data',
    details: "https://github.com/shittuadams/task-manager#readme",
    link: "https://shittuadams.github.io/task-manager/"
  },
  {
    id: 3,
    title: "Portfolio Template",
    description: "A modern, highly customizable portfolio theme for developers, featuring dark mode, animations, and a blog section.",
    image: "https://picsum.photos/seed/p3/600/400",
    tags: ["HTML", "Tailwind", "JS", "Framer Motion"],
    category: 'web'
  },
  {
    id: 101,
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking dashboard connecting to the CoinGecko API to display live prices and historical charts.",
    image: "https://picsum.photos/seed/crypto/600/400",
    tags: ["React", "API", "ChartJS"],
    category: 'web'
  },
  {
    id: 102,
    title: "Weather App",
    description: "Location-based weather forecasting application that gives hourly and daily forecasts with severe weather alerts.",
    image: "https://picsum.photos/seed/weather/600/400",
    tags: ["JS", "OpenWeatherMap", "CSS3"],
    category: 'web'
  },
  {
    id: 103,
    title: "Sales Analysis Script",
    description: "Python automated script for processing daily CSV sales reports and generating PDF summaries for management.",
    image: "https://picsum.photos/seed/sales/600/400",
    tags: ["Python", "Pandas", "Matplotlib"],
    category: 'data'
  }
];

export const studentProjects: Project[] = [
  {
    id: 4,
    title: "Space Shooter Game",
    description: "A classic arcade-style space shooter game developed by a 10-year-old student using Scratch logic blocks.",
    image: "https://picsum.photos/seed/s1/600/400",
    tags: ["Scratch", "Game Logic", "Animation"],
    category: 'general'
  },
  {
    id: 5,
    title: "Inventory Calculator",
    description: "Python script designed for a small family business to calculate inventory value and generate restock alerts.",
    image: "https://picsum.photos/seed/s2/600/400",
    tags: ["Python", "Pandas", "Automation"],
    category: 'data'
  },
  {
    id: 6,
    title: "Tribute Page",
    description: "The first complete HTML/CSS project by a web development student, featuring a responsive layout and embedded media.",
    image: "https://picsum.photos/seed/s3/600/400",
    tags: ["HTML", "CSS", "Responsive Design"],
    category: 'web'
  },
  {
    id: 201,
    title: "Recipe Finder",
    description: "A search engine for cooking recipes that filters results based on available ingredients entered by the user.",
    image: "https://picsum.photos/seed/recipe/600/400",
    tags: ["HTML", "JS", "Edamam API"],
    category: 'web'
  },
  {
    id: 202,
    title: "Student Grade Tracker",
    description: "Excel VBA project for teachers to input grades and automatically calculate averages and letter grades.",
    image: "https://picsum.photos/seed/math/600/400",
    tags: ["Excel", "VBA", "Education"],
    category: 'data'
  },
  {
    id: 203,
    title: "Personal Blog",
    description: "A student's first personal blog website built from scratch without frameworks to learn the core of web design.",
    image: "https://picsum.photos/seed/blog/600/400",
    tags: ["HTML", "CSS", "Flexbox"],
    category: 'web'
  }
];

export const videoLibrary: VideoItem[] = [
  {
    id: 1,
    title: "HTML & CSS Crash Course",
    description: "A beginner-friendly introduction to building your first webpage structure and style.",
    youtubeId: "qz0aGYrrlhU",
    category: 'tutorial',
    duration: "45:00"
  },
  {
    id: 2,
    title: "JavaScript ES6 Features",
    description: "Master arrow functions, destructuring, and spread operators in modern JavaScript.",
    youtubeId: "NCwa_xi0Uuc",
    category: 'tutorial',
    duration: "22:15"
  },
  {
    id: 3,
    title: "Intro to Python for Data",
    description: "Learn how to set up your environment and basic data structures in Python.",
    youtubeId: "_uQrJ0TkZlc",
    category: 'tutorial',
    duration: "30:00"
  },
  {
    id: 4,
    title: "Responsive Design Basics",
    description: "Using Flexbox and Media Queries to make websites look good on mobile devices.",
    youtubeId: "srvs2f7cM-w",
    category: 'tutorial',
    duration: "28:45"
  },
  {
    id: 5,
    title: "Cohort A - Week 4: DOM Manipulation",
    description: "Live class recording covering document selection, event listeners, and dynamic content.",
    youtubeId: "y17RuWkWDN8",
    category: 'class',
    duration: "1:15:20"
  },
  {
    id: 6,
    title: "Kids Coding: Scratch Games",
    description: "Saturday session with the junior group building a maze game in Scratch.",
    youtubeId: "jI1P3Qp8r-o",
    category: 'class',
    duration: "55:00"
  },
  {
    id: 7,
    title: "Excel Data Pivot Tables",
    description: "Advanced Excel workshop focusing on pivot tables, slicers, and charts.",
    youtubeId: "m7Qk5l77FjI",
    category: 'class',
    duration: "1:05:00"
  },
  {
    id: 8,
    title: "Project Review & Deployment",
    description: "End of module session reviewing student portfolios and deploying to Netlify.",
    youtubeId: "p1quIaoLzfE",
    category: 'class',
    duration: "1:20:00"
  }
];