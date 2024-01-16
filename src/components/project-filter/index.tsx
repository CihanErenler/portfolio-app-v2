import { FC } from "react";
import { ProjectFileterButton } from "..";
import projects from "../../utils/projects";

type ProjectFilterType = {
  selected: string;
  handleSelect: (name: string) => void;
};

const ProjectFilter: FC<ProjectFilterType & JSX.IntrinsicElements["div"]> = ({
  selected,
  handleSelect,
}) => {
  const createFilter = () => {
    const list = projects.reduce((accumulator: string[], currentValue) => {
      accumulator = [...accumulator, ...currentValue.filter];
      return accumulator;
    }, []);
    return Array.from(new Set(["All", ...list]));
  };

  return (
    <div className="flex items-center flex-wrap justify-center gap-2 pt-8 pb-4">
      {createFilter().map((filter, i) => (
        <ProjectFileterButton
          key={i}
          selected={selected}
          handleSelect={handleSelect}
        >
          {filter}
        </ProjectFileterButton>
      ))}
    </div>
  );
};

export default ProjectFilter;
