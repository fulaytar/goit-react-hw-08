import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type="button">
        <span className={css.shadow}></span>
        <span className={css.edge}></span>
        <span className={`${css.front} ${css.text}`}>Logout</span>
      </button>
    </div>
  );
}
