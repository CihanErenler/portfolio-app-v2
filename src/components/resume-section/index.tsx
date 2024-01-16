import { FC } from "react";
import { ResumeSectionType } from "../../@types/componentTypes";
import { ResumeTitle } from "..";

const ResumeSection: FC<
  ResumeSectionType & JSX.IntrinsicElements["section"]
> = ({ title, children }) => {
  return (
    <section className="p-5">
      <ResumeTitle>{title}</ResumeTitle>
      <div>{children}</div>
    </section>
  );
};

export default ResumeSection;
