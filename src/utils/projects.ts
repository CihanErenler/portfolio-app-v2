import portfolioApp from "../assets/images/portfolio-app.jpg";
import ecommerce from "../assets/images/e-commerce.jpg";
import hero from "../assets/images/hero.png";
import project4 from "../assets/images/project-4.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

const projects = [
  {
    id: 0,
    title: "Portfolio Website",
    desc: "This project involves the creation of my personal website, which you are currently exploring. The primary goal is to provide visitors with information about me and showcase various projects I have worked on.",
    image: portfolioApp,
    github: "https://github.com/CihanErenler/portfolio-app-v2",
    preview: "https://hanci.netlify.app/",
    tags: ["TypeScript", "React", "Tailwind CSS", "React Router"],
    filter: ["TypeScript", "React", "React Router"],
    technologies: ["TypeScript", "React", "Tailwind CSS", "React Router"],
    background:
      "The background of this project lies in the need for a centralized platform to present my professional portfolio, skills, and completed projects.",
    challenges:
      "One of the major challenges faced during the development of the portfolio website was designing an engaging and informative layout that effectively represents my skills and projects.",
    actionsOutcomes:
      "To address this, I utilized TypeScript, React, and Tailwind CSS to implement a responsive and visually appealing design. The completed project is available on GitHub  and live on Netlify.",
  },
  {
    id: 1,
    title: "E-commerce Website",
    desc: "The E-commerce Website project involves the development of an online shopping platform where users can filter available products based on various criteria such as brand, color, and price. Users can also preview individual products and add them to the shopping cart.",
    image: ecommerce,
    github: "https://github.com/CihanErenler/react-e-commerce",
    preview: "https://hanci.netlify.app/",
    tags: ["React", "Tailwind Css", "React Router", "Axios", "React Icons"],
    filter: ["React", "React Router", "Axios", "External API"],
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "React Icons",
    ],
    background:
      "The project originated from the need to create a user-friendly and functional e-commerce website that allows users to easily browse and purchase products online.",
    challenges:
      "The primary challenges included implementing effective product filtering and integrating a seamless shopping cart functionality.",
    actionsOutcomes:
      "To overcome these challenges, I utilized React, Tailwind CSS, and Axios. The completed project is available on GitHub  and live on Netlify.",
  },
  {
    id: 2,
    title: "Markdown Note Taking Application",
    desc: "NoteDock is a dynamic markdown note-taking application that seamlessly combines the simplicity of markdown with the power of a feature-rich note management system.",
    image: hero,
    github: "https://github.com/CihanErenler/markdown-note-taking-offline",
    preview: "https://notedockio.netlify.app",
    tags: ["React", "Styled-components", "React Router"],
    filter: ["React", "React Router", "Styled-components"],
    technologies: ["React", "Styled-components", "React Router"],
    background:
      "The idea behind this project was to create a versatile note-taking application that merges the simplicity of markdown with advanced note management capabilities.",
    challenges:
      "One of the challenges faced was finding the right balance between a user-friendly interface and feature-rich functionalities.",
    actionsOutcomes:
      "To address this, I employed React, Styled-components, and React Router. The completed project is available on GitHub  and live on Netlify.",
  },
  {
    id: 3,
    title: "Movie Search App",
    desc: "The Movie Search App is designed to allow users to display trending movies and TV shows, view details of specific films, and search for movies using queries.",
    image: project4,
    github: "https://github.com/CihanErenler/react-movie-app",
    preview: "https://cihan-react-movieapp.netlify.app/",
    tags: ["React", "CSS", "React Router", "Material UI"],
    filter: ["React", "React Router", "External API"],
    technologies: ["React", "CSS", "React Router", "Material UI"],
    background:
      "This project emerged from the need to create a centralized platform for users to explore trending movies, view details, and easily search for specific films.",
    challenges:
      "A key challenge was integrating movie data effectively and implementing a robust search functionality.",
    actionsOutcomes:
      "To tackle these challenges, I utilized React, CSS, React Router, and Material UI. The completed project is available on GitHub and live on Netlify.",
  },
  {
    id: 4,
    title: "Color Generator",
    desc: "The Color Generator project involves the creation of a React tool that allows users to generate tints and shades from a selected color. Additionally, the tool enables users to copy any generated color.",
    image: project2,
    github: "https://github.com/CihanErenler/react-color-generator",
    preview: "https://c-react-color-generator.netlify.app/",
    tags: ["React", "CSS", "React Color", "React Icons"],
    filter: ["React"],
    technologies: ["React", "CSS", "React Color", "React Icons"],
    background:
      "This project originated from the need to create a versatile color generation tool that provides users with the ability to generate and copy colors easily.",
    challenges:
      "A significant challenge was developing a tool that efficiently generates color variations and allows users to copy the generated colors seamlessly.",
    actionsOutcomes:
      "To address these challenges, I employed React, CSS, React Color, and React Icons. The completed project is available on GitHub and live on Netlify.",
  },
  {
    id: 5,
    title: "Weather App",
    desc: "The Weather App is designed to allow users to search for real-time weather conditions in different cities. Users can retrieve information such as temperature, humidity, and pressure.",
    image: project3,
    github: "https://github.com/CihanErenler/weatherApp",
    preview: "https://cihanweatherapp.netlify.app/",
    tags: ["Javascript", "CSS"],
    filter: ["JavaScript", "External API"],
    technologies: ["JavaScript", "CSS"],
    background:
      "The motivation behind this project was to create a user-friendly application that provides real-time weather information for users searching in various cities.",
    challenges:
      "The primary challenge was integrating weather data effectively and designing a simple yet informative user interface.",
    actionsOutcomes:
      "To overcome these challenges, I employed JavaScript and CSS. The completed project is available on GitHub  and live on Netlify.",
  },
];

export default projects;
