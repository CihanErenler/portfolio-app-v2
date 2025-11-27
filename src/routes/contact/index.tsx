import { FC } from "react";
import { Title, Link, SocialMedia, ContactForm } from "../../components";
import photo from "../../assets/images/cihan-image.png";

const Contact: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main
      className="relative page dark:bg-dark-2 bg-gray-50 p-8"
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
      <div className="relative z-10">
        <Title>Contact</Title>
        <section className="card flex items-center justify-center flex-col">
          <div className="w-[150px] h-[150px] rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden mb-8 border-4 border-slate-200 dark:border-slate-600">
            <img
              src={photo}
              alt="contact-photo"
              className="scale-150 translate-y-10"
            />
          </div>
          <p className="max-w-[700px] text-center font-thin md:text-lg text-base">
            If you want to contact me please use the form below to get in touch.
            If you want to know how I work check out my{" "}
            <Link to="/projects">project</Link> case studies and{" "}
            <Link to="/resume">resume</Link>.
            <span className="py-5 font-bold text-slate-600 block dark:text-slate-500">
              You can also find me on the following channels
            </span>
          </p>
          <SocialMedia />
        </section>
        <Title>Get In Touch</Title>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
