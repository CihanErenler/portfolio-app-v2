import { FC } from "react";

const SecondaryTitle: FC<JSX.IntrinsicElements["h2"]> = ({ children }) => {
  return (
    <h2 className="text-2xl  m-auto my-5 font-bold text-slate-600 dark:text-white">
      {children}
    </h2>
  );
};

export default SecondaryTitle;
