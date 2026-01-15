import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faFolderClosed,
  faEnvelope,
  faPhone,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function ExplorerSidebar({ active, onSelect }) {
  const sections = ["personal-info", "professional-info", "hobbies-info"];

  // 934px 이하 = 모바일
  const isMobile = useMediaQuery({ maxWidth: 934 });

  // 데스크톱에선 항상 펼침, 모바일에선 기본 닫힘
  const [contactsOpen, setContactsOpen] = useState(false);
  useEffect(() => {
    setContactsOpen(!isMobile);
  }, [isMobile]);

  const toggleContacts = () => {
    if (isMobile) setContactsOpen((v) => !v); // 모바일에서만 토글
  };

  // display 전환 클래스 (hidden ↔ flex)
  const contactsDisplayCls = isMobile
    ? contactsOpen
      ? "flex"
      : "hidden"
    : "flex";

  return (
    <aside className="about__tab">
      <ul className="space-y-2 text-sm about__info-tab">
        {sections.map((sec) => (
          <li
            key={sec}
            onClick={() => onSelect(sec)}
            className={`cursor-pointer capitalize flex items-center gap-2 contacts__sub-tab is-hover ${
              sec === active ? "is-active" : ""
            }`}
          >
            {sec === active ? (
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="contacts__sub-tab-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faFolderClosed}
                className="contacts__sub-tab-icon"
              />
            )}
            {sec}
          </li>
        ))}
      </ul>

      {/* 제목 버튼: 모바일에서만 토글, 데스크톱은 버튼 눌러도 상태 고정 */}
      <button
        type="button"
        onClick={toggleContacts}
        aria-expanded={contactsOpen}
        aria-controls="contacts-list"
        className="fira-code-regular contacts__tab-title w-full flex items-center gap-2 text-left focus:outline-none"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`contacts__sub-tab-icon transition-transform duration-200 ${
            contactsOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
        <h2 className="toggle-title">Contacts</h2>
      </button>

      {/* display 제어: hidden / flex 로만 제어 */}
      <ul
        id="contacts-list"
        aria-hidden={isMobile ? !contactsOpen : false}
        className={`contacts__tab ${contactsDisplayCls} flex-col`}
      >
        <li className="flex items-center gap-2 contacts__sub-tab is-hover">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="contacts__sub-tab-icon"
          />
          wkdgoa3021@hanmail.net
        </li>
        <li className="flex items-center gap-2 contacts__sub-tab is-hover">
          <FontAwesomeIcon icon={faPhone} className="contacts__sub-tab-icon" />
          +82 10 4617 5278
        </li>
      </ul>
    </aside>
  );
}

export default ExplorerSidebar;
