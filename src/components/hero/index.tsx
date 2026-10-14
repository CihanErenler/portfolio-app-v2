import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import photo from "../../assets/images/cihan-image.png";
import { Button } from "..";
import { FaReact, FaNode } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

type Token = [className: string, text: string];

const kw = "text-emerald-700 dark:text-emerald-400";
const str = "text-amber-700 dark:text-amber-300";
const id = "text-teal-700 dark:text-blue-300";
const fn = "text-yellow-700 dark:text-yellow-300";

const codeLines: Token[][] = [
  [
    [kw, "import"],
    ["", " { "],
    [id, "Developer"],
    ["", " } "],
    [kw, "from"],
    [str, " './portfolio'"],
  ],
  [],
  [
    [kw, "const"],
    [id, " skills"],
    ["", " = ["],
  ],
  [
    ["", "  "],
    [str, "'React'"],
    ["", ", "],
    [str, "'TypeScript'"],
    ["", ","],
  ],
  [
    ["", "  "],
    [str, "'Node.js'"],
    ["", ", "],
    [str, "'Express'"],
    ["", ","],
  ],
  [
    ["", "  "],
    [str, "'MongoDB'"],
    ["", ", "],
    [str, "'PostgreSQL'"],
  ],
  [["", "]"]],
  [],
  [
    [kw, "export function"],
    [fn, " buildAmazingThings"],
    ["", "() {"],
  ],
  [
    ["", "  "],
    [kw, "return"],
    [str, " 'Clean code + Great UX'"],
  ],
  [["", "}"]],
  [],
];

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-50 dark:bg-dark-1 py-12 md:py-20">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Profile and Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Profile Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border border-zinc-300 dark:border-dark-3 bg-zinc-200 dark:bg-dark-2">
              <img
                className="w-full h-full object-cover scale-[1.6] translate-y-7"
                src={photo}
                alt="Cihan Erenler - Full-stack developer"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <div>
                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                  $ whoami
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-zinc-900 dark:text-white">
                  Cihan Erenler
                </h1>
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

              <p className="text-sm md:text-base text-zinc-600 dark:text-slate-300 leading-relaxed max-w-xl">
                I craft modern web applications with clean code and thoughtful
                design. Specialized in building scalable solutions using the
                latest technologies.
              </p>

              {/* Tech stack indicators */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark-2 rounded-md border border-zinc-200 dark:border-dark-3 backdrop-blur-sm">
                  <FaReact className="text-cyan-500 text-lg" />
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    React
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark-2 rounded-md border border-zinc-200 dark:border-dark-3 backdrop-blur-sm">
                  <SiTypescript className="text-blue-600 text-lg" />
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark-2 rounded-md border border-zinc-200 dark:border-dark-3 backdrop-blur-sm">
                  <FaNode className="text-green-600 text-lg" />
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    Node.js
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-dark-2 rounded-md border border-zinc-200 dark:border-dark-3 backdrop-blur-sm">
                  <SiTailwindcss className="text-cyan-400 text-lg" />
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
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
                className="px-5 h-10 md:h-11 border border-zinc-300 dark:border-dark-3 text-zinc-700 dark:text-zinc-300 rounded-md font-mono text-sm md:text-base font-semibold hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150 active:scale-[0.98] flex items-center justify-center"
              >
                Get in Touch
              </RouterLink>
            </div>
          </div>

          {/* Right side - Code Preview Card */}
          <div className="hidden lg:block">
            <div className="relative group">
              {/* Code card */}
              <div className="relative bg-white dark:bg-dark-1 rounded-lg overflow-hidden shadow-xl dark:shadow-2xl border border-zinc-200 dark:border-zinc-800 font-mono text-sm">
                {/* Tab bar */}
                <div className="flex items-end bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5 px-4 py-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-1 border-t-2 border-emerald-500 -mb-px text-zinc-800 dark:text-zinc-200">
                    <SiTypescript className="text-emerald-600 dark:text-emerald-400" size={12} />
                    <span>portfolio.tsx</span>
                    <span className="ml-2 text-zinc-400 dark:text-zinc-600">×</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 text-zinc-400 dark:text-zinc-600">
                    <SiTypescript size={12} />
                    <span>projects.ts</span>
                  </div>
                </div>

                {/* Breadcrumb */}
                <div className="px-4 py-1.5 text-xs text-zinc-500 border-b border-zinc-200 dark:border-zinc-800/60">
                  src <span className="text-zinc-400 dark:text-zinc-700">›</span> portfolio.tsx
                </div>

                {/* Code content */}
                <div className="py-3 leading-7">
                  {codeLines.map((tokens, i) => {
                    const active = i === codeLines.length - 1;
                    return (
                      <div
                        key={i}
                        className={`flex ${active ? "bg-zinc-100 dark:bg-white/[0.04]" : ""}`}
                      >
                        <span
                          className={`w-12 pr-4 text-right select-none ${
                            active
                              ? "text-zinc-600 dark:text-zinc-400"
                              : "text-zinc-400 dark:text-zinc-600"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="whitespace-pre text-zinc-700 dark:text-slate-300">
                          {tokens.map(([cls, text], j) => (
                            <span key={j} className={cls}>
                              {text}
                            </span>
                          ))}
                          {active && (
                            <span className="inline-block w-2 h-4 -mb-0.5 bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-1 text-xs bg-emerald-600 dark:bg-emerald-700 text-white dark:text-emerald-50">
                  <span>main</span>
                  <span className="flex gap-4">
                    <span>Ln {codeLines.length}, Col 1</span>
                    <span>Spaces: 2</span>
                    <span>UTF-8</span>
                    <span>TypeScript React</span>
                  </span>
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
