import skills from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern, responsive and scalable web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;