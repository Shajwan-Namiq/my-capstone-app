import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch(
        "https://course-api.com/react-store-products"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  };

  

  const ShowProducts = () => {
    return (
      <>
        <div className="px-4 py-2 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        
            {filter.slice(0, 8).map((product) => {
              return (
                <div
                  className=" overflow-hidden transition-shadow duration-300  rounded shadow-sm"
                  key={product.id}
                >
                  <span className="group relative ">
                    <img
                      className="object-cover w-full  h-2/3"
                      alt="productinfo"
                      src={product.image}
                    />
                    <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#fbfffe87] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                      <Link
                        className="mt-5 px-8 py-3 rounded-full text-white  bg-slate-900 hover:bg-orange-400 duration-300"
                        to={`/products/${product.id}/`}
                      >
                        <FaSearch size={30} />
                      </Link>
                    </div>
                  </span>

                  <div className="px-5 pb-5 h-1/3">
                    <div className="mt-5 flex justify-between items-start">
                      <span className="text-3xl font-bold text-gray-900 dark:text-gray-900">
                        ${product.price}
                      </span>
                      <h5 className="mt-2 float-left text-sm font-semibold tracking-tight text-orange-400 dark:text-gray-600">
                        {product.name}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center flex justify-center items-center">
            <Link
              to="/products"
              className="px-20 bg-slate-900 inline-flex items-center justify-center w-full h-12  font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              See More
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <h1 className="flex justify-center mt-20 mb-2  text-2xl text-slate-600 font-bold">
            Latest &nbsp;
            <span className="border-b-4 border-orange-400">Products</span>
            &nbsp; Furniture
          </h1>
      
        </div>
      </div>

      <div className="row">
        <div className="col">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
