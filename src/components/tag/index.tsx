import { FC } from "react";
import { TagType } from "../../@types/componentTypes";

const Tag: FC<TagType & JSX.IntrinsicElements["span"]> = ({ children }) => {
  return (
    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-600">
      {children}
    </span>
  );
};

export default Tag;
