import { FC } from "react";
import { ScrollTopOnMount } from "../../components";
import cv from "../../utils/cv";
import { MdOutlineEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import {
  FaSquareGithub,
  FaDownload,
  FaCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaScrewdriverWrench,
  FaComments,
} from "react-icons/fa6";
import resume from "../../assets/Cihan Erenler CV.pdf";
import { motion } from "framer-motion";

const Resume: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main className="relative page bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-blue-950/10 dark:to-slate-900 py-16">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <ScrollTopOnMount />

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
              &lt;resume&gt;
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            Full-stack developer with expertise in modern web technologies
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn inline-flex"
            href={resume}
            download
          >
            <FaDownload size={20} />
            <span className="pl-2">Download PDF</span>
          </motion.a>
        </motion.div>
        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          {/* Header/Hero Section */}
          <header className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900">
                  <img
                    src={cv.image}
                    alt="Cihan Erenler professional headshot"
                    className="w-full h-full object-cover scale-150 translate-y-14"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {cv.name}
                </h1>
                <p className="text-xl text-slate-300 mb-6">{cv.title}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href={`mailto:${cv.contact.email}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <MdOutlineEmail size={18} />
                    <span className="hidden sm:inline">{cv.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${cv.contact.phone}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <MdOutlinePhoneIphone size={18} />
                    <span>{cv.contact.phone}</span>
                  </a>
                  <a
                    href={cv.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <IoLogoLinkedin size={18} />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href={cv.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <FaSquareGithub size={18} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Content Section */}
          <section className="grid lg:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FaUser className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    About Me
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cv.about}
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FaBriefcase className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Work Experience
                  </h2>
                </div>
                <div className="space-y-6 relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-700" />

                  {cv.workExperience.map((experience, index) => {
                    return (
                      <div key={index} className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full -translate-x-[3px]" />

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {experience.company}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            {experience.date}
                          </p>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((res, idx) => {
                              return (
                                <li
                                  key={idx}
                                  className="text-sm text-slate-600 dark:text-slate-300 flex gap-2"
                                >
                                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                                    •
                                  </span>
                                  <span>{res}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FaGraduationCap className="text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Education
                  </h2>
                </div>
                <div className="space-y-4">
                  {cv.education.map((edu, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700"
                      >
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-1">
                          {edu.university}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {edu.date}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-8">
              {/* Skills & Tools */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <FaScrewdriverWrench className="text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Skills & Tools
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cv.codingSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <FaComments className="text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Soft Skills
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cv.personalSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Resume;
