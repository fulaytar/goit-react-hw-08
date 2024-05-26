import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import { CiLinkedin } from "react-icons/ci";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Contacts manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <div className={css.container}>
        <h2 className={css.h2}>Manage all your contacts effortlessly.</h2>
        <p className={css.p}>
          <strong>Secure Login & Registration</strong>: Protect your contact
          information with secure login and registration features.
        </p>
        <p className={css.p}>
          <strong>Store & Organize Contacts</strong>: Easily save and categorize
          all your contacts in one place.
        </p>
        <p className={css.p}>
          <strong>User-Friendly Interface</strong>: Navigate and manage your
          contacts with a simple and intuitive design.
        </p>
        <p className={css.p}>Start organizing your contacts today!</p>
        <p>
          Developed by{" "}
          <a
            className={css.link}
            href="https://www.linkedin.com/in/ivan-fulaitar/"
            target="_blank"
          >
            Ivan Fulaitar
          </a>
        </p>
      </div>
    </div>
  );
}
