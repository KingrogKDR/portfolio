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
  profession: "Software Developer",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      iconLight: faLinkedinLight,
      iconDark: faLinkedinDark,
    },
    {
      name: "GitHub",
      url: "https://github.com/yourprofile",
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
};
