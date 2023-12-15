import { FC } from "react";
import navItems from "../../utils/navItems";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar: FC<JSX.IntrinsicElements["nav"]> = () => {
  return (
    <nav className="flex items-center justify-between mx-8 h-14">
      <section>
        <NavLink to="/">
          <img className="w-11" src={logo} alt="logo" />
        </NavLink>
      </section>
      <section className="flex gap-2">
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.name}
            to={navItem.path}
            className="h-10 w-auto px-3 active:scale-95 transition-transform flex items-center justify-center rounded-full capitalize hover:bg-accent-1 text-slate-700 aria-[current=page]:bg-sky-100 aria-[current=page]:text-sky-600"
          >
            {navItem.name}
          </NavLink>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
