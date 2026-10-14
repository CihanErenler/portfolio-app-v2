import portfolioApp from "../assets/images/portfolio-app.jpg";
import hero from "../assets/images/hero.png";
import chatbot from "../assets/images/chatbot.png";
import garage35 from "../assets/images/garage35.png";

const projects = [
  {
    id: 0,
    title: "AI Portfolio Chatbot",
    desc: "An AI-powered chat widget embedded into my portfolio that lets visitors ask questions about me, my skills, and my projects. Answers are generated from my own portfolio content using retrieval-augmented generation and streamed back as they are written. It follows the site's light and dark theme. You can see it in the bottom right corner of the page.",
    image: chatbot,
    github: "https://github.com/CihanErenler/portfolio-ai-chatbot-app",
    tags: ["Node.js", "Express", "PostgreSQL", "pgvector", "OpenAI", "Vite"],
    filter: ["Node.js", "Express", "PostgreSQL"],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "Vite",
    ],
    background:
      "I wanted a more interactive way for visitors to explore my portfolio and, at the same time, showcase that I can build and deploy real-world AI applications. The idea was to create an AI assistant that knows my background, skills, and projects and can be embedded as a chat widget on any website.",
    challenges:
      "The main challenges were setting up a production-like environment on a Hetzner server, configuring PostgreSQL with the pgvector extension for vector search, and wiring up a secure SSH-based workflow from my local machine. I also needed a clean way to expose the chatbot as an embeddable iframe without overcomplicating the architecture. Once it was live, a public AI endpoint meant dealing with bot traffic and slow first responses, so I had to protect it from abuse and runaway costs and make answers feel fast.",
    actionsOutcomes:
      "I built a Node.js + Express backend that stores my portfolio content as vector embeddings in PostgreSQL using pgvector. For each question it embeds the query, retrieves the most relevant passages, and streams an answer from OpenAI that is grounded in that context. The chat UI is a small Vite-powered frontend that runs inside an iframe; a single <script> tag embeds it on any page, and it syncs its open state and the light/dark theme with the host page through postMessage. Rate limiting, input limits, a daily request cap and a spending limit on the API key keep it safe to leave running. The result is a fast, always-on AI assistant that demonstrates both my full-stack skills and my experience with AI tooling.",
  },
  {
    id: 2,
    title: "Car Dealer Website",
    desc: "The Car Dealer Website project involves the development of an online platform where users can browse available cars and view details of each car. Users can also filter available cars based on various criteria such as brand, model, and price. Users can also preview individual cars and add them to the shopping cart. Customers can fill in a contact form to submit a complaint, which is delivered straight to the dealer's email.",
    image: garage35,
    github: "https://github.com/CihanErenler/Garage35",
    preview: "https://garage35.fi/",
    tags: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "React Icons",
      "Node.js",
      "Express",
      "Resend",
    ],
    filter: ["React", "React Router", "Axios", "External API"],
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "Resend",
    ],
    background:
      "The project originated from the need to create a user-friendly and functional car dealer website that allows users to easily browse and purchase cars online.",
    challenges:
      "The primary challenges included implementing effective car filtering and integrating a with a backend server to store car data.",
    actionsOutcomes:
      "To overcome these challenges, I utilized React, Tailwind CSS, Node.js, and Express. I created a proxy server to handle the API requests, and used Resend to deliver complaints submitted through the form to the dealer's email.",
  },
  {
    id: 1,
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
    id: 3,
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
];

export default projects;
