import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.name);

  return (
    <div>
      <main>
        <h2>Welcome {user.name}!</h2>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout?
        </button>
      </main>
    </div>
  );
};

export default UserMenu;
