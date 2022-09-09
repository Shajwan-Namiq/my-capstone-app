import React from "react";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import MyImage from "./images/Eshoplogo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-slate-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <img src={MyImage} className="mr-3 h-6 sm:h-9" alt="Logo" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:770-100414"
              className="mr-6 font-bold text-sm   text-gray-500 dark:text-gray-900 hover:underline"
            >
              (+964) 770-100414
            </a>

            {/** drop down menue*/}

            <div className="grid grid-cols-1 divide-x divide-slate-900">
              <div>
                <Login />
              </div>
            
              {/**<div>
                <Signup />
              </div>*/}
              
            </div>

            <div>
              <Link
                type="button"
                className="relative text-orange-400 transition-colors duration-200 transform dark:text-orange-400 hover:text-gray-600 dark:hover:text-gray-300"
                to="/cart"
              >
                <FaShoppingCart size={25} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-100 dark:bg-[#eeeeee9c] ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-gray-900   font-bold  hover:border-y-2 border-orange-400  hover:text-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-900 dark:text-gray-900   font-bold  hover:border-y-2 border-orange-400  hover:text-gray-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-900 dark:text-gray-900   font-bold  hover:border-y-2 border-orange-400  hover:text-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-900 dark:text-gray-900   font-bold  hover:border-y-2 border-orange-400  hover:text-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
