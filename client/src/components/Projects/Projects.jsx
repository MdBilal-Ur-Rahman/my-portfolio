
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A collection of projects showcasing my expertise in React, MERN
            Stack, responsive UI development, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;