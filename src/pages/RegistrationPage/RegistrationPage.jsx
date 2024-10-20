import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./RegistrationPage.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const passwordFieldId = useId();
  const emailFieldId = useId();
  const nameFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            <Form className={s.form}>
              <div className={s.formFieldWrapper}>
                <label className={s.label} htmlFor={nameFieldId}>
                  <span className="label-text">Name</span>
                </label>
                <Field
                  type="text"
                  placeholder="name"
                  name="name"
                  className={s.input}
                  id={nameFieldId}
                />
                <ErrorMessage
                  name="name"
                  className={s.errorMessage}
                  component="span"
                />
              </div>
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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              <button type="submit" className={s.loginBtn}>
                Register
              </button>
            </Form>
          </Formik>
        </div>
        <div className={s.textWrapper}>
          <h1 className={s.header}>Register!</h1>
          <p className={s.text}>
            Want to unlock the full potential of our app? Please register now to
            discover exclusive benefits, access personalized features, and
            easily manage your contacts. With our user-friendly interface, you
            can effortlessly add, delete, and create contacts with phone
            numbers. Don't miss out on the exciting opportunities and advantages
            that await you. Register today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
