import "@material/web/all.js";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <md-tabs>

        <md-primary-tab>
          <NavLink className={buildLinkClass} to="/register">Register</NavLink>
        </md-primary-tab>

        <md-primary-tab>
          <NavLink className={buildLinkClass} to="/login">Log In</NavLink>
        </md-primary-tab>

        </md-tabs>
    </div>
  );
};

export default AuthNav;
