import Carousel  from './carousel/Carousel'
import React from 'react'
 
import Blogs from "./Blogs";
import Section from './Section';
import Subscribe from './Subscribe';
import Features from './Features';
import ProductsMain from './ProductsMain';

export default function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <Section />
      <ProductsMain />
      <Blogs />
      <Subscribe />
    </>
  );
}
