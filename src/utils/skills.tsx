import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

const skills = [
  {
    name: "frontend",
    icon: <IoCodeSlashOutline size={40} color="#fff" />,
    items: [
      "React",
      "TypeScript",
      "Javascript",
      "HTML, CSS, SCSS",
      "Tailwind CSS",
    ],
  },
  {
    name: "backend",
    icon: <GoDatabase size={40} color="#fff" />,
    items: [
      "Node.js",
      "Express.js",
      "PostgresSQL / MySQL / MariaDB",
      "MongoDB",
    ],
  },
  {
    name: "others",
    icon: <VscTools size={40} color="#fff" />,
    items: ["Jest", "React Testing Library", "Cypress", "Figma", "UI Design"],
  },
];

export default skills;
