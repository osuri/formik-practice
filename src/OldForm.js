import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: ""
};
const onSubmit = (values) => {
  console.log("submit", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Reuired";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Reuired"),
  email: Yup.string().email("Invalid email format").required("Reuired"),
  channel: Yup.string().required("Required")
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log("errors", formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Sample Form</h2>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div className="error">
              {formik.touched.channel && formik.errors.channel}
            </div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default OldForm;
