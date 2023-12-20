import { FC } from "react";
import { Title, Link, SkillCard } from "..";
import skills from "../../utils/skills";

const Skills: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="p-10">
      <Title>Skills Overview</Title>
      <p className="text-center w-2/3 m-auto text-lg font-light mb-24 text-slate-600">
        I have more than 8 years' experience building rich web applications for
        clients all over the world. Below is a quick overview of my main
        technical skill sets and tools I use. Want to find out more about my
        experience? Check out my online <Link to="/resume">resume</Link>.
      </p>
      <div className="flex gap-5">
        {skills.map((skill) => {
          return <SkillCard key={skill.name} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
