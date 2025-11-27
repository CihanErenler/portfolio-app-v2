import { FC } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer: FC<JSX.IntrinsicElements["footer"]> = () => {
  return (
    <footer className="text-slate-400 bg-slate-900 dark:bg-dark-1 flex flex-col items-center justify-center py-8 border-t border-slate-700 dark:border-dark-3">
      <section className="flex items-center gap-1 mb-3">
        <a
          className="icon-button hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
          href="https://www.linkedin.com/in/cihanerenler/"
        >
          <FaLinkedin size={20} color="#fff" />
        </a>
        <a
          className="icon-button hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
          href="https://github.com/CihanErenler"
          target="_blank"
        >
          <FaGithub size={20} color="#fff" />
        </a>
      </section>
      <div className="text-sm">© {new Date().getFullYear()} Copyright</div>
      <div className="text-sm">
        Made by{" "}
        <a
          className="text-blue-400 hover:text-blue-300 transition-colors"
          href="https://www.linkedin.com/in/cihanerenler/"
        >
          Cihan Erenler
        </a>
      </div>
    </footer>
  );
};

export default Footer;
