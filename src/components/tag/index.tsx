import { FC } from "react";
import { TagType } from "../../@types/componentTypes";

const Tag: FC<TagType & JSX.IntrinsicElements["span"]> = ({ children }) => {
  return (
    <span className="px-3 py-1.5 text-white bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-full text-xs font-medium shadow-sm">
      {children}
    </span>
  );
};

export default Tag;
