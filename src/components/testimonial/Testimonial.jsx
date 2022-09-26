import "./testimonial.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "./data";

const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const ShowProducts = () => {
    return (
      <>
        <section className="section">
          <div className="section-center ">
            {people.map((item, indexPeople) => {
              const { id, image, name, title, quote } = item;
              let position = "nextSlide2";
              if (indexPeople === index) {
                position = "activeSlide2";
              }
              if (
                indexPeople === index - 1 ||
                (index === 0 && indexPeople === people.length - 1)
              ) {
                position = "lastSlide2";
              }

              return (
                <article className={position} key={id}>
                  <div className="mb-5 flex justify-center items-center">
                    <img src={image} alt={name} className="person-img " />
                  </div>

                  <div class=" slider__inner">
                    <div class=" slider__contents">
                      <quote>
                        &rdquo; &nbsp;
                        {quote}
                        &nbsp; &rdquo;
                      </quote>

                      <h2 class="mt-5 slider__caption text-orange-600">
                        {name} | NylonCraft
                      </h2>
                      <h2 class="slider__caption text-slate-400">{title} </h2>
                    </div>
                  </div>
                </article>
              );
            })}

            <button className="prev2" onClick={() => setIndex(index - 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="next2" onClick={() => setIndex(index + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </section>

        {/**  <div className="bg-slate-300  flex items-center justify-center    ">
          <div className="flex items-center justify-center ">
            {filter.map((product) => {
              return (
                <div className="" key={product.id}>
              
              
               <p>{product.location}</p>

                </div>
              );
            })}
          </div>
        </div> */}
      </>
    );
  };

  return (
    <>
      <h1 className="mt-20 mb-10 flex justify-center text-2xl text-slate-600 font-bold">
        Testimonials
      </h1>

      {<ShowProducts />}
    </>
  );
};

export default Testimonial;
