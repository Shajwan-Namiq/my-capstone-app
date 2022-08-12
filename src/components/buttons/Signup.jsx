import React from "react";
import { FaFacebook, FaGoogle, FaUserPlus } from "react-icons/fa";
 

function Signup() {
  return (
    <>
      <div className="mt-3 sm:mx-3 flex flex-shrink-0 flex-wrap items-center lg:inline-block md:inline-block">
        <button
          type="button"
          className=" w-full flex flex-row justify-center  px-4 py-2.5 bg-slate-50 text-gray-800  rounded-md shadow hover:bg-slate-500"
          data-bs-toggle="modal"
          data-bs-target="#SignupModal"
        >
          <FaUserPlus size={20} />
          <span className="px-3">Sign Up</span>
        </button>
      </div>

      <div
        className="modal fade fixed top-14 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="SignupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Register Form
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
                className="flex flex-row justify-center w-full px-6 py-2.5 bg-cyan-800 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out "
              >
                <FaGoogle />
                <span className="px-3"> Sign up With Google</span>
              </button>

              <button
                type="button"
                className="mt-4 flex flex-row justify-center w-full px-6 py-2.5 bg-cyan-800 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out "
              >
                <FaFacebook />
                <span className="px-3"> Sign up With Facebook</span>
              </button>
            </div>

            <div className="modal-body relative p-4">
              <div>
                <label
                  htmlFor="exampleInput"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  UserName
                </label>
                <input
                  type="text"
                  name="exampleInput"
                  id="exampleInput"
                  className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  placeholder="UserName"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="my-2 block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  placeholder="shajwan@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block my-2 text-sm font-medium text-black dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  required
                />
              </div>
            </div>

            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4    rounded-b-md">
              <button
                type="button"
                className="mt-5 w-full px-6 py-2.5 bg-cyan-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
