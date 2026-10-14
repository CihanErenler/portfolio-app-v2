import { FC } from "react";
import { ProjectCard, Button } from "..";
import { ProjectPreviewType } from "../../@types/componentTypes";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectPreview: FC<
  ProjectPreviewType & JSX.IntrinsicElements["section"]
> = ({ projects, title }) => {
  return (
    <section className="relative bg-zinc-50 dark:bg-dark-1 py-16 md:py-20 border-t border-slate-200 dark:border-slate-800">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
              &lt;{title.toLowerCase().replace(/\s+/g, "-")}&gt;
            </span>
          </div>
          <h2 className="font-mono tracking-tight text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my work in web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.3 },
              }}
            >
              <ProjectCard {...project} preview={project.preview || ""} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex items-center justify-center"
        >
          <Button to="/projects">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPreview;
