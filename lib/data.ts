import { getAssetUrl } from "./utils";

export const navLinks = [
  { label: "home", href: "/#home" },
  { label: "about", href: "/#about" },
  { label: "experience", href: "/#experience" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: "/#contact" },
] as const;

export const experiences = [
  {
    company: "IKEJA ELECTRIC PLC",
    role: "STUDENT INTERN",
    period: "JAN '25 - JUNE '25",
    location: "LAGOS",
  },
  {
    company: "TEKINEST",
    role: "JUNIOR SOFTWARE DEVELOPER",
    period: "MAR '25 - PRESENT",
    location: "REMOTE",
  },
] as const;

export const projects = [
  {
    title: "AETHERDB",
    slug: "aetherdb",
    description:
      "Transform Plain English Into Executable SQL With Intelligence, Safety & Style",
    longDescription:
      "Built an interactive full-stack interface with Streamlit, delivering real-time query previews, automated chart visualizations, and execution statistics to enhance data analysis",
    technologies: ["streamlit (python)"],
    githubUrl: "https://github.com/bassey-hub/AetherDB",
    imageUrl: getAssetUrl("/assets/aetherdb.png"),
    href: "/projects/aetherdb",
  },
  {
    title: "HOSTEL MAINTENANCE REQUEST SYSTEM",
    slug: "hostel-maintenance",
    description:
      "Reporting And Managing Maintenance Issues Across University Hostel Facilities.",
    longDescription:
      "A comprehensive management system that streamlines reporting and tracking of maintenance issues across multiple university hostel facilities, featuring role-based dashboards. It replaces inefficient manual logbooks with a digital platform, allowing students to submit requests instantly and administrators to track repairs in real-time.",
    technologies: ["html", "css", "javascript", "node.js", "express.js", "sqlite", "REST API"],
    githubUrl: "https://github.com/bassey-hub/hostel-maintenance-system",
    imageUrl: getAssetUrl("/assets/hostel-maintenance.png"),
    href: "/projects/hostel-maintenance",
  },
  {
    title: "PASTEPAL",
    slug: "pastepal",
    description:
      "A modern Chrome extension for saving, searching, and reusing clipboard history.",
    longDescription:
      "Designed and developed a Chrome extension that helps users manage their clipboard history in a clean, productivity-focused interface. Built from scratch with Vanilla JavaScript and Chrome Extension Manifest V3, PastePal allows users to save copied text, instantly search previous clipboard items, copy entries back to the clipboard, and manage their history with a fast, intuitive experience.",
    technologies: [
      "html",
      "css",
      "javascript",
      "manifest v3",
      "chrome storage api"
    ],
    videoUrl: getAssetUrl("/assets/pastepal-demo.mp4"),
    href: "/projects/pastepal",
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basiratbasanya/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/bassey-hub",
    icon: "github",
  },
] as const;