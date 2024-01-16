import { FC } from "react";
import { ProjectFilterButtonType } from "../../@types/componentTypes";

const ProjectFileterButton: FC<
  ProjectFilterButtonType & JSX.IntrinsicElements["button"]
> = ({ children, selected, handleSelect }) => {
  return (
    <button
      className={`${
        selected === children ? "filter-button-selected" : ""
      } rounded-md py-1 px-5 text-sm hover:bg-slate-300 bg-slate-200 dark:bg-slate-700 dark:text-white `}
      onClick={() => handleSelect(children)}
    >
      {children}
    </button>
  );
};

export default ProjectFileterButton;
