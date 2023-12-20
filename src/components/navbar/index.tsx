import { FC } from "react";
import navItems from "../../utils/navItems";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { NavbarType } from "../../@types/componentTypes";

const Navbar: FC<NavbarType & JSX.IntrinsicElements["nav"]> = ({
  theme,
  setTheme,
}) => {
  const handleThemeToggle = () => {
    if (theme) {
      setTheme(`${theme === "dark" ? "light" : "dark"}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 h-14 bg-white w-screen dark:bg-zinc-900 sticky top-0 z-50 border-b border-b-slate-200">
      <section className="flex items-center gap-2">
        <a
          className="icon-button"
          href="https://www.linkedin.com/in/cihanerenler/"
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
        >
          <FaGithub
            size={20}
            color={`${theme === "dark" ? "#fff" : "#334155"}`}
          />
        </a>
      </section>
      <section className="flex gap-2">
        {navItems.map((navItem) => (
          <NavLink key={navItem.name} to={navItem.path} className="nav-link">
            {navItem.name}
          </NavLink>
        ))}
        <button className="icon-button ml-6" onClick={handleThemeToggle}>
          {theme === "dark" ? (
            <MdOutlineLightMode size={22} color="#fff" />
          ) : (
            <MdOutlineDarkMode size={22} color="#334155" />
          )}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
