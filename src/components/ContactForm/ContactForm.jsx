import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum number of characters - 3")
    .max(50, "Maximum number of characters - 50")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum number of characters - 3")
    .max(50, "Maximum number of characters - 50")
    .required("This field is required"),
});

export default function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          ...values,
        };
        addContact(newContact);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.formContainer}>
          <Field
            name="name"
            type="text"
            placeholder="User Name"
            className={styles.field}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorMessage}
          />

          <Field
            name="number"
            type="text"
            placeholder="Phone number"
            className={styles.field}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorMessage}
          />

          <button type="submit" className={styles.submitButton}>
            Add a contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
