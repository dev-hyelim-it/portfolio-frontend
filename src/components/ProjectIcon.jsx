import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectIcon({ icon, title }) {
  if (!icon) return null;

  if (icon.type === "fa") {
    return (
      <FontAwesomeIcon
        icon={icon.value}
        className="project__card-icon"
        aria-label={title}
      />
    );
  }

  return (
    <img
      src={icon.value}
      alt={`${title} logo`}
      className="project__card-icon-img"
      style={{ width: icon.size || "80%" }}
      loading="lazy"
    />
  );
}

export default ProjectIcon;
