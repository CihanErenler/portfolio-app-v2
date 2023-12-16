import { FC } from "react";
import { Hero, Projects, Skills } from "../../components";

const Root: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section>
      <Hero />
      <Skills />
      <Projects />
    </section>
  );
};

export default Root;
