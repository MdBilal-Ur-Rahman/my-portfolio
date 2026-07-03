import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AboutContent />
          <AboutInfo />
        </div>
      </div>
    </section>
  );
};

export default About;