import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addContacts } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: yup
      .string()
      .required("Required")
      .matches(/^(\d+|\d+-\d+(?:-\d+)?)$/, "Must be only numbers"),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContacts(values))
            .unwrap()
            .then(() => {
              toast.success("Contact added successfully!");
            })
            .catch((error) => {
              console.log(error);
              toast.error("Failed to add contact!", {
                duration: 4000,
                position: "top-right",
              });
            });
          resetForm();
        }}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="username_text" className={css.label}>
              Name
              <Field
                type="text"
                name="name"
                className={css.input}
                id="username_text"
                placeholder="Ivan"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
          </div>
          <div>
            <label htmlFor="user_number" className={css.label}>
              Number
              <Field
                name="number"
                className={css.input}
                id="user_number"
                placeholder="123-45-67"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={css.error}
              />
            </label>
          </div>
          <button className={css.btn} type="submit">
            {/* {loaderBtn && (
              <div className={css.loader}>
                <span className={css.bar}></span>
                <span className={css.bar}></span>
                <span className={css.bar}></span>
              </div>
            )} */}
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
