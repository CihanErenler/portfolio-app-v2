import { FC } from "react";
import { Hero, FeaturedProjets, Skills } from "../../components";

const Root: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section>
      <Hero />
      <Skills />
      <FeaturedProjets />
    </section>
  );
};

export default Root;
