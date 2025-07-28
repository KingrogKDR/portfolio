import {
  faGithub as faGithubDark,
  faGithub as faGithubLight,
  faLinkedinIn as faLinkedinDark,
  faLinkedin as faLinkedinLight,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faEnvelopeDark,
  faEnvelope as faEnvelopeLight,
  faFile as faFilePdfDark,
  faFile as faFilePdfLight,
} from "@fortawesome/free-solid-svg-icons";

export const Data = {
  name: "Abhishek Saikia",
  location: "Jorhat, Assam, India",
  profession: "Software Engineer",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-saikia-268832279/",
      iconLight: faLinkedinLight,
      iconDark: faLinkedinDark,
    },
    {
      name: "GitHub",
      url: "https://github.com/KingrogKDR",
      iconLight: faGithubLight,
      iconDark: faGithubDark,
    },
    {
      name: "Email",
      url: "mailto:abhisheksaikia766@gmail.com",
      iconLight: faEnvelopeLight,
      iconDark: faEnvelopeDark,
    },
    {
      name: "Resume",
      url: "/home/kingorg/Downloads/resume.pdf",
      iconLight: faFilePdfLight,
      iconDark: faFilePdfDark,
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
};
