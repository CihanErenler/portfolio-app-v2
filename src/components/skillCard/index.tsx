import { FC } from "react";
import { SkillCardType } from "../../@types/componentTypes";
import { FaCheck } from "react-icons/fa6";

const SkillCard: FC<SkillCardType & JSX.IntrinsicElements["section"]> = ({
  name,
  icon,
  items,
}) => {
  return (
    <section className="min-h-[300px] bg-white flex-1 p-14 relative rounded-2xl border border-slate-200 dark:bg-dark-2 dark:border-dark-3 mb-16 lg:mb-0">
      <div className="bg-blue-500 md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full flex items-center justify-center absolute md:top-[-50px] top-[-35px] left-1/2 -translate-x-1/2">
        {icon}
      </div>
      <h2 className="text-center mb-5 text-lg text-slate-600 font-bold capitalize dark:text-white">
        {name}
      </h2>
      <div>
        {items.map((item) => {
          return (
            <div
              key={item}
              className="text-slate-600 text-md mb-2 font-normal flex gap-2 items-center justify-start"
            >
              <span className="inline">
                <FaCheck className="fill-blue-600" />
              </span>
              <span className="dark:text-slate-400">{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillCard;
