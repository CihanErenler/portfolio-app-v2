import { FC } from "react";
import photo from "../../assets/images/cihan-image.png";
import { Button, Link } from "..";

const Hero: FC<JSX.IntrinsicElements["section"]> = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-tl from-green-100 via-blue-200 to-purple-200 dark:bg-gradient-to-tl dark:from-green-900 vdark:ia-blue-900 dark:to-purple-900 p-10">
      <div className="w-3/4 bg-white dark:bg-zinc-800 h-full rounded-3xl border border-gray-200 dark:border-gray-900 flex items-center flex-col justify-between p-5 dark:text-white">
        <div className="h-[200px] w-[200px] border border-slate-300 dark:border-gray-900 overflow-hidden bg-blue-100 dark:bg-slate-700 rounded-full ">
          <img
            className="profile-photo w-full h-full object-cover scale-[1.7] translate-y-20	"
            src={photo}
            alt="profile photo"
          />
        </div>
        <div className="flex-1 p-5 h-full text-slate-600 flex flex-col items-center justify-center">
          <h4 className="text-2xl mb-3">Hello, my name is</h4>
          <h1 className="text-5xl font-extrabold mb-3 text-slate-600">
            Cihan Erenler
          </h1>
          <p className="text-md mb-5 text-lg font-light w-2/3 m-auto text-center">
            I'm a full-stack developer specialised in frontend and backend
            development for complex scalable web apps. Want to know how I may
            help your team? Check out my <Link to="/projects">projects</Link>{" "}
            and <Link to="/projects">resume</Link>.
          </p>
          <Button to="/contact">Contact me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
