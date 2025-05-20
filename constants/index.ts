import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { TbBrandLeetcode } from "react-icons/tb";

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/developerAshish08",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ashishsharma082001",
  },
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://twitter.com/AshishSharma",
  // },
  {
    name: "LeetCode",
    icon: TbBrandLeetcode,
    link: "https://leetcode.com/u/ashishsharma_99k",
  }
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "jQuery",
    image: "jquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JAVA",
    image: "java.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "PHP",
  //   image: "php.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Laravel",
  //   image: "laravel.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 70,
    height: 70,
  },
] as const;

export const TOOLS_SKILL = [
  
  {
    skill_name: "Git",
    image: "git.png",
    width: 65,
    height: 65,
  },
    {
    skill_name: "GitHub",
    image: "github.png",
    width: 65,
    height: 65,
  },
  //   {
  //   skill_name: "GitHub Actions",
  //   image: "github-actions.png",
  //   width: 70,
  //   height: 85,
  // },
    {
    skill_name: "Postman",
    image: "postman.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "JIRA",
    image: "jira.png",
    width: 65,
    height: 65,
  }
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "NGINX",
    image: "nginx.png",
    width: 70,
    height: 70,
  },
{
    skill_name: "VS Code",
    image: "vscode.png",
    width: 40,
    height: 40,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Eclipse",
    image: "eclipsed.png",
    width: 40,
    height: 40,
  },
  
] as const;

export const PROJECTS = [
  {
    title: "Excel Clone",
    description: "This is the Excel Clone where we apply the logic in particular rows and store the user data in local storage.",
    image: "/projects/excel-color.png",
    link: "https://github.com/developerAshish08/Excel",
  },
  {
    title: "Sumz - Article Summarizer",
    description: "Sumz is your go-to solution for effortlessly transforming lengthy articles into concise and clear summaries.",
    image: "/projects/summarizer.png",
    link: "https://summary-extractor.netlify.app/",
  },
  {
    title: "CRM System",
    description: 'This CRM website streamlines sales tracking, payment verification, and student management.',
    image: "/projects/crm.png",
    link: "",
  },
  {
    title: "Study Sphere",
    description: 'Create a community chat app for students to connect, share resources, and collaborate on projects.',
    image: "/projects/chatapp.png",
    link: "",
  },
] as const;

export const EXTRA = [
  {
    title: "Study Sphere",
    description: 'Create a community chat app for students to connect, share resources, and collaborate on projects.',
    image: "/projects/chatapp.png",
    link: "",
  },
  // {
  //   title: "CMS",
  //   description: 'Central Maintenance System.',
  //   image: "/projects/cms.png",
  //   link: "https://github.com/Shivam-Samant/central-maintenance-system/",
  // },

] as const;

export const NAV_LINKS = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact Me",
    link: "#contact-me",
  },
] as const;
