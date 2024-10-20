import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.error}>
      <img
        className={s.errorImg}
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        width={1000}
      />
    </div>
  );
};

export default NotFoundPage;
