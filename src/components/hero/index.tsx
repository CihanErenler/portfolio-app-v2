import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import photo from "../../assets/images/cihan-image.png";
import { Button } from "..";
import { FaReact, FaNode } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 py-12 md:py-16">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Profile and Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900">
                <img
                  className="w-full h-full object-cover scale-[1.6] translate-y-7"
                  src={photo}
                  alt="Cihan Erenler - Full-stack developer"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <div>
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-1.5">
                  &lt;developer&gt;
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  Cihan Erenler
                </h1>
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mt-1.5">
                  &lt;/developer&gt;
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center lg:justify-start">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">
                    const
                  </span>
                  <span className="font-semibold">role</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "Full-Stack Developer"
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center lg:justify-start">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">
                    const
                  </span>
                  <span className="font-semibold">focus</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "Web Applications"
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                I craft modern web applications with clean code and thoughtful
                design. Specialized in building scalable solutions using the
                latest technologies.
              </p>

              {/* Tech stack indicators */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <FaReact className="text-cyan-500 text-lg" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    React
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <SiTypescript className="text-blue-600 text-lg" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <FaNode className="text-green-600 text-lg" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Node.js
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <SiTailwindcss className="text-cyan-400 text-lg" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/projects">View My Work</Button>
              <RouterLink
                to="/contact"
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 hover:shadow-lg active:scale-95 text-center flex items-center justify-center"
              >
                Get in Touch
              </RouterLink>
            </div>
          </div>

          {/* Right side - Code Preview Card */}
          <div className="hidden lg:block">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />

              {/* Code card */}
              <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 ml-2 font-mono">
                    portfolio.tsx
                  </span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm md:text-sm space-y-2">
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">1</span>
                    <span>
                      <span className="text-purple-400">import</span>
                      <span className="text-slate-300"> &#123; </span>
                      <span className="text-blue-400">Developer</span>
                      <span className="text-slate-300"> &#125; </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-emerald-400"> './portfolio'</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">2</span>
                    <span className="text-slate-600">&nbsp;</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">3</span>
                    <span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-300"> skills</span>
                      <span className="text-slate-300"> = [</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">4</span>
                    <span className="pl-4">
                      <span className="text-emerald-400">'React'</span>
                      <span className="text-slate-300">, </span>
                      <span className="text-emerald-400">'TypeScript'</span>
                      <span className="text-slate-300">,</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">5</span>
                    <span className="pl-4">
                      <span className="text-emerald-400">'Node.js'</span>
                      <span className="text-slate-300">, </span>
                      <span className="text-emerald-400">'Express'</span>
                      <span className="text-slate-300">,</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">6</span>
                    <span className="pl-4">
                      <span className="text-emerald-400">'MongoDB'</span>
                      <span className="text-slate-300">, </span>
                      <span className="text-emerald-400">'PostgreSQL'</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">7</span>
                    <span className="text-slate-300">]</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">8</span>
                    <span className="text-slate-600">&nbsp;</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">9</span>
                    <span>
                      <span className="text-purple-400">export</span>
                      <span className="text-slate-300"> </span>
                      <span className="text-purple-400">function</span>
                      <span className="text-yellow-300">
                        {" "}
                        buildAmazingThings
                      </span>
                      <span className="text-slate-300">() &#123;</span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">10</span>
                    <span className="pl-4">
                      <span className="text-purple-400">return</span>
                      <span className="text-slate-300"> </span>
                      <span className="text-emerald-400">
                        'Clean code + Great UX'
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">11</span>
                    <span className="text-slate-300">&#125;</span>
                  </div>

                  {/* Cursor blink */}
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none">12</span>
                    <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
