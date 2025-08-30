import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function TabView({ section }) {
  return (
    <div className="tab-title-box flex items-center h-10 px-4 text-sm">
      {/* <span className="text-yellow-400">_about-me</span> */}
      <span className="tab-title-box--text">
        {section}
        <FontAwesomeIcon icon={faXmark} className="icon-close" />
      </span>
    </div>
  );
}

export default TabView;
