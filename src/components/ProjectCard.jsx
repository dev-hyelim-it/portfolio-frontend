import ProjectIcon from "./ProjectIcon";

function ProjectCard({ project }) {
  return (
    <section className="project__card-section flex rounded border-gray-700 max-w-xs shadow p-4">
      <p className="project__card-title fira-code-bold">
        {project.title}
        <br />
        <span className="text-gray-400 fira-code-regular">
          {project.tech.map((t) => `_${t}`).join(" ")}
        </span>
      </p>

      <div className="project__card-box">
        <div className="project__card-top-box flex">
          <div
            className={`project__card-icon-box project--icon-box-${project.theme}`}
          >
            <ProjectIcon icon={project.icon} title={project.title} />
          </div>

          <img
            src={project.thumbnail}
            alt={project.title}
            className="project__card-img w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="project__card-bottom-box">
          <p className="project__card-text orbit-regular">{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project__card-link"
          >
            view-project
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
