import personal from "../../data/personal";

const AboutContent = () => {
  return (
    <div className="flex-1 px-6 md:px-8">
      {/* Section Title */}
      <h2 className="mb-6 text-4xl font-bold">
        About <span className="text-cyan-400">Me</span>
      </h2>

      {/* Introduction */}
      <p className="mb-5 max-w-2xl leading-8 text-slate-300">
        Hello! I'm{" "}
        <span className="font-semibold text-white">
          {personal.name}
        </span>
        , a passionate{" "}
        <span className="text-cyan-400">
          {personal.role}
        </span>{" "}
        who enjoys building modern, responsive, and scalable web
        applications.
      </p>

      {/* Description */}
      <p className="mb-5 max-w-2xl leading-8 text-slate-300">
        {personal.description}
      </p>

      {/* Career Goal */}
      <p className="mb-6 max-w-2xl leading-8 text-slate-300">
        My goal is to continuously improve my development skills,
        contribute to impactful real-world projects, and grow into a
        professional Full Stack Developer while delivering clean,
        efficient, and user-focused web solutions.
      </p>

      {/* Status Badge */}
      <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
        🟢 {personal.status}
      </div>
    </div>
  );
};

export default AboutContent;