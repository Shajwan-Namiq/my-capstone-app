import React from "react";
import { FaFacebook, FaGoogle, FaUserPlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .max(30, "username must be shorter than 30 characters")
          .required("Required Username"),
        email: Yup.string()
          .email("Invalid email")
          .required("Required Email Address"),
        password: Yup.string()
          .min(6, "Password should be longer than 6 characters")
          .required("Required password"),
      }),
      onSubmit: ({ username, email, password }, { resetForm }) => {
        alert(`username: ${username},email: ${email}, password: ${password}`);
        resetForm();
      },
    });


  return (
    <>
      <div className="flex flex-shrink-0 flex-wrap">
        <button
          type="button"
          className="flex hover:text-slate-900 text-orange-400 "
          data-bs-toggle="modal"
          data-bs-target="#SignupModal"
        >
          <FaUserPlus size={22} className="ml-2" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="modal fade fixed top-14 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="SignupModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none ">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#d3d3d3] bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Login Form
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="border-b flex flex-shrink-0 flex-wrap items-center  p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="flex flex-row justify-center w-full px-6 py-2.5 border-2 border-red-900  text-red-900 hover:text-slate-900 font-semibold text-xs leading-tight rounded shadow-md hover:border-gray-900 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-300 active:shadow-lg transition duration-150 ease-in-out "
                >
                  <FaGoogle />
                  <span className="px-3"> Sign in With Google</span>
                </button>

                <button
                  type="button"
                  className="mt-4 flex flex-row justify-center w-full px-6 py-2.5 border-2 border-blue-900  text-blue-900 hover:text-slate-900 font-semibold text-xs leading-tight rounded shadow-md hover:border-gray-900 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-300 active:shadow-lg transition duration-150 ease-in-out "
                >
                  <FaFacebook />
                  <span className="px-3"> Sign in With Facebook</span>
                </button>
              </div>

              <div className="modal-body relative p-4">
                <div>
                  <input
                    autoComplete="on"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500   dark:text-black"
                    placeholder="Enter UserName"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-600">{errors.username}</div>
                  ) : null}
                </div>

                <div>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="on"
                    name="email"
                    type="text"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500   dark:text-black"
                    placeholder="Enter Email address"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <input
                    autoComplete="on"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500  dark:text-black"
                    placeholder="Enter your Password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-600">{errors.password}</div>
                  ) : null}
                </div>
              </div>

              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4    rounded-b-md">
                <button
                  type="submit"
                  className="mt-8 w-full px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
