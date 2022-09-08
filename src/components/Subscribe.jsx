import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
 
import { ToastContainer, toast } from "react-toastify";

export default function Subscribe() {
 
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Required Email Address"),
      }),
      onSubmit: ({ email }, { resetForm }) => {
        alert(`email: ${email}`);
        resetForm();
        toastifySuccess();
      },
    });

  const toastifySuccess = () => {
    toast("Successfully subscribed to newsletter!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-8 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            Join us from anywhere and get the 25% off
           
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 lg:mt-0">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="on"
                  name="email"
                  type="email"
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email Address"
                />

                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium  text-white capitalize  bg-orange-400 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-slate-800 focus:outline-none focus:bg-slate-800"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm">
                {touched.email && errors.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
              </p>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer
        toastStyle={{ backgroundColor: "#d9d9d9", color: "#31572c" }}
      />
    </div>
  );
}
