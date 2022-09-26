import Carousel  from './carousel/Carousel'
import React from 'react'
 
import Testimonial from "./testimonial/Testimonial";
import Section from './Section';
import Subscribe from './Subscribe';
import Features from './Features';
import ProductsMain from './ProductsMain';
import Blog from "./Blog";


export default function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <Section />
      <ProductsMain />
      <Blog />
      <Testimonial />
      <Subscribe />
    </>
  );
}
