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
    thirdeye,
    rippl,
    threejs,
    tableau,
    tshirt,
    singsys,
    tradehive,
    microsoft,
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
      title: "Software Engineering Intern",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "May 2024 - Jul 2024",
      points: [
        "Working with Python to develop AI-powered chatbots.",
        "Explored prompt engineering for Large Language Models.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Singsys",
      icon: singsys,
      iconBg: "#383E56",
      date: "Jun 2023 - Jul 2023",
      points: [
        "Working with React JS and Node JS to develop a full stack website.",
        "Designing and implementing a database using MySQL.",
        "Communicating progress to the lead and working with him on revisions.",
      ],
    },
    {
      title: "Virtual Intern",
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
  ];
  
  const projects = [
    {
      name: "ThirdEye",
      description:
        "ThirdEye is a decentralized video sharing platform that follows a hybrid approach between Web2 and Web3 technologies. It uses its own cryptocurrency called EYEs.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "golang",
          color: "pink-text-gradient",
        },
      ],
      image: thirdeye,
      source_code_link: "https://github.com/Jayanti2919/ThirdEye",
      live_link: "",
    },
    {
      name: "Trade Hive",
      description:
        "Trade Hive brings all your stock market needs onto one platform. From trading to using the power of Machine Learning to predict next day prices, this is the ultimate forum.",
      tags: [
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "lstm",
          color: "pink-text-gradient",
        },
      ],
      image: tradehive,
      source_code_link: "https://github.com/Samrat1507/Trade-Hive",
      live_link: "https://trade-hive.netlify.app/",
    },
    {
      name: "Tshirt Customizer",
      description:
        "Ai-powered tshirt customizer where you can change the color, add logos, add textures and even ask AI to generate new patterns and logos for you.",
      tags: [
        {
          name: "threeJS",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: tshirt,
      source_code_link: "https://github.com/Jayanti2919/threejs-ai-tshirt",
      live_link: "https://tshirt-customizer-threejs.netlify.app/",
    },
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