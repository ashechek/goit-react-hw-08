import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const id = { useId };
  return (
    <div className={s.searchContainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        id={id}
        type="text"
        name="searchName"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
