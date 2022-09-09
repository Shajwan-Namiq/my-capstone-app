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
      <p>
        {error.message}, 
      </p>
    );
  } else if (!isLoaded) {
   return (
     <>
       <LoadingSpinner />
     </>
   );
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for....."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="">Search for product name here</span>
          </label>

          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Products By Company"
            >
              <option value="All">Filter By Company Name</option>
              <option value="marcos">marcos</option>
              <option value="liddy">liddy</option>
              <option value="ikea">ikea</option>
              <option value="caressa">caressa</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

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
                      to=""
                    >
                      <FaSearch size={30} />
                    </Link>
                  </div>
                </span>

                <div className="px-5 pb-5 h-1/3">
                  <div className="mt-5 flex justify-between items-start">
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-900">
                      ${item.price}
                    </span>
                    <h5 className="mt-2 float-left text-sm font-semibold tracking-tight text-orange-400 dark:text-gray-600">
                      {item.name}
                    </h5>
                    <h5 className="text-red-600 mt-2 float-left text-sm font-semibold tracking-tight    ">
                      {item.company}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
