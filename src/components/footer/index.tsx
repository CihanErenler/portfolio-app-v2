import { FC } from "react";
import { Link } from "react-router-dom";
import { SocialMedia } from "..";
import { FaCode, FaHeart } from "react-icons/fa6";

const Footer: FC<JSX.IntrinsicElements["footer"]> = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 border-t border-slate-800 py-12">
      {/* Subtle gradient */}
      <div
        className="absolute inset-0
      pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <FaCode className="text-white text-lg" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">CE</span>
                <span className="text-slate-400 text-sm ml-1 font-mono">
                  ./dev
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left">
              Building modern web experiences
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
              <span>Built with</span>
              <FaHeart className="text-red-500 text-xs" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
