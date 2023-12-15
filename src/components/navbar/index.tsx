import { FC } from "react";
import navItems from "../../utils/navItems";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

type NavbarType = {
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
  theme: null | string;
};

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
    <nav className="flex items-center justify-between px-8 h-14 bg-white w-screen dark:bg-zinc-900">
      <section>
        <NavLink to="/">
          <img className="w-11" src={logo} alt="logo" />
        </NavLink>
      </section>
      <section className="flex gap-2">
        {navItems.map((navItem) => (
          <NavLink key={navItem.name} to={navItem.path} className="nav-link">
            {navItem.name}
          </NavLink>
        ))}
        <button className="icon-button" onClick={handleThemeToggle}>
          {theme === "dark" ? (
            <MdOutlineLightMode size={22} color="#fff" />
          ) : (
            <MdOutlineDarkMode size={22} />
          )}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
