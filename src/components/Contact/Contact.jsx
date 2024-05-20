import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const send = (e) => {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white"; // змінюємо колір тексту
    e.target.style.border = "2px solid darkred"; // додаємо обрамлення
    e.target.style.transition = "background-color 0.3s, transform 0.2s";
    /*     dispatch(deleteContact(item.id)); */
  };

  return (
    <li className={css.container}>
      <h3>
        <IoPerson /> {item.name}
      </h3>
      <p>
        <BsFillTelephoneFill />
        {item.number}
      </p>
      <button className={css.btn} /* onClick={send} */>Delete</button>
    </li>
  );
}
