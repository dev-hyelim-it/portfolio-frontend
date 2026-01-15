import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            className={`project__card-icon-box project--icon-box-${project.className}`}
          >
            {project.iconType === "FontAwesome" ? (
              <FontAwesomeIcon
                icon={project.icon}
                className="project__card-icon"
              />
            ) : (
              <img
                src={project.icon}
                alt={project.desc}
                className={`project__card-icon-img project__card-icon-${project.className}`}
              />
            )}
          </div>
          <img
            src={project.img}
            alt={project.title}
            className="project__card-img w-full object-cover"
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
