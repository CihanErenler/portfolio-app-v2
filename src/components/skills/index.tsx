import { FC } from "react";
import { Title } from "..";
import { Link } from "..";

const Skills: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="p-8">
      <Title>Skills Overview</Title>
      <p className="text-center w-2/3 m-auto text-lg font-light">
        I have more than 8 years' experience building rich web applications for
        clients all over the world. Below is a quick overview of my main
        technical skill sets and tools I use. Want to find out more about my
        experience? Check out my online <Link to="/resume">resume</Link>.
      </p>
    </section>
  );
};

export default Skills;
