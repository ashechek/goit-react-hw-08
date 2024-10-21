import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./LoginPage.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const passwordFieldId = useId();
  const emailFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={s.loginPage}>
      <div className={s.loginContent}>
        <div className={s.card}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={FeedbackSchema}
          >
            <Form className={s.form}>
              <div className={s.formFieldWrapper}>
                <label className={s.label} htmlFor={emailFieldId}>
                  <span className="label-text">Email</span>
                </label>
                <Field
                  type="email"
                  placeholder="email"
                  name="email"
                  className={s.input}
                  id={emailFieldId}
                />
                <ErrorMessage
                  name="email"
                  className={s.errorMessage}
                  component="span"
                />
              </div>
              <div className={s.formFieldWrapper}>
                <label className={s.label} htmlFor={passwordFieldId}>
                  <span className="label-text">Password</span>
                </label>
                <Field
                  type="password"
                  placeholder="password"
                  name="password"
                  className={s.input}
                  id={passwordFieldId}
                />
                <ErrorMessage
                  name="password"
                  className={s.errorMessage}
                  component="span"
                />
              </div>
              <button type="submit" className={s.loginBtn}>
                Login
              </button>
            </Form>
          </Formik>
        </div>
        <div className={s.textWrapper}>
          <h1 className={s.header}>Login now!</h1>
          <p className={s.text}>
            Please logint now to get acsess to your contacts
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
