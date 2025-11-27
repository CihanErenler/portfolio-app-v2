import { FC, useState } from "react";
import { ProjectCard, ScrollTopOnMount, ProjectFilter } from "../../components";
import projects from "../../utils/projects";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaCode, FaFolderOpen } from "react-icons/fa6";

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

  return (
    <main className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-blue-950/10 dark:to-slate-900 min-h-screen page">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 -translate-x-1/3 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
        <ScrollTopOnMount />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
              &lt;portfolio&gt;
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Projects
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            In-depth case studies showcasing my work in web development
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectFilter selected={selected} handleSelect={handleSelect} />
        </motion.div>

        {/* Projects Grid or Empty State */}
        {itemsToShow.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-20 px-8"
          >
            <div className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <FaFolderOpen className="w-10 h-10 text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                No projects found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                There are no projects matching the "{selected}" filter. Try
                selecting a different category.
              </p>
              <button onClick={() => handleSelect("All")} className="btn">
                View All Projects
              </button>
            </div>
          </motion.div>
        ) : (
          <LayoutGroup>
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              <AnimatePresence mode="popLayout">
                {itemsToShow.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      layout: { duration: 0.4, ease: "easeInOut" },
                    }}
                  >
                    <ProjectCard {...project} preview={project.preview || ""} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        )}

        {/* Project count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {itemsToShow.length} of {projects.length} projects
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
