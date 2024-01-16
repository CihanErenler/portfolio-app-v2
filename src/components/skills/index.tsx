import { FC } from "react";
import { Title, Link, SkillCard } from "..";
import skills from "../../utils/skills";

const Skills: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="px-10 pt-10 pb-20 bg-[#f7f8fa] dark:bg-dark-1">
      <Title>Skills Overview</Title>
      <p className="text-center w-2/3 m-auto md:text-lg text-md font-light mb-24 text-slate-600 dark:text-slate-400">
        I have more than 8 years' experience building rich web applications for
        clients all over the world. Below is a quick overview of my main
        technical skill sets and tools I use. Want to find out more about my
        experience? Check out my online <Link to="/resume">resume</Link>.
      </p>
      <div className="block gap-5 lg:flex">
        {skills.map((skill) => {
          return <SkillCard key={skill.name} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
