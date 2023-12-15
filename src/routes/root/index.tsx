import { FC } from "react";
import { Hero } from "../../components";

const Root: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="px-8 py-5">
      <Hero />
    </section>
  );
};

export default Root;
