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
    <main className="dark:bg-dark-1 min-h-screen page overflow-hidden">
      <ScrollTopOnMount />
      <div>
        <Title>Projects</Title>
        <p className="dark:text-slate-300 text-center">
          In-depth Case Studies to show you what I can offer.
        </p>
      </div>
      <ProjectFilter selected={selected} handleSelect={handleSelect} />
      <div className="lg:grid grid-cols-3 p-8 gap-5 block">
        <AnimatePresence>
          {itemsToShow.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Projects;
