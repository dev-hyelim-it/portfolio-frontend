import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function ContactSidebar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const listDisplay = isMobile ? (open ? "flex" : "hidden") : "flex";

  return (
    <aside className="contact__tab">
      <button
        type="button"
        onClick={() => isMobile && setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="contacts-list"
        className="fira-code-regular contacts__tab-title w-full flex items-center gap-2 text-left focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`contacts__sub-tab-icon transition-transform duration-200 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
        <h2 className="toggle-title">Contacts</h2>
      </button>
      <ul
        id="contacts-list"
        aria-hidden={isMobile ? !open : false}
        className={`contacts__tab ${listDisplay} flex-col`}
      >
        <li className="flex items-center gap-2 contacts__sub-tab is-hover">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="contacts__sub-tab-icon"
          />
          dev.hyelim.it@gmail.com
        </li>
        <li className="flex items-center gap-2 contacts__sub-tab is-hover">
          <FontAwesomeIcon icon={faPhone} className="contacts__sub-tab-icon" />
          +82 10 4617 5278
        </li>
      </ul>
    </aside>
  );
}

export default ContactSidebar;
