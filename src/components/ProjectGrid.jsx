import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <article className="project__grid flex justify-center items-center h-full w-full text-center">
        <div className="text-gray-400 text-sm">
          <p className="text-2xl mb-2">X__X</p>
          <p>No matching projects</p>
          <p className="text-xs">for these technologies</p>
        </div>
      </article>
    );
  }

  return (
    <article className="project__grid grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </article>
  );
}

export default ProjectGrid;
