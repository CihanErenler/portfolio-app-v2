import { FC } from "react";
import photo from "../../assets/images/cihan-image.png";
import { Button, Link } from "..";

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className=" dark:bg-dark-1">
      <div className=" bg-gradient-to-tl from-green-100 via-blue-200 to-purple-200 dark:bg-gradient-to-tl dark:from-green-950 dark:ia-blue-950 dark:to-purple-950  p-10 flex flex-col items-center justify-center dark:bg-opacity-10">
        <div className="lg:w-3/4 w-full bg-white dark:bg-dark-1 h-full rounded-3xl border border-gray-200 dark:border-dark-3 flex items-center flex-col justify-between p-5 dark:text-white ">
          <div className="md:h-[200px] md:w-[200px] h-[150px] w-[150px] border border-slate-300 dark:border-dark-3 overflow-hidden bg-blue-100 dark:bg-slate-900 rounded-full ">
            <img
              className="profile-photo w-full h-full object-cover scale-[1.7] md:translate-y-20	translate-y-10"
              src={photo}
              alt="profile photo"
            />
          </div>
          <div className="flex-1 p-5 h-full text-slate-600 flex flex-col items-center justify-center">
            <h4 className="md:text-2xl text-xl mb-3 dark:text-slate-400">
              Hello, my name is
            </h4>
            <h1 className="md:text-5xl text-3xl font-extrabold mb-3 text-slate-600 dark:text-white">
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
