import { FC, useEffect, useRef } from "react";
import { useAppContext } from "../../hooks";
import { NavLink } from "react-router-dom";
import navItems from "../../utils/navItems";

const SmallNav: FC<JSX.IntrinsicElements["nav"]> = () => {
  const { showNav, setShowNav } = useAppContext();
  const navRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showNav) {
      if (innerRef.current && navRef.current) {
        const { height } = innerRef.current.getBoundingClientRect();
        navRef.current.style.height = height + "px";
      }
    } else {
      if (navRef.current) {
        navRef.current.style.height = 0 + "px";
      }
    }
  }, [showNav]);

  return (
    <nav
      ref={navRef}
      className="h-0 overflow-hidden lg:hidden block bg-white/80 backdrop-blur-lg dark:bg-dark-1/80 text-slate-600 dark:text-slate-300 transition-all border-b border-slate-200 dark:border-dark-3"
    >
      <div ref={innerRef} className="flex flex-col capitalize">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="p-3 px-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-t border-slate-100 dark:border-slate-800"
            onClick={() => setShowNav(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default SmallNav;
