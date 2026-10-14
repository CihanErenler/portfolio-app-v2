import { FC } from "react";
import { ProjectCardType } from "../../@types/componentTypes";
import { Tag } from "..";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard: FC<ProjectCardType> = ({ id, title, desc, image, tags }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const url = `/projects/${id}`;
    navigate(url);
  };

  return (
    <article
      onClick={handleNavigation}
      className="h-full flex flex-col rounded-lg overflow-hidden border border-zinc-200 dark:border-dark-3 bg-white dark:bg-dark-2 transition-colors duration-200 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* View Project Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-mono font-semibold">
            $ open project
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Project Image */}
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Title */}
        <h3 className="font-mono font-semibold text-base text-slate-900 dark:text-white mb-2 lowercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-slate-100 dark:border-slate-700">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
