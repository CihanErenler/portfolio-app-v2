import { FC } from "react";
import { TitleType } from "../../@types/componentTypes";

const Title: FC<TitleType & JSX.IntrinsicElements["h1"]> = ({ children }) => {
  return (
    <h1 className="md:text-4xl text-3xl text-center font-bold text-slate-600 py-5 dark:text-white">
      {children}
    </h1>
  );
};

export default Title;
