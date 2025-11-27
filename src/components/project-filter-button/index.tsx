import { FC } from "react";
import { ProjectFilterButtonType } from "../../@types/componentTypes";
import { motion } from "framer-motion";

const ProjectFileterButton: FC<
  ProjectFilterButtonType & JSX.IntrinsicElements["button"]
> = ({ children, selected, handleSelect }) => {
  const isSelected = selected === children;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSelect(children)}
      className={`relative rounded-lg py-2.5 px-5 text-sm font-medium transition-all overflow-hidden ${
        isSelected
          ? "text-white shadow-md"
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700"
      }`}
    >
      {isSelected && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-lg"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ProjectFileterButton;
