import { FC, useEffect, useState } from "react";
import {
  Title,
  Paragraph,
  SecondaryTitle,
  Button,
  ProjectPreview,
} from "../../components";
import { useParams } from "react-router-dom";
import projects from "../../utils/projects";
import { ProjectType } from "../../@types/componentTypes";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const SingleProject: FC<JSX.IntrinsicElements["main"]> = () => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const project: ProjectType = projects.find(
      (project) => project.id === +id!
    )!;
    setProject(project);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const porjectsToShow = projects
    .filter((project) => project.id !== +id!)
    .slice(0, 3);

  if (!project) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="bg-white dark:bg-dark-1 px-8 page">
      <section className="max-w-[900px] m-auto">
        <Title>{project.title}</Title>
        <div className="w-full m-auto md:h-[400px] h-[300px] mb-10 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt="project-image"
          />
        </div>
        <Paragraph>{project.desc}</Paragraph>
        <div className="flex gap-5 py-3">
          <Button href={project.preview}>
            <LuExternalLink size={20} />
            <span className="pl-2">Preview Live</span>
          </Button>
          <Button href={project.github}>
            <LuGithub size={20} />
            <span className="pl-2">Github</span>
          </Button>
        </div>
        <SecondaryTitle>Project Background</SecondaryTitle>
        <Paragraph>{project.background}</Paragraph>
        <div className="bg-blue-100 rounded-lg p-5 dark:bg-dark-2">
          <Paragraph>Technologies used:</Paragraph>
          {project.filter.map((item) => {
            return (
              <div
                key={item}
                className="text-slate-600 text-md md:text-lg mb-2 font-normal flex gap-2 items-center justify-start"
              >
                <span className="inline">
                  <FaCheck className="fill-blue-600" />
                </span>
                <span className="dark:text-slate-300">{item}</span>
              </div>
            );
          })}
        </div>

        <SecondaryTitle>Challanges</SecondaryTitle>
        <Paragraph>{project.challenges}</Paragraph>
        <SecondaryTitle>Outcomes</SecondaryTitle>
        <Paragraph>{project.actionsOutcomes}</Paragraph>
      </section>
      <ProjectPreview title="Other Projects" projects={porjectsToShow} />
    </main>
  );
};

export default SingleProject;
