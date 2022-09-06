import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />

          <div className="mt-32">
            <div className="row flex px-20">
              <p className="slide-title text-4xl lg:text-6xl font-normal tracking-tight text-gray-900 dark:text-slate-900">
                {slide.title}
              </p>
            </div>

            <div className="row flex px-20 mt-10 ">
              <p className="slide-text text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
