import "./testimonial.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
 

const Testimonial = () => {
   const [posts, setPosts] = useState([]);
  const [people] = useState(posts);
  const [index, setIndex] = useState(0);



   

  useEffect(() => {
    fetch("https://testimonialapi.toolcarton.com/api")
      .then((response) => response.json())
      .then((data) => {
        
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);





  useEffect(() => {
    const lastIndex = posts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, posts]);

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
        <section className="section ">
          <div className="section-center ">
            {posts.map((post, indexPeople) => {
              const { id, avatar, name, location, message, designation } = post;

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
                    <img src={avatar} alt={name} className="person-img " />
                  </div>

                  <div className="bg-slate-900 p-3 text-white rounded-tr-3xl   rounded-bl-3xl     slider__inner">
                    <div className=" slider__contents">
                      <p>
                        &rdquo; &nbsp;
                        {message}
                        &nbsp; &rdquo;
                      </p>

                      <h2 className="mt-5 slider__caption text-orange-400">
                        {name} | {designation}
                      </h2>
                      <h2 className="slider__caption text-slate-400">
                        {location}
                      </h2>
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

      
      </>
    );
  };

  return (
    <div className="pt-5 bg-[#e5e5e557]">
      
      <h1 className="flex justify-center mt-10 mb-16  text-2xl text-slate-600 font-bold">
        Tes
        <span className="border-b-4 border-orange-400">timon</span>
        ials
      </h1>
      {<ShowProducts />}
    </div>
  );
};

export default Testimonial;
