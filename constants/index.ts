import { BsGithub } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";





export const SKILL_DATA = [
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
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;










export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/anurag_maurya00/",
  },
  {
    name: "Github",
    icon: BsGithub,
    link: "https://github.com/AnuragMaurya42",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/IamAnurag100",
  },
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
    skill_name: "React",
    image: "react.png",
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
] as const;

export const FULLSTACK_SKILL = [

  
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "C++",
    image: "cpp.jpg",
    width: 100,
    height: 100,
  },
   {
    skill_name: "C",
    image: "c.jpg",
    width: 100,
    height: 100,
  },
   {
    skill_name: "Python",
    image: "python.jpg",
    width: 100,
    height: 100,
  },
] as const;





export const PROJECTS = [

 {
    title: "Attendance Management System",
    description:
      "A mobile-responsive system for tracking student attendance, built with React, Node.js, and MongoDB. Includes sign-in, sign-up, and role-based dashboards for faculty and students.",
    image: "/projects/attendance-management.png",
    link: "https://github.com/AnuragMaurya42/attendance-system",
  },
  {
    title: "Anugraam – Instagram Clone",
    description:
      "A social media clone inspired by Instagram. Built using the MERN stack, this project features user authentication, post uploads, likes, comments, and profile management.",
    image: "/projects/anugraam.png",
    link: "https://github.com/AnuragMaurya42/anugraam",
  },
{
  title: "HisabRakh",
  description:
    "HisabRakh is a personal finance and loan tracking app built with the MERN stack. It allows users to manage expenses, record loans given or taken, set interest rates, track due dates, and view repayment summaries with percentage-based calculations.",
  image: "/projects/hisabrakh.png",
  link: "https://github.com/AnuragMaurya42/HisabRakh",
},


  {
    title: "Spotify Clone",
    description:
      "A full-featured responsive music player inspired by Spotify using React, CSS, and JavaScript. It offers seamless audio playback, UI interactions, and a beautiful design mirroring the real app experience.",
    image: "/projects/spotify-clone.png",
    link: "https://github.com/AnuragMaurya42/spotify-clone",
  },

{
  title: "Flipkart UI Clone",
  description:
    "A fully responsive Flipkart homepage UI clone built using HTML, CSS, and Bootstrap. It replicates the design and layout of Flipkart's interface, including navbar, categories, carousels, and product sections—optimized for all screen sizes.",
  image: "/projects/flipkart.png",
  link: "https://anuragmaurya42.github.io/FlipKart/",
}
,


  {
    title: "Coffee Machine Simulation",
    description:
      "A terminal-based Python project that simulates a real coffee machine, handling multiple drink orders, tracking resources, and providing a user-friendly CLI experience.",
    image: "/projects/coffee-machine.png",
    link: "https://github.com/AnuragMaurya42/coffee-machine-simulation",
  },
  {
    title: "Dog Breed Website",
    description:
      "A frontend project built with HTML, CSS, and JS that showcases different dog breeds with images, descriptions, and fun facts to explore canine diversity.",
    image: "/projects/dog-breed.png",
    link: "https://github.com/AnuragMaurya42/dog-breed-website",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather app built with HTML, CSS, and JavaScript that fetches live weather data using OpenWeatherMap API. Features include temperature, humidity, and weather icons.",
    image: "/projects/weather-app.png",
    link: "https://github.com/AnuragMaurya42/weather-app",
  },


] as const;

export const FOOTER_DATA = [
  {
    title: "Profile",
    data: [
      {
        name: "Leetcode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/Anurag_Maurya042/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/AnuragMaurya42",
      },
      
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/anurag_maurya00/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/IamAnurag100",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/anurag-maurya-85634a22b/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:anurag_2021bcse042@nitsri.ac.in",
      },
    ],
  },
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
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/AnuragMaurya42/",
};
