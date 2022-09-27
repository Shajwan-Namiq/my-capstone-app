import Carousel from "../carousel/Carousel";
import React from "react";

import Testimonial from "../testimonial/Testimonial";
import Section from "../home/Section";
import Subscribe from "../Footer/Subscribe";
 import Features from "../home/Features";
import ProductsMain from "../home/ProductsMain";

export default function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <Section />
      <ProductsMain />
      <Testimonial />
      <Subscribe />
    </>
  );
}
