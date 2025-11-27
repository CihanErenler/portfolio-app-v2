import { FC } from "react";
import { Link, SocialMedia, Button } from "../../components";
import photo from "../../assets/images/cihan-image.png";
import {
  FaCode,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact: FC<JSX.IntrinsicElements["main"]> = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "cihanerenler@outlook.com",
      href: "mailto:cihanerenler@outlook.com",
      color: "blue",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/cihanerenler/",
      color: "blue",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/CihanErenler",
      color: "slate",
    },
  ];

  return (
    <main className="relative page bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-blue-950/10 dark:to-slate-900 py-16 min-h-screen flex items-center">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 w-full">
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
              &lt;get-in-touch&gt;
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I'm always interested in connecting with fellow developers and tech
            enthusiasts. Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile & Info */}
            <div className="text-center md:text-left">
              {/* Profile Image */}
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900">
                  <img
                    src={photo}
                    alt="Cihan Erenler profile photo"
                    className="scale-[1.5] translate-y-10 object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Cihan Erenler
              </h2>
              <p className="text-blue-600 dark:text-blue-400 mb-6">
                Full-Stack Developer
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Passionate about building modern web applications and always
                eager to discuss technology, development practices, and
                interesting ideas. Check out my{" "}
                <Link to="/projects">projects</Link> and{" "}
                <Link to="/resume">resume</Link> to learn more about my work.
              </p>

              {/* Social Media */}
              <div className="flex justify-center md:justify-start gap-3 mb-6">
                <SocialMedia />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button to="/projects">View My Work</Button>
                <Button to="/resume">
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                  slate:
                    "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400",
                  green:
                    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                };

                return (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        colorClasses[method.color as keyof typeof colorClasses]
                      }`}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Open to new opportunities and interesting conversations
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
