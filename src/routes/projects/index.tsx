import { FC, useState, useEffect } from "react";
import {
  Title,
  ProjectCard,
  ScrollTopOnMount,
  ProjectFilter,
} from "../../components";
import projects from "../../utils/projects";
import { AnimatePresence } from "framer-motion";

const Projects: FC<JSX.IntrinsicElements["main"]> = () => {
  const [selected, setSelected] = useState("All");

  const itemsToShow =
    selected === "All"
      ? projects
      : projects.filter((project) => {
          if (project.filter.includes(selected)) return true;
          return false;
        });

  const handleSelect = (name: string) => {
    setSelected(name);
  };

  useEffect(() => {}, [selected]);

  return (
    <main
      className="relative dark:bg-dark-2 bg-gray-50 min-h-screen page overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle,rgb(164, 174, 187) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle,rgb(114, 125, 138) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(71, 85, 105, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="relative z-10">
        <ScrollTopOnMount />
        <div>
          <Title>Projects</Title>
          <p className="dark:text-slate-300 text-slate-600 text-center">
            In-depth Case Studies to show you what I can offer.
          </p>
        </div>
        <ProjectFilter selected={selected} handleSelect={handleSelect} />
        <div className="lg:grid grid-cols-3 p-8 gap-5 block">
          <AnimatePresence>
            {itemsToShow.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                preview={project.preview || ""}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Projects;
