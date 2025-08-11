import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCodeBranch,
  faEnvelope,
  faFile,
  faFolderOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const Data = {
  name: "Abhishek Saikia",
  location: "Jorhat, Assam, India",
  profession: "Software Engineer",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-saikia-268832279/",
      icon: faLinkedinIn,
    },
    {
      name: "GitHub",
      url: "https://github.com/KingrogKDR",
      icon: faGithub,
    },
    {
      name: "Email",
      url: "mailto:abhisheksaikia766@gmail.com",
      icon: faEnvelope,
    },
    {
      name: "Resume",
      url: "/docs/resume.pdf",
      icon: faFile,
    },
  ],
  experienceData: [
    {
      id: 1,
      title: "SDE Intern",
      company: "Rablo.in",
      duration: "March 2025 - July 2025",
      description: [
        "Developed and maintained scalable web applications using Next.js, Redux and SCSS",
        "Implemented mailing services with nodemailer and integrated it with the website",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Optimized application performance and solved a total of 50+ bugs through testing and code reviews",
        "Solved many Git merge conflicts and made the frontend responsive to different viewports",
      ],
      techStack: ["NextJs", "Typescript", "Redux", "SCSS", "Git", "Jira"],
      icon: "/Rablo.jpg",
    },
    {
      id: 2,
      title: "AI/ML Intern",
      company: "NIT Silchar",
      duration: "June 2024 - Aug 2024",
      description: [
        "Built a disease prediction system using classification algorithms ",
        "Developed a doctor recommendation engine based on patient symptoms ",
      ],
      techStack: [
        "React.js",
        "Expresss",
        "Node.js",
        "Websockets",
        "MongoDB",
        "NLP",
        "BioBERT",
      ],
      icon: "/NIT-Silchar.jpg",
    },
  ],
  educationData: [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      institution: "Jorhat Engineering College",
      duration: "2022 - 2026",
      result: "CGPA: 8.64 (Upto 5th Sem)",
      description: [
        "Relevant coursework: Data Structures & Algorithms, Operating Systems, Computer Architecture, Distributed Systems, Database Management, Theory of Computation, Computer Networks, Cloud Computing.",
        "Project 1: Developed a terminal-based text editor.",
      ],
      icon: "/JEC.jpg",
    },
  ],
  skills: [
    { name: "Javascript", icon: "devicon-javascript-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Go", icon: "devicon-go-original-wordmark" },
    { name: "Typescript", icon: "devicon-typescript-plain" },
    { name: "C/C++", icon: "devicon-c-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "SCSS", icon: "devicon-sass-original" },
    { name: "Tailwindcss", icon: "devicon-tailwindcss-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "PostgresSQL", icon: "devicon-postgresql-plain" },
    { name: "Bash", icon: "devicon-bash-plain" },
  ],
  navLinks: [
    { title: "Home", href: "#hero", icon: faHome },
    { title: "Experience/Education", href: "#experience", icon: faBriefcase },
    { title: "Skills", href: "#skills", icon: faCodeBranch },
    { title: "Projects", href: "#projects", icon: faFolderOpen },
  ],
  projectsData: [
    {
      id: 1,
      title: "Portfolio Website v1",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience, built with Next.js, Tailwind CSS, and Framer Motion for dynamic animations.",
      imageSrc: "/images/portfolio-v1.png",
      techStack: ["NextJs", "Typescript", "TailwindCSS"],
      liveLink: "https://portfolio-ten-kohl-53.vercel.app",
      sourceLink: "https://github.com/KingrogKDR/portfolio",
    },
    {
      id: 2,
      title: "VaultGuard",
      description:
        "Collaborated and Developed a comprehensive secure data sharing platform that enables users to safely share their financial data with trusted fintech applications",
      imageSrc: "/images/Vaultguard.png",
      techStack: [
        "React.js",
        "Docker",
        "Typescript",
        "Redis",
        "Prisma",
        "ELK stack",
      ],
      isLight: true,
      sourceLink: "https://github.com/laatu08/cyberhack",
    },
    {
      id: 3,
      title: "Store Doc",
      description:
        "A web application designed to facilitate the upload and storage of files on the web and local storage solutions.",
      imageSrc: "/images/storedoc.png",
      techStack: ["NextJs", "Appwrite", "TailwindCSS"],
      isLight: true,
      liveLink: "https://store-doc-one.vercel.app",
      sourceLink: "https://github.com/KingrogKDR/storeDoc",
    },
    {
      id: 4,
      title: "Shell in Go",
      description:
        "A simple shell implemented in Go that I designed to learn and improve on the language as well as to understand on a low level as to how a shell works",
      imageSrc: "/images/shell.png",
      techStack: ["Go", "Bash"],
      sourceLink: "https://github.com/KingrogKDR/my-shell-go",
    },
    {
      id: 5,
      title: "Http Server in Go",
      description:
        "A simple HTTP server written in Go, designed to handle basic web requests and responses. This server is lightweight, easy to set up, and perfect for small projects or learning purposes.",
      imageSrc: "/images/http-server.png",
      techStack: ["Go"],
      sourceLink: "https://github.com/KingrogKDR/my-http-server",
    },
    {
      id: 6,
      title: "Unisafe",
      description: "A website built to monitor security in an open campus.",
      isLight: true,
      imageSrc: "/images/Unisafe.png",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
      sourceLink: "https://github.com/KingrogKDR/Campus-security",
    },
  ],
};
