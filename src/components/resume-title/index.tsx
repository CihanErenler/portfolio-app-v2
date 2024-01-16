import { FC } from "react";

const ResumeTitle: FC<
  { children: React.ReactNode } & JSX.IntrinsicElements["h1"]
> = ({ children }) => {
  return (
    <h1 className="uppercase  pb-2 mb-6 text-xl font-bold text-slate-600 border-b border-b-slate-600 dark:border-b-blue-200 dark:text-blue-200">
      {children}
    </h1>
  );
};

export default ResumeTitle;
