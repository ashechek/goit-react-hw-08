import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import s from "./AppBar.module.css";
const AppBar = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </div>
      <hr className={s.headerLine} />
    </header>
  );
};

export default AppBar;
