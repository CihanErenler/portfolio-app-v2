import { FC } from "react";
import { Title, ProjectCard, Button } from "..";
import projects from "../../utils/projects";

const FeaturedProjets: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="bg-white py-10">
      <Title>Featured Projects</Title>
      <div className="flex p-8 gap-5">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button to="/projects">View All Projects</Button>
      </div>
    </section>
  );
};

export default FeaturedProjets;
