import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import personal from "../../data/personal";
import socialLinks from "../../data/socialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Logo */}
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-cyan-400">{personal.logo}</span>
          <span className="text-white">.dev</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
          {personal.description}
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
            className="rounded-full p-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            className="rounded-full p-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={socialLinks.email}
            aria-label="Send Email"
            className="rounded-full p-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;