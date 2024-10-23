import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={s.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navigation;

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};