import { Formik, Form, Field } from "formik";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
