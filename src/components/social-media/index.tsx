import { FC } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { useAppContext } from "../../hooks";

const SocialMedia: FC<JSX.IntrinsicElements["section"]> = () => {
  const { theme } = useAppContext();

  return (
    <section className="flex items-center gap-2">
      <a
        className="icon-button"
        href="https://www.linkedin.com/in/cihanerenler/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
        title="LinkedIn"
      >
        <FaLinkedin
          size={20}
          color={`${theme === "dark" ? "#fff" : "#334155"}`}
        />
      </a>
      <a
        className="icon-button"
        href="https://github.com/CihanErenler"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
        title="GitHub"
      >
        <FaGithub
          size={20}
          color={`${theme === "dark" ? "#fff" : "#334155"}`}
        />
      </a>
    </section>
  );
};

export default SocialMedia;
