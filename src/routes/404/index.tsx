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
    <main
      className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-slate-900 px-6 py-16"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <ScrollTopOnMount />
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(71, 85, 105, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl dark:border-dark-3 dark:bg-dark-2">
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
