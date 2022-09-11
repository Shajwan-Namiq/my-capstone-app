import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["company", "name", "id"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.company == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  } else if (!isLoaded) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  } else {
    return (
      <>
       

          <nav
          className="flex ml-5 lg:ml-64 mt-10 mb-0 text-slate-900"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex   space-x-1 md:space-x-3">
            <li className="inline-flex  ">
              <svg
                className="w-4 h-4 mr-2"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <Link
                to="/"
                className="inline-flex items-start text-sm font-medium  hover:text-orange-400 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex  ">
                <svg
                  className="w-6 h-6 text-slate-900"
                  fillRule="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm uppercase text-gray-500 md:ml-2 dark:text-gray-400">
                  Products
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className=" mb-20">
          <div className="grid grid-flow-row-dense grid-cols-12 grid-rows-1">
           
            <div className="col-span-12 lg:col-span-2  mx-2 mt-20">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input w-full  p-4  text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-slate-900 focus:bg-white focus:text-gray-900"
                  autoComplete="on"
                  placeholder="Search by name "
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>

              <div className="">
                <select
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  className="custom-select mt-5 rounded-md w-full py-4 lg:p-4 text-sm bg-gray-300 text-slate-900 dark:text-slate-800"
                  aria-label="Filter Products By Company"
                >
                  <option value="All" className="mx-2  font-bold uppercase">
                    Filter By Company Name
                  </option>
                  <option value="marcos" className=" uppercase">
                    marcos
                  </option>
                  <option value="liddy" className="uppercase">
                    liddy
                  </option>
                  <option value="ikea" className="uppercase">
                    ikea
                  </option>
                  <option value="caressa" className="uppercase">
                    caressa
                  </option>
                </select>
                <span className="focus"></span>
              </div>
            </div>








            <div className="mt-0 col-span-12  lg:col-span-10 ">
              <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {search(data).map((item) => (
                    <div
                      className=" overflow-hidden transition-shadow duration-300  rounded shadow-sm"
                      key={item.id}
                    >
                      <span className="group relative ">
                        <img
                          className="object-cover w-full  h-2/3"
                          alt="productinfo"
                          src={item.image}
                        />
                        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#fbfffe87] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                          <Link
                            className="mt-5 px-8 py-3 rounded-full text-white  bg-slate-900 hover:bg-orange-400 duration-300"
                            to={`/products/${item.id}/`}
                          >
                            <FaSearch size={30} />
                          </Link>
                        </div>
                      </span>

                      <div className="px-5 pb-5 h-1/3">
                        <div className="mt-5 flex justify-between items-start">
                          <span className="text-2xl font-bold text-gray-900 dark:text-gray-900">
                            ${item.price}
                          </span>
                          <h5 className="mt-2 float-left text-sm font-semibold tracking-tight text-orange-400 dark:text-gray-600">
                            {item.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>

       
      
      </>
    );
  }
}
