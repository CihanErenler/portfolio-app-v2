import { FC } from "react";
import photo from "../../assets/images/cihan-image.png";
import { Button, Link } from "..";

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-b from-blue-100 via-white to-purple-100 dark:bg-gradient-to-b dark:from-[#0f172a] dark:via-[#0b1220] dark:to-[#1e1b4b]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-700/30"></div>
      <div className="pointer-events-none absolute -bottom-10 right-10 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl dark:bg-indigo-700/30"></div>
      <div className="relative z-10 p-10 flex flex-col items-center justify-center">
        <div className="lg:w-3/4 w-full bg-white dark:bg-dark-1 h-full rounded-3xl border border-gray-200 dark:border-dark-3 flex items-center flex-col justify-between p-5 dark:text-white shadow-sm ">
          <div className="md:h-[200px] md:w-[200px] h-[150px] w-[150px] border border-slate-300 dark:border-dark-3 overflow-hidden bg-blue-100 dark:bg-slate-900 rounded-full ">
            <img
              className="profile-photo w-full h-full object-cover scale-[1.7] md:translate-y-20	translate-y-10"
              src={photo}
              alt="profile photo"
            />
          </div>
          <div className="flex-1 p-5 h-full text-slate-700 flex flex-col items-center justify-center">
            <h4 className="md:text-2xl text-xl mb-3 dark:text-slate-400">
              Hello, my name is
            </h4>
            <h1 className="md:text-5xl text-3xl font-extrabold mb-3 text-slate-800 dark:text-white">
              Cihan Erenler
            </h1>
            <p className="text-md mb-5 md:text-lg text-md font-light w-2/3 m-auto text-center dark:text-slate-400">
              I'm a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. Want to know how I may
              help your team? Check out my <Link to="/projects">projects</Link>{" "}
              and <Link to="/resume">resume</Link>.
            </p>
            <Button to="/contact">Contact me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
