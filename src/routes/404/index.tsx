import { FC } from "react";
import { ScrollTopOnMount, Button, Link as CustomLink } from "../../components";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const NotFound: FC<JSX.IntrinsicElements["main"]> = () => {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 404;

  const statusText = isRouteErrorResponse(error)
    ? error.statusText
    : "Page not found";

  const description =
    !error || typeof error === "string"
      ? error
      : isRouteErrorResponse(error)
      ? error.data
      : (error as { message?: string })?.message;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 via-white to-purple-100 px-6 py-16 dark:bg-gradient-to-b dark:from-[#0f172a] dark:via-[#0b1220] dark:to-[#1e1b4b]">
      <ScrollTopOnMount />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-700/30"></div>
      <div className="pointer-events-none absolute -bottom-10 right-10 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl dark:bg-indigo-700/30"></div>
      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/80 p-12 text-center shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-dark-2/90">
        <span className="rounded-full border border-slate-200/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:border-slate-600/80 dark:text-blue-300">
          {status === 404 ? "Not Found" : "Something Went Wrong"}
        </span>
        <h1 className="text-4xl font-extrabold text-slate-800 md:text-5xl dark:text-white">
          You&apos;ve discovered an empty space
        </h1>
        <p className="max-w-xl text-base text-slate-600 md:text-lg dark:text-slate-300">
          It looks like the page you&apos;re looking for has drifted away or
          never existed. Head back home to continue exploring or reach out if
          you need a hand finding what you were after.
        </p>
        <div className="flex flex-col items-center gap-3 text-sm text-blue-600 dark:text-blue-300">
          <span className="font-semibold">
            {status}
            {statusText ? ` · ${statusText}` : ""}
          </span>
          {description ? (
            <span className="max-w-md text-xs text-slate-500 dark:text-slate-400">
              {typeof description === "string"
                ? description
                : "An unexpected error occurred."}
            </span>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button to="/">Return home</Button>
          <Button to="/contact">Contact me</Button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Prefer browsing?{" "}
          <CustomLink to="/projects">Explore my projects</CustomLink> or{" "}
          <Link to="/resume" className="text-blue-500 dark:text-blue-300">
            view my resume
          </Link>
          .
        </p>
      </section>
    </main>
  );
};

export default NotFound;
