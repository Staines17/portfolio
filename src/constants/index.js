import { clglogo, zuntra, kaizen } from "../assets/images";
import {
  game,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  postgresql,
  nextjs,
  nodejs,
  ai,
  react,
  cv,
  tailwindcss,
  intern,
  typescript,
  python,
  java,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Programming",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "Front-end Web Developer",
    company_name: "St. Joseph's Institute of Technology",
    icon: clglogo,
    iconBg: "#ffffff",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Efficiently categorizes input marks based on predefined valuation criteria.",
      "Compiles and exports the segregated marks into a structured Excel sheet.",
      "Simplifies the process with an intuitive and seamless user experience.",
      "Ensures accuracy and speed in mark segregation and report creation.",
    ],
  },
  {
    title: "Researcher",
    company_name: "Kaizen Voiz Private Limited",
    icon: kaizen,
    iconBg: "#fff",
    date: "Jun 2024",
    points: [
      "Design and fine-tune LipGAN and other GAN-based architectures for high-quality lip-synchronization and video generation.",
      "Preprocess large-scale audio-visual datasets using OpenCV, NumPy, and FFmpeg, ensuring optimal model training.",
      "Enhance GAN stability using progressive growing, spectral normalization, and advanced loss functions to improve realism and efficiency.",
      "Research deepfake detection, adversarial attacks on GANs, and ethical implications of AI-generated content in security applications.",
    ],
  },
  {
    title: "Front-end Web Developer",
    company_name: "Zuntra Digital Private Limited",
    icon: zuntra,
    iconBg: "#fff",
    date: "Jan 2025 - Present",
    points: [
      "Build and customize high-performance, responsive websites using Wix Studio and WordPress, ensuring modern UI/UX standards.",
      "Enhance site speed, accessibility, and SEO through efficient caching, asset optimization, and structured data implementation.",
      "Ensure seamless user experience across devices and browsers through rigorous testing and debugging.",
      "Develop and maintain scalable, corporate websites, e-commerce platforms, and CMS-driven solutions tailored to business needs.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Staines17",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/joel-staines-j-m-8b55a3301/",
  },
];

export const projects = [
  {
    iconUrl: ai,
    theme: "btn-back-red",
    name: "Lip Generative Adversarial Network",
    description:
      "Made a research on this LipGAN to check how it works, the accuracy and the stability.",
    link: "https://github.com/Staines17/Kaizen-Voiz-LipGan",
  },
  {
    iconUrl: intern,
    theme: "btn-back-green",
    name: "React Front-end Website",
    description:
      "Created this react webpage for St. Joseph's Institute of Technology for the internship program conducted in the college.",
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: game,
    theme: "btn-back-blue",
    name: "Tic-Tac-Toe",
    description:
      "Designed and built a simple Tic-Tac-Toe as a starter project.",
    link: "https://github.com/Staines17/Tic-Tac-Toe",
  },
  {
    iconUrl: cv,
    theme: "btn-back-pink",
    name: "Curriculum vitae",
    description: "Built my first cv after studying Html and CSS.",
    link: "https://github.com/Staines17/cv",
  },
];
