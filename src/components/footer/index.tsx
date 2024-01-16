import { FC } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer: FC<JSX.IntrinsicElements["footer"]> = () => {
  return (
    <footer className="text-slate-400 bg-slate-800 dark:bg-dark-1 flex flex-col items-center justify-center py-5">
      <section className="flex items-center gap-1">
        <a
          className="icon-button"
          href="https://www.linkedin.com/in/cihanerenler/"
        >
          <FaLinkedin size={20} color="#fff" />
        </a>
        <a
          className="icon-button"
          href="https://github.com/CihanErenler"
          target="_blank"
        >
          <FaGithub size={20} color="#fff" />
        </a>
      </section>
      <div>© {new Date().getFullYear()} Copyright</div>
      <div>
        Made by{" "}
        <a
          className="text-blue-400"
          href="https://www.linkedin.com/in/cihanerenler/"
        >
          Cihan Erenler
        </a>
      </div>
    </footer>
  );
};

export default Footer;
