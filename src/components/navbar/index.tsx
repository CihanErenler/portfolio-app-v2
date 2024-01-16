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
    <nav className="flex items-center justify-between lg:px-8 px-3 h-14 bg-white max-w-screen dark:bg-dark-1 sticky top-0 z-50 border-b border-b-slate-200 dark:border-b-dark-3">
      <SocialMedia />
      <section className="gap-2 lg:flex hidden">
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
      <section className="lg:hidden flex">
        {showNav ? (
          <button className="icon-button" onClick={handleOpenMenu}>
            {theme === "dark" ? (
              <IoCloseSharp size={24} color="#b7b7b7" />
            ) : (
              <IoCloseSharp size={24} color="#334155" />
            )}
          </button>
        ) : (
          <button className="icon-button" onClick={handleOpenMenu}>
            {theme === "dark" ? (
              <IoMdMenu size={22} color="#b7b7b7" />
            ) : (
              <IoMdMenu size={22} color="#334155" />
            )}
          </button>
        )}

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
