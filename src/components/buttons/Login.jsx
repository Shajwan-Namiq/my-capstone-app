import React from "react";
import { FaFacebook, FaGoogle, FaUser } from "react-icons/fa";
 

function Login() {

  
  return (
    <>
      <div className="flex flex-shrink-0 flex-wrap">
        <button
          type="button"
          className="flex hover:text-slate-900 text-orange-400 "
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Sign in
          <FaUser size={20} className="mx-1" />
        </button>
      </div>

    
        <div
          className="modal fade fixed top-14 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="loginModal"
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
                    
                    name="email"
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500   dark:text-black"
                    placeholder="Email address"
                  />
                 
                </div>
                <div>
                  <input
                   
                    name="password"
                    type="password"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500  dark:text-black"
                    placeholder="Enter your Password"
                  />
                 
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
       
    </>
  );
}

export default Login;
