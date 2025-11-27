import { FC } from "react";
import navItems from "../../utils/navItems";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useAppContext } from "../../hooks";
import { SocialMedia } from "..";
import { IoCloseSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

const Navbar: FC<JSX.IntrinsicElements["nav"]> = () => {
  const { theme, setTheme, showNav, setShowNav } = useAppContext();

  const handleThemeToggle = () => {
    if (theme) {
      setTheme(`${theme === "dark" ? "light" : "dark"}`);
    }
  };

  const handleOpenMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="flex items-center justify-between lg:px-8 px-4 h-16 bg-white/70 backdrop-blur-xl max-w-screen dark:bg-slate-900/70 sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50">
      {/* Logo / Brand */}
      <NavLink
        to="/"
        className="flex items-center gap-2 group transition-all duration-300"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-2 rounded-lg">
            <FaCode className="text-white text-lg" />
          </div>
        </div>
        <div className="hidden sm:block">
          <span className="font-bold text-slate-900 dark:text-white text-lg">
            CE
          </span>
          <span className="text-slate-400 dark:text-slate-500 text-sm ml-1 font-mono">
            ./dev
          </span>
        </div>
      </NavLink>

      {/* Desktop Navigation */}
      <section className="gap-1 lg:flex hidden items-center">
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.name}
            to={navItem.path}
            className="relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg group"
          >
            {navItem.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-[.active]:w-3/4 transition-all duration-300" />
          </NavLink>
        ))}

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-3" />

        {/* Social Media */}
        <div className="flex items-center gap-1">
          <SocialMedia />
        </div>

        {/* Theme Toggle */}
        <button
          className="ml-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 group"
          onClick={handleThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <MdOutlineLightMode
              size={20}
              className="text-blue-500 group-hover:rotate-45 transition-transform duration-300"
            />
          ) : (
            <MdOutlineDarkMode
              size={20}
              className="text-slate-700 group-hover:-rotate-45 transition-transform duration-300"
            />
          )}
        </button>
      </section>

      {/* Mobile Navigation */}
      <section className="lg:hidden flex items-center gap-2">
        <button
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 group"
          onClick={handleThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <MdOutlineLightMode
              size={20}
              className="text-blue-500 group-hover:rotate-45 transition-transform duration-300"
            />
          ) : (
            <MdOutlineDarkMode
              size={20}
              className="text-slate-700 group-hover:-rotate-45 transition-transform duration-300"
            />
          )}
        </button>

        <button
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          onClick={handleOpenMenu}
          aria-label={
            showNav ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showNav}
        >
          {showNav ? (
            <IoCloseSharp
              size={22}
              className="text-slate-700 dark:text-slate-300"
            />
          ) : (
            <IoMdMenu
              size={22}
              className="text-slate-700 dark:text-slate-300"
            />
          )}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
