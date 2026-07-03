const ProjectCard = ({ project }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

      {/* Project Image */}
      <div className="h-44 overflow-hidden bg-slate-700">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = "/images/project-placeholder.png";
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            No Image Available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300 transition-colors duration-300 hover:bg-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex-1 rounded-lg bg-cyan-500 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="flex-1 rounded-lg border border-cyan-500 py-2 text-center text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;