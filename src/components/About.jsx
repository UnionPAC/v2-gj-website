import benefits from "../data/benefits";
import Benefit from "./Benefit";

const About = () => {
  return (
    <section id="about" className="max-w-[60em] mx-auto py-24 px-4">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <p className="mb-6 lg:text-lg text-slate-500">Curious to know more?</p>
        <div></div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Learn <span className="text-[#9FFF8A]">about</span> me 👨‍💻
        </h3>
      </div>
      <div
        id="about-points"
        className="flex flex-col space-y-16 md:px-6 lg:px-8"
      >
        {benefits.map((benefit, index) => {
          return <Benefit key={index} benefit={benefit} index={index} />;
        })}
      </div>
    </section>
  );
};

export default About;
