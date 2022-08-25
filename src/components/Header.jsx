import React from "react";
import { Link } from "react-router-dom";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import CartBtn from "./buttons/CartBtn";
import { useState } from "react";
import MyImage from "./images/Eshoplogo.png";
 import { FaTimes , FaBars} from "react-icons/fa";
 


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className=" w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="mx-auto flex fle-auto items-center justify-between py-3 md:py-5 md:block">
              <a
                href="https://endearing-crepe-c9a44e.netlify.app/"
                className="flex items-center"
              >
                <img src={MyImage} className="mr-3 h-6 sm:h-9" alt="Logo" />
              </a>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-orange-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      size={20}
                      className="w-6 h-6 text-orange-400"
                      strokeWidth={2}
                    />
                  ) : (
                    <FaBars
                      size={20}
                      className="w-6 h-6 text-orange-400"
                      strokeWidth={2}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 place-items-center justify-self-center pb-3 mt-5 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="font-bold items-center justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-orange-400 ">
                  <Link to="/" className=" border-navbar hover:text-[#081927] ">
                    Home
                  </Link>
                </li>

                <li className=" text-orange-400 ">
                  <Link
                    to="/products"
                    className="border-navbar hover:text-[#081927]"
                  >
                    Products
                  </Link>
                </li>
                <li className=" text-orange-400  ">
                  <Link
                    to="/about"
                    className="border-navbar hover:text-[#081927] "
                  >
                    About
                  </Link>
                </li>
                <li className=" text-orange-400 ">
                  <Link
                    to="/contact"
                    className="border-navbar hover:text-[#081927] "
                  >
                    Contact
                  </Link>
                </li>

                {/**<!-- Modal toggle --> */}
                <li>
                  <Login />
                </li>
                <li>
                  <Signup />
                </li>
                <li>
                  <CartBtn />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
