import SidebarFilter from "../components/SidebarFilter";
import ProjectGrid from "../components/ProjectGrid";
import { useState } from "react";
import data from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const [selected, setSelected] = useState([]);

  const filtered =
    selected.length === 0
      ? data
      : data.filter((p) =>
          p.tech.some((t) =>
            selected.map((s) => s.toLowerCase()).includes(t.toLowerCase())
          )
        );

  return (
    <article className="project flex">
      <h1 className="page__title">_projects</h1>
      <SidebarFilter selected={selected} setSelected={setSelected} />
      <main className="project__content-box flex p-6 overflow-y-auto">
        <div className="tab-title-box flex">
          <h2 className="text-lg text-blue-300 flex mb-4 tab-title-box--text">
            {selected.length === 0 ? "all;" : selected.join("; ") + ";"}
            <FontAwesomeIcon icon={faXmark} className="icon-close" />
          </h2>
        </div>
        <ProjectGrid projects={filtered} />
      </main>
    </article>
  );
}

export default Projects;
