import { FC } from "react";
import { TitleType } from "../../@types/componentTypes";

const Title: FC<TitleType & JSX.IntrinsicElements["h1"]> = ({ children }) => {
  return (
    <h1 className="text-4xl text-center font-bold text-slate-600 py-5">
      {children}
    </h1>
  );
};

export default Title;
