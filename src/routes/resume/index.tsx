import { FC } from "react";
import { Title, ResumeSection, ScrollTopOnMount } from "../../components";
import cv from "../../utils/cv";
import { MdOutlineEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import resume from "../../assets/Cihan Erenler CV.pdf";

const Resume: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main className="page dark:bg-dark-1 p-5 pt-0 pb-20">
      <ScrollTopOnMount />
      <Title>Resume</Title>
      <div className="max-w-[1200px] m-auto flex justify-end mb-5">
        <a className="btn" href={resume} download>
          <IoMdCloudDownload size={26} />{" "}
          <span className="pl-2"> Download PDF version</span>
        </a>
      </div>
      <section className="max-w-[1200px] bg-white m-auto rounded-3xl overflow-hidden shadow-2xl dark:bg-dark-3">
        <header className="lg:flex bg-slate-800 pt-5 lg:pt-0 lg:h-[250px]">
          <div className="lg:w-[250px] lg:h-[250px] w-[170px] m-auto lg:rounded-none rounded-full  bg-blue-100 dark:bg-slate-700 overflow-hidden">
            <img
              src={cv.image}
              alt="resume-image"
              className="w-full h-full object-cover scale-150 translate-y-14"
            />
          </div>
          <div className="p-8 flex flex-row justify-between flex-1">
            <div className="flex flex-col items-center lg:block flex-1">
              <h1 className="lg:text-4xl text-2xl font-bold text-slate-200 uppercase mb-2">
                {cv.name}
              </h1>
              <h2 className="lg:text-2xl text-xl  font-light text-slate-400 lg:mb-10">
                {cv.title}
              </h2>
              <h3 className="lg:flex hidden items-center justify-start gap-2 text-slate-400 mb-3">
                <MdOutlineEmail size={26} /> {cv.contact.email}
              </h3>
              <h3 className="lg:flex hidden items-center justify-start gap-2 text-slate-400 mb-3">
                <MdOutlinePhoneIphone size={26} />
                {cv.contact.phone}
              </h3>
            </div>
            <div className="lg:flex items-start flex-col hidden">
              <a
                href={cv.contact.linkedin}
                className="flex items-center justify-start gap-2 text-slate-400 mb-3"
                target="_blank"
              >
                <IoLogoLinkedin size={26} color="#fff" /> {cv.contact.linkedin}
              </a>
              <a
                href={cv.contact.github}
                className="flex items-center justify-start gap-2 text-slate-400"
                target="_blank"
              >
                <FaSquareGithub size={26} color="#fff" /> {cv.contact.github}
              </a>
            </div>
          </div>
        </header>
        <section className="flex p-5">
          <div className="flex-1">
            <ResumeSection title="About">
              <p className="font-light text-[1.125rem] dark:text-slate-300">
                {cv.about}
              </p>
            </ResumeSection>
            <ResumeSection title="Work Experience">
              {cv.workExperience.map((experience, index) => {
                return (
                  <section key={index} className="relative ml-2">
                    <span className="absolute w-[4px] bg-slate-300 h-full -left-[2px] top-3"></span>
                    <h3 className="relative -mt-1 flex items-center justify-start gap-2 font-bold text-slate-600 dark:text-white text-[1.125rem] ">
                      <span className="w-[15px] h-[15px] border-4 bg-white border-slate-500 rounded-full block top-0 left-0 -translate-x-1/2"></span>
                      {experience.position} |{" "}
                      <span className="uppercase">{experience.company}</span>
                    </h3>
                    <p className=" w-full pl-6 text-sm text-slate-500 dark:text-slate-400 py-2">
                      {experience.date}
                    </p>
                    <ul className="pl-10 pb-3 list-disc">
                      {experience.responsibilities.map((res, index) => {
                        return (
                          <li
                            key={index}
                            className="font-light dark:text-slate-300"
                          >
                            {res}
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                );
              })}
            </ResumeSection>
            <ResumeSection title="Education">
              <section>
                {cv.education.map((edu, index) => {
                  return (
                    <div key={index} className="mb-5">
                      <h3 className="font-bold text-slate-600 text-[1.125rem] dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="dark:text-slate-300">{edu.university}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.date}
                      </p>
                    </div>
                  );
                })}
              </section>
            </ResumeSection>

            <div className="lg:hidden block">
              <ResumeSection title="Skills & Tools">
                <ul className="list-disc pl-5">
                  {cv.codingSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="font-light dark:text-slate-300"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </ResumeSection>
              <ResumeSection title="Soft Skills">
                <ul className="list-disc pl-5">
                  {cv.personalSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="font-light dark:text-slate-300"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </ResumeSection>
              <div className="lg:hidden block">
                <ResumeSection title="Contact">
                  <h3 className="flex items-center justify-start gap-2 text-slate-600 dark:text-slate-300 mb-3">
                    <MdOutlineEmail size={26} color="#3b82f6" />{" "}
                    {cv.contact.email}
                  </h3>
                  <h3 className="flex items-center justify-start gap-2 text-slate-600 dark:text-slate-300 mb-3">
                    <MdOutlinePhoneIphone size={26} color="#3b82f6" />
                    {cv.contact.phone}
                  </h3>
                  <div className="flex items-start flex-col">
                    <a
                      href={cv.contact.linkedin}
                      className="flex items-center justify-start gap-2 text-slate-600 dark:text-slate-300 mb-3"
                      target="_blank"
                    >
                      <IoLogoLinkedin size={26} color="#3b82f6" />{" "}
                      {cv.contact.linkedin}
                    </a>
                    <a
                      href={cv.contact.linkedin}
                      className="flex items-center justify-start gap-2 text-slate-600 dark:text-slate-300"
                      target="_blank"
                    >
                      <FaSquareGithub size={26} color="#3b82f6" />{" "}
                      {cv.contact.github}
                    </a>
                  </div>
                </ResumeSection>
              </div>
            </div>
          </div>
          <div className="w-[350px] hidden lg:block">
            <ResumeSection title="Skills & Tools">
              <ul className="list-disc pl-5">
                {cv.codingSkills.map((skill, index) => {
                  return (
                    <li key={index} className="font-light dark:text-slate-300">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </ResumeSection>
            <ResumeSection title="Soft Skills">
              <ul className="list-disc pl-5">
                {cv.personalSkills.map((skill, index) => {
                  return (
                    <li key={index} className="font-light dark:text-slate-300">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </ResumeSection>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Resume;
