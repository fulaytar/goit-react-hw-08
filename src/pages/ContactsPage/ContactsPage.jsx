import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <ContactList />
      <SearchBox />
    </>
  );
}
