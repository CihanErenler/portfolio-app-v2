import { FC } from "react";
import { ProjectCardType } from "../../@types/componentTypes";
import { Tag } from "..";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard: FC<ProjectCardType> = ({ id, title, desc, image, tags }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log("id ===> ", id);
    const url = `/projects/${id}`;
    navigate(url);
  };

  return (
    <motion.section
      key="project"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex-1 rounded-xl overflow-hidden border border-slate-300 hover:shadow-xl dark:border-dark-3 dark:bg-dark-2 transition-shadow duration-300 mb-5 lg:mb-0"
    >
      <div
        className="h-[250px] relative overflow-hidden group cursor-pointer"
        onClick={handleNavigation}
      >
        <div className="bg-slate-600 absolute w-full h-full top-0 left-0 opacity-30 hover:opacity-0 transition-all duration-300"></div>
        <div className="absolute w-full h-full -bottom-[250px] l-0 p-5 text-white bg-blue-500/90 dark:bg-blue-950/90  peer-hover:bottom-0 group-hover:bottom-0 transition-all duration-300">
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p className="font-light">{desc}</p>
        </div>
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="project-image"
        />
      </div>
      <div className="p-5">
        <div>
          <h2 className="font-bold text-lg text-center capitalize pb-3 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
