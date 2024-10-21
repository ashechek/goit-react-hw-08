import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.error}>
      <img
        className={s.errorImg}
        src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
        width={1000}
      />
    </div>
  );
};

export default NotFoundPage;
