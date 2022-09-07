import Carousel  from './carousel/Carousel'
import React from 'react'
import Products from './Products';
import Blogs from "./Blogs";
import Section from './Section';
import Subscribe from './Subscribe';
import Features from './Features';

export default function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <Section />
      <Products />
      <Blogs />
      <Subscribe />
    </>
  );
}
