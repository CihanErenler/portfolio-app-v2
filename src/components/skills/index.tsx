import { FC } from "react";
import { SkillCard, Link } from "..";
import skills from "../../utils/skills";
import { FaLayerGroup } from "react-icons/fa6";

const Skills: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 dark:from-slate-950 dark:via-purple-950/10 dark:to-slate-950 py-16 md:py-20 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <FaLayerGroup className="text-blue-600 dark:text-blue-400 text-xl" />
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
              &lt;tech-stack&gt;
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills Overview
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I have more than 8 years' experience building rich web applications
            for clients all over the world. Below is a quick overview of my main
            technical skill sets and tools I use. Want to find out more about my
            experience? Check out my online <Link to="/resume">resume</Link>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            return <SkillCard key={skill.name} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
