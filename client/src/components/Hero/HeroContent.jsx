import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import personal from "../../data/personal";
import socialLinks from "../../data/socialLinks";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left">
      {/* Greeting */}
      <p className="mb-3 text-base font-medium uppercase tracking-[0.2em] text-cyan-400 md:text-lg">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1 className="mb-5 bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl lg:text-7xl">
        {personal.name}
      </h1>

      {/* Animated Role */}
      <div className="mb-3 min-h-12 text-2xl font-semibold text-cyan-400 md:text-3xl">
        <TypeAnimation
          sequence={[
            personal.role,
            2000,
            "React Developer",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Status */}
      <p className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
        🟢 {personal.status}
      </p>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0">
        {personal.description}
      </p>

      {/* Action Buttons */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        <a
          href="#projects"
          title="View My Projects"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          View Projects
        </a>

        <a
          href={personal.resume}
          download="Md_Bilal_Ur_Rahman_Resume.pdf"
          title="Download Resume"
          className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-5 text-2xl lg:justify-start">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub Profile"
          title="GitHub"
          className="rounded-full p-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaGithub />
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn Profile"
          title="LinkedIn"
          className="rounded-full p-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaLinkedin />
        </a>

        <a
          href={socialLinks.email}
          aria-label="Send Email"
          title={`Email ${personal.name}`}
          className="rounded-full p-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;