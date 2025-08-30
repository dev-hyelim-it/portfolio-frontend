import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer p-6 border-t border-gray-700 text-sm text-center text-gray-400 flex">
      <div className="footer__left-box flex">
        <div className="w-[160px] flex items-center font-light tracking-wider">
          find me in:
        </div>
        <a
          href="https://github.com/your-id"
          target="_blank"
          className="text-white underline ml-1 footer__link flex items-center"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
      <div className="footer__right-box items-center">@dev-hyelim-it</div>
    </footer>
  );
}

export default Footer;
