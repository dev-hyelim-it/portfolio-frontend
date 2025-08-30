import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const navItems = [
  { to: "/", label: "_hello" },
  { to: "/about", label: "_about-me" },
  { to: "/projects", label: "_projects" },
];

function DesktopHeader() {
  return (
    <header className="header bg-[#0f172a] font-mono text-sm h-[56px] flex items-center">
      <div className="header__left-box flex flex-1 items-center">
        {/* name */}
        <div className="header__name-box w-[275px] font-light tracking-wider text-white">
          dev-hyelim
        </div>

        {/* center */}
        <div className="header__center-box flex gap-2.5 flex-1 h-full items-center">
          {navItems.map(({ to, label }) => (
            <div key={to} className="h-full header__category-box">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `focus:outline-none relative flex items-center h-full px-2 header__category-link ${
                    isActive
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FFB86A]"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="h-full header__right-box">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `focus:outline-none relative flex items-center h-full px-2 header__category-link ${
              isActive
                ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FFB86A]"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          _contact-me
        </NavLink>
      </div>
    </header>
  );
}

function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed m-header header bg-[#0f172a] font-mono px-3">
      <section className="fixed m-header__section flex items-center justify-between">
        {/* name */}
        <div className="m-header__name header__name-box font-light tracking-wider text-white">
          dev-hyelim
        </div>

        {/* hamburger / close button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="m-header__nav text-white focus:outline-none rounded px-2 py-1"
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        {/* dropdown nav */}
        {open && (
          <nav
            id="mobile-nav"
            className="fixed left-0 right-0 top-[56px] bottom-0 bg-[#0f172a]"
          >
            <div className="m-header__bottom-box flex h-full flex-col">
              <ul className="flex-1 overflow-auto m-header__ul">
                {navItems.map(({ to, label }) => (
                  <li className="m-header__li flex" key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex px-4 py-3 w-full m-header__category-link ${
                          isActive ? "text-white is-active" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="m-header__li flex">
                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex px-4 py-3 m-header__category-link ${
                        isActive ? "text-white is-active" : ""
                      }`
                    }
                  >
                    _contact-me
                  </NavLink>
                </li>
              </ul>
              <Footer />
            </div>
          </nav>
        )}
      </section>
    </header>
  );
}

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
