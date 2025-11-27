import { FC } from "react";

export const ProjectCardSkeleton: FC = () => {
  return (
    <div className="flex-1 rounded-xl overflow-hidden border border-slate-300 dark:border-dark-3 dark:bg-dark-2 bg-white mb-5 lg:mb-0 animate-pulse">
      <div className="h-[250px] bg-slate-200 dark:bg-slate-700" />
      <div className="p-5">
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-3 w-3/4 mx-auto" />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16" />
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20" />
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16" />
        </div>
      </div>
    </div>
  );
};

export const SingleProjectSkeleton: FC = () => {
  return (
    <main
      className="relative bg-gray-50 dark:bg-slate-900 px-8 page"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(71, 85, 105, 0.3) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <section className="relative z-10 max-w-[900px] m-auto animate-pulse">
        <div className="pt-16 pb-10">
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto mb-4" />
        </div>
        <div className="w-full m-auto md:h-[400px] h-[300px] mb-10 rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-3 bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-4 mb-6">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6" />
        </div>
        <div className="flex gap-5 py-3">
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-full w-40" />
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-full w-32" />
        </div>
      </section>
    </main>
  );
};

export default ProjectCardSkeleton;
