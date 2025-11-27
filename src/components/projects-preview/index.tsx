import { FC } from "react";
import { Title, ProjectCard, Button } from "..";
import { ProjectPreviewType } from "../../@types/componentTypes";

const ProjectPreview: FC<
  ProjectPreviewType & JSX.IntrinsicElements["section"]
> = ({ projects, title }) => {
  return (
    <section className="bg-white pt-10 pb-20 dark:bg-dark-1 border-t border-b border-slate-200 dark:border-slate-800">
      <Title>{title}</Title>
      <div className="block p-2 lg:p-8 gap-5 lg:flex">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            preview={project.preview || ""}
          />
        ))}
      </div>
      <div className="flex items-center justify-center pt-8">
        <Button to="/projects">View All Projects</Button>
      </div>
    </section>
  );
};

export default ProjectPreview;
