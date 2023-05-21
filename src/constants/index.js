import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    nextjs,
    Python,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    forage,
    clashofmodels,
    rippl,
    threejs,
    tableau,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
      desc: "HTML, CSS, JavaScript, ReactJS"
    },
    {
      title: "Backend Developer",
      icon: mobile,
      desc: "NodeJS, Go, MongoDB, PostgreSQL, MySQL, NextJS"
    },
    {
      title: "Data Analyst",
      icon: backend,
      desc: "Python, Scikit-learn, Tableau, MS Excel"
    },
    {
      title: "Content Writer",
      icon: creator,
      desc:"SEO Optimization, Backlinking, Technical Writing"
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
      name: "React JS",
      icon: reactjs,
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
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Tableau",
      icon: tableau,
    },

  ];
  
  const experiences = [
    {
      title: "STEM Intern",
      company_name: "Forage-Deloitte",
      icon: forage,
      iconBg: "#383E56",
      date: "Feb 2023 - Mar 2023",
      points: [
        "Working with Python to establish a uniform format for keeping data from different branches of a large company.",
        "Analyzing the same uniform data using Tableau, generating charts and noting trends.",
        "Writing project proposals to develop new tools surrounding the data analyzed.",
        "Checking for malicious activity using logs for the platform.",
        "Working with Microsoft Excel for analysis and classification of data.",
      ],
    },
    {
      title: "Technical Content Writer",
      company_name: "WrittenlyHub",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2022 - Jun 2022",
      points: [
        "Writing engaging articles on technical topics like Data Visualization and Cyber Security.",
        "Ensuring that each article was search engine optimized and had relevant backlinking.",
        "Creating content to market products effectively.",
        "Collaborating with my team on some articles and meeting tight deadlines",
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
      name: "Rippl",
      description:
        "Web-based podcast platform that allows users to engage with both audio and video podcasts. Users may also upload their content and like their favourite podcasts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: rippl,
      source_code_link: "https://github.com/wishsagarks/Rippl",
      live_link: "https://ripplpodcasts.live/",
    },
    {
      name: "Clash Of Models",
      description:
        "A landing page for GDSC-KIIT's original product-based competition. It showcases everything you need to know about rewards.ai and the event, Clash of Models.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: clashofmodels,
      source_code_link: "https://github.com/GDSC-KIIT/ClashOfModels",
      live_link: "https://clash-of-models.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, navLinks };