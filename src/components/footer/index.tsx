import { FC } from "react";
import { Link } from "react-router-dom";
import { SocialMedia } from "..";


const Footer: FC<JSX.IntrinsicElements["footer"]> = () => {
  return (
    <footer className="relative bg-zinc-950 border-t border-dark-3 py-12">
      <div
        className="absolute inset-0
      pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-mono text-base text-white mb-3">
              <span className="text-emerald-400">~/</span>cihan
            </span>
            <p className="text-slate-400 text-sm text-center md:text-left">
              // building for the web
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-3 text-sm">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-center">
              <Link
                to="/projects"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-semibold mb-3 text-sm">Connect</h3>
            <div className="flex items-center gap-2">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cihan Erenler. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs flex items-center gap-1">
              <span className="font-mono">built with React + TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
