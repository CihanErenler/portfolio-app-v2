import { FC } from "react";
import navItems from "../../utils/navItems";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useAppContext } from "../../hooks";
import { SocialMedia } from "..";
import { IoCloseSharp } from "react-icons/io5";

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
    <nav className="flex items-center justify-between lg:px-8 px-4 h-16 bg-zinc-50/80 backdrop-blur-md max-w-screen dark:bg-dark-1/80 sticky top-0 z-50 border-b border-zinc-200 dark:border-dark-3">
      {/* Logo / Brand */}
      <NavLink
        to="/"
        className="flex items-center gap-2 group transition-all duration-300"
      >
        <span className="font-mono text-sm md:text-base text-zinc-900 dark:text-zinc-100">
          <span className="text-emerald-600 dark:text-emerald-400">~/</span>
          cihan
          <span className="text-emerald-600 dark:text-emerald-400 animate-pulse">
            _
          </span>
        </span>
      </NavLink>

      {/* Desktop Navigation */}
      <section className="gap-1 lg:flex hidden items-center">
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.name}
            to={navItem.path}
            className="relative px-3 py-2 text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-md group"
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
