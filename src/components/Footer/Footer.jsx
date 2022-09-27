import React from 'react'
import { Link } from "react-router-dom";
 import { FaFacebook ,FaInstagram , FaTwitter , FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
  return (
    <div className=" border-gray-900">
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-slate-900 text-sm text-center sm:text-left">
              © 2022 <span className="text-orange-400  textfooter">ESHOP</span>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Furniture
              </Link>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link to="/" className="text-gray-700 hover:text-orange-400">
                <FaFacebook size={20} />
              </Link>
              <Link to="/" className="ml-3 text-gray-700 hover:text-orange-400">
                <FaInstagram size={20} />
              </Link>
              <Link to="/" className="ml-3 text-gray-700 hover:text-orange-400">
                <FaLinkedin size={20} />
              </Link>
              <Link to="/" className="ml-3 text-gray-700 hover:text-orange-400">
                <FaTwitter size={20} />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer