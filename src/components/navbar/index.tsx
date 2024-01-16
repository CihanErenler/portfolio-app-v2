import { FC } from "react";
import navItems from "../../utils/navItems";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useAppContext } from "../../hooks";
import { SocialMedia } from "..";

const Navbar: FC<JSX.IntrinsicElements["nav"]> = () => {
  const { theme, setTheme } = useAppContext();

  const handleThemeToggle = () => {
    if (theme) {
      setTheme(`${theme === "dark" ? "light" : "dark"}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 h-14 bg-white max-w-screen dark:bg-dark-1 sticky top-0 z-50 border-b border-b-slate-200 dark:border-b-dark-3">
      <SocialMedia />
      <section className="flex gap-2">
        {navItems.map((navItem) => (
          <NavLink key={navItem.name} to={navItem.path} className="nav-link">
            {navItem.name}
          </NavLink>
        ))}
        <button className="icon-button ml-6" onClick={handleThemeToggle}>
          {theme === "dark" ? (
            <MdOutlineLightMode size={22} color="#3b81f6" />
          ) : (
            <MdOutlineDarkMode size={22} color="#334155" />
          )}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
