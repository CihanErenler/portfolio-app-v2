import { FC } from "react";
import photo from "../../assets/images/cihan-image.png";
import { Button, Link } from "..";

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 dark:bg-dark-2"
      style={{
        backgroundImage: `radial-gradient(circle,rgb(164, 174, 187) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle,rgb(114, 125, 138) 1px, transparent 1px)`,
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
