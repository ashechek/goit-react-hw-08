import "@material/web/all.js";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <md-tabs>

        <md-primary-tab>
          <NavLink to="/" className={buildLinkClass}>Home</NavLink>
        </md-primary-tab>
        
        <md-primary-tab>
          <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
        </md-primary-tab>

      </md-tabs>
    </nav>
  );
};

export default Navigation;
