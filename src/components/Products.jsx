import React from "react";
import { useEffect } from "react";
import { useState } from "react";
 

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  console.log(filter);

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
        <div className="container grid justify-items-center ">
          <div className="my-10 grid grid-cols-5 grid-flow-row text-center border-b border-gray-200 text-gray-500">
            <button
              href="#page1"
              class="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              All
            </button>

            <button
              href="#page1"
              class="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Dining Room
            </button>
            <button
              href="#page2"
              class="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Kitchen
            </button>

            <button
              href="#page3"
              class="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Bed Room
            </button>

            <button
              href="#page4"
              class="flex justify-center border-b-4 border-transparent hover:text-gray-800 hover:border-orange-400 py-4"
            >
              Kids Room
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filter.map((product) => {
            return (
              <>
                <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="p-3 rounded-t-lg "
                      src={product.image}
                      alt="product"
                    />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                      </h5>
                    </a>

                    <div class="flex justify-between items-center">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                      <a
                        href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };





  return (
    <div>
      <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-span-12 mb-5  ">
            <h1 className="flex justify-center mt-20 mb-20  text-2xl text-slate-600 font-bold">
              Latest &nbsp;
              <span className="border-b-4 border-orange-400">Products</span>
              &nbsp; Furniture
            </h1>
          </div>
        </div>

        <div className="row justify-items-center ">
          <div className="col-span-1">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
