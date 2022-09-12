import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image rounded-sm " src={slide.urls} alt="" />

          <div className="mt-28">
            <div className="row flex px-20 ">
              <p className="px-2 py-2 bg-[#edede968] slide-title text-4xl lg:text-6xl font-normal tracking-tight text-gray-900 dark:text-slate-900">
                {slide.title}
              </p>
            </div>
 
            <div className="mt-2 py-0 flex items-center justify-center  space-x-8">
              <div className="text-xl font-bold relative w-28 h-28 bg-[#e5e5e59c] text-[#023047] rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                <span className="absolute text-7xl left-0 top-0 text-orange-400">
                  ''
                </span>
                {slide.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
