import { FC } from "react";
import { Title, Link, SkillCard } from "..";
import skills from "../../utils/skills";

const Skills: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section
      className="relative px-10 pt-10 pb-20 bg-slate-50 dark:bg-dark-2"
      style={{
        backgroundImage: `radial-gradient(circle,rgb(164, 174, 187) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle,rgb(114, 125, 138) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(71, 85, 105, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="relative z-10">
        <Title>Skills Overview</Title>
        <p className="text-center w-2/3 m-auto md:text-lg text-md font-light mb-24 text-slate-700 dark:text-slate-400">
          I have more than 8 years' experience building rich web applications
          for clients all over the world. Below is a quick overview of my main
          technical skill sets and tools I use. Want to find out more about my
          experience? Check out my online <Link to="/resume">resume</Link>.
        </p>
        <div className="block gap-5 lg:flex">
          {skills.map((skill) => {
            return <SkillCard key={skill.name} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
