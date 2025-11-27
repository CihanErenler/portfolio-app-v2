import { FC, useEffect, useRef } from "react";
import { useAppContext } from "../../hooks";
import { NavLink } from "react-router-dom";
import navItems from "../../utils/navItems";
import { SocialMedia } from "..";

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
      className="h-0 overflow-hidden lg:hidden block bg-white/95 backdrop-blur-xl dark:bg-slate-900/95 text-slate-600 dark:text-slate-300 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 shadow-lg"
    >
      <div ref={innerRef} className="flex flex-col py-4 px-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="relative px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 capitalize group"
            onClick={() => setShowNav(false)}
          >
            {item.name}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-blue-600 dark:bg-blue-400 rounded-r group-[.active]:w-1 transition-all duration-300" />
          </NavLink>
        ))}

        {/* Divider */}
        <div className="py-3">
          <div className="h-px bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-2 py-2">
          <SocialMedia />
        </div>
      </div>
    </nav>
  );
};

export default SmallNav;
