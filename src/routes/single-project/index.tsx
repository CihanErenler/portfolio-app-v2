import { FC, useEffect, useState } from "react";
import {
  Button,
  ProjectPreview,
  SingleProjectSkeleton,
} from "../../components";
import { useParams, Link } from "react-router-dom";
import projects from "../../utils/projects";
import { ProjectType } from "../../@types/componentTypes";
import { LuExternalLink, LuGithub, LuArrowLeft } from "react-icons/lu";
import {
  FaCheck,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const SingleProject: FC<JSX.IntrinsicElements["main"]> = () => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    // Simulate a brief loading period for better UX
    setTimeout(() => {
      const project: ProjectType = projects.find(
        (project) => project.id === +id!
      )!;
      setProject(project);
      setIsLoading(false);
    }, 300);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectsToShow = projects
    .filter((project) => project.id !== +id!)
    .slice(0, 3);

  if (isLoading) {
    return <SingleProjectSkeleton />;
  }

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/20 dark:from-slate-900 dark:to-blue-950/10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Project not found
          </h1>
          <Button to="/projects">View All Projects</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-blue-950/10 dark:to-slate-900 min-h-screen page">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
          >
            <LuArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
              &lt;project-details&gt;
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 capitalize">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            {project.desc}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover"
              src={project.image}
              alt={`${project.title} project detailed view`}
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {project.preview && (
            <Button href={project.preview}>
              <LuExternalLink size={20} />
              <span className="pl-2">View Live Demo</span>
            </Button>
          )}
          <Button href={project.github}>
            <LuGithub size={20} />
            <span className="pl-2">View Source Code</span>
          </Button>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Background */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaLightbulb className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Project Background
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.background}
              </p>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <FaCode className="text-orange-600 dark:text-orange-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Challenges
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </motion.section>

            {/* Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FaRocket className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Outcomes & Results
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.actionsOutcomes}
              </p>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg sticky top-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <FaLayerGroup className="text-blue-600 dark:text-blue-400 text-lg" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Technologies Used
                </h3>
              </div>
              <ul className="space-y-3">
                {project.technologies?.map((item) => {
                  return (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-slate-600 dark:text-slate-300"
                    >
                      <FaCheck className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <ProjectPreview title="More Projects" projects={projectsToShow} />
    </main>
  );
};

export default SingleProject;
