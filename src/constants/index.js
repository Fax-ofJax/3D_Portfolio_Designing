import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cyber Security Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bug Bounty Hunter",
      company_name: "HackerOne",
      icon: tesla,
      iconBg: "#383E56",
      date: "July 2020 - Jan 2022",
      points: [
        "Technical knowledge of web application vulnerabilities and programming languages.",
        "Attention to detail to identify overlooked security flaws",
        "Persistence to keep trying until finding a vulnerability.",
        "Effective communication skills to report vulnerabilities clearly and provide proof of concept.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Fiverr",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Jan 2023",
      points: [
        "Strong technical skills in web development technologies and server-side programming languages.",
        "Excellent time management skills to meet project deadlines.",
        "Business acumen to manage your own business, create contracts, negotiate terms, and manage client expectations.",
        "Increased client network through building relationships and reputation.",
      ],
    },
    {
      title: "3D model Designer",
      company_name: "YT Content Creator",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Expanded skill set in 3D modeling, attention to detail, and software proficiency.",
        "Enhanced creativity and problem-solving abilities through exposure to diverse projects.",
        "Improved communication skills and collaboration with content creators.",
        "Increased job satisfaction from contributing to popular content on YouTube.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Stelix",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Updating Skills on a timely basis",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla-JS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Fax-ofJax/Weather-app",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Fax-ofJax/Rental-Servive-using-ReactJs",
    },
    {
      name: "Portfolio Website",
      description:
        "This website is a dynamic web application built using modern technologies such as React, Three.js, HTML, Tailwind CSS. It showcases my skills and work using animations, transitions, and interactive elements.",
      tags: [
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };