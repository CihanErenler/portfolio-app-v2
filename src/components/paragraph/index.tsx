import { FC } from "react";

const Paragraph: FC<JSX.IntrinsicElements["p"]> = ({ children }) => {
  return (
    <p className="pb-5 m-auto text-justify text-md md:text-lg lg:text-xl font-light text-slate-600 dark:text-slate-300">
      {children}
    </p>
  );
};

export default Paragraph;
