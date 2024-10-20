import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.contactWrapper}>
      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <IoMdPerson /> <p>{name}</p>
        </li>
        <li className={s.infoItem}>
          <FaPhoneAlt /> <p>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
