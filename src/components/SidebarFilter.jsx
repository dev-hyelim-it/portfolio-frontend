import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

import springBootLogo from "../assets/images/spring_boot_logo.svg";
import springLegacyLogo from "../assets/images/spring_logo.svg";
import kotlinLogo from "../assets/images/kotlin_logo.svg";
import javaLogo from "../assets/images/java_logo.svg";
import scssLogo from "../assets/images/scss_logo.svg";

const techList = [
  {
    name: "spring-boot",
    className: "spring-boot",
    icon: springBootLogo,
    iconType: "img",
  },
  {
    name: "spring-legacy",
    className: "spring-legacy",
    icon: springLegacyLogo,
    iconType: "img",
  },
  { name: "React", className: "react", icon: faReact, iconType: "FontAwesome" },
  { name: "Vue", className: "vue", icon: faVuejs, iconType: "FontAwesome" },
  {
    name: "Kotlin",
    className: "kotlin",
    icon: kotlinLogo,
    iconType: "img",
  },
  { name: "Java", className: "java", icon: javaLogo, iconType: "img" },
  { name: "CSS", className: "css", icon: faCss3, iconType: "FontAwesome" },
  { name: "Scss", className: "scss", icon: scssLogo, iconType: "img" },
];

function SidebarFilter({ selected, setSelected }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const toggleCheckbox = (tech) => {
    setSelected((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };
  const listDisplay = isMobile ? (open ? "flex" : "hidden") : "flex";

  return (
    <aside className="project__sub-tab flex">
      <button
        type="button"
        onClick={() => isMobile && setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="project-filter-list"
        className="project__sub-title-box w-full flex items-center gap-2 text-left text-white mb-2 fira-code-semibold focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`project__sub-tab-icon transition-transform duration-200 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
        <h2 className="toggle-title">Projects</h2>
      </button>
      <section className="project__sub-tab-box">
        <ul
          id="project-filter-list"
          aria-hidden={isMobile ? !open : false}
          className={`${listDisplay} flex-col space-y-1`}
        >
          {techList.map((tech) => (
            <li
              key={tech.name}
              className="project__sub-tab-list flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={tech.name}
                checked={selected.includes(tech.name)}
                onChange={() => toggleCheckbox(tech.name)}
                className="project__input"
              />
              {tech.iconType === "FontAwesome" ? (
                <FontAwesomeIcon
                  icon={tech.icon}
                  className={`project__lang-icon project__icon-${tech.className}`}
                />
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`project__lang-icon project__icon-${tech.className}`}
                />
              )}
              <label className="project__label" htmlFor={tech.name}>
                {tech.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default SidebarFilter;
