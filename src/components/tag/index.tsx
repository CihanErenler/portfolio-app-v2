import { FC } from "react";
import { TagType } from "../../@types/componentTypes";

const Tag: FC<TagType & JSX.IntrinsicElements["span"]> = ({ children }) => {
  return (
    <span className="px-2 py-1 text-white bg-slate-600 dark:bg-slate-800 rounded-full text-xs dark:border-dark-3">
      {children}
    </span>
  );
};

export default Tag;
