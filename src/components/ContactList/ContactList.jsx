import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredData = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <h2>loading...</h2>}
      {error && <h2>Something went wrong!</h2>}
      <ul className={s.contactCard}>
        {filteredData.map((data) => {
          return (
            <li key={data.id}>
              <Contact id={data.id} name={data.name} number={data.number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
