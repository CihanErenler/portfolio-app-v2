import { FC } from "react";
import { Hero, ProjectPreview, Skills } from "../../components";
import projects from "../../utils/projects";

const Root: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section>
      <Hero />
      <Skills />
      <ProjectPreview
        title="Featured Projects"
        projects={projects.slice(0, 3)}
      />
    </section>
  );
};

export default Root;
