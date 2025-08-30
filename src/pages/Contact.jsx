import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ContactSidebar from "../components/ContactSidebar";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <article className="contact flex">
      <h1 className="page__title">_contact</h1>
      <ContactSidebar />
      <main className="contact__content-box flex-1 p-6">
        <div className="tab-title-box flex items-center h-10 px-4 text-sm">
          <span className="tab-title-box--text">
            contact
            <FontAwesomeIcon icon={faXmark} className="icon-close" />
          </span>
        </div>
        <ContactForm />
      </main>
    </article>
  );
}

export default Contact;
