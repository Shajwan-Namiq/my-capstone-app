import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Banner from "./banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "./slider.css";


export default function Sale() {
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          style={{
             "--swiper-navigation-size": "30px",
            
          }}
          
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
        >
          {filter.map((product) => (
            <SwiperSlide key={product.id} className="slide  ">
              <div className="mx-5 overflow-hidden transition-shadow duration-300  rounded shadow-sm">
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

                <div className="px-2">
                  <div className="mt-5 flex justify-between items-start">
                    <h5 className="mt-2 float-left text-sm font-semibold tracking-tight text-gray-700 dark:text-gray-600">
                      {product.name}
                    </h5>
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };

  return (
    <>
      <div>
        <Banner />
      </div>

      <div className="my-20"></div>

      

      {loading ? <Loading /> : <ShowProducts />}

      <div className="my-20"></div>
    </>
  );
}
