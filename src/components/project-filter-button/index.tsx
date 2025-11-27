import { FC } from "react";
import { ProjectFilterButtonType } from "../../@types/componentTypes";

const ProjectFileterButton: FC<
  ProjectFilterButtonType & JSX.IntrinsicElements["button"]
> = ({ children, selected, handleSelect }) => {
  return (
    <button
      className={`${
        selected === children ? "filter-button-selected" : ""
      } rounded-full py-2 px-6 text-sm font-medium hover:bg-slate-300 bg-white dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 transition-all duration-200 hover:shadow-md active:scale-95 hover:-translate-y-0.5`}
      onClick={() => handleSelect(children)}
    >
      {children}
    </button>
  );
};

export default ProjectFileterButton;
