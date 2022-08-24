import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <p className="loading">Loading...</p>
      </>
    );
  };



  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };




  const ShowProducts = () => {
    return (
      <>
        <div className=" grid justify-items-center ">
          <div className="my-10 grid grid-cols-6 grid-flow-row text-center border-b border-gray-200 text-gray-500">
            <button
              onClick={() => setFilter(data)}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              All
            </button>

            <button
              onClick={() => filterProduct("office")}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Office
            </button>
            <button
              onClick={() => filterProduct("living room")}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Living room
            </button>

            <button
              onClick={() => filterProduct("kitchen")}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Kitchen
            </button>

            <button
              onClick={() => filterProduct("bedroom")}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Bedroom
            </button>
            <button
              onClick={() => filterProduct("dining")}
              className="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Dining
            </button>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {filter.map((product) => {
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
                        <h5 className="float-left text-sm font-semibold tracking-tight text-orange-400 dark:text-gray-600">
                          {product.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </>
    );
  };





  return (
    <>
      <div className="row">
        <div className="col">
          <h1 className="flex justify-center mt-20 mb-20  text-2xl text-slate-600 font-bold">
            Latest &nbsp;
            <span className="border-b-4 border-orange-400">Products</span>
            &nbsp; Furniture
          </h1>
          <h1 className="text-cnter mx-4">  </h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {loading ? <Loading /> : <ShowProducts />}
          </div>
      </div>
    </>
  );
};

export default Products; 