import Carousel  from './carousel/Carousel'
import React from 'react'
import Products from './Products';
import Blogs from "./Blogs";
import Section from './Section';
import Subscribe from './Subscribe';

export default function Home() {
  return (
    <>
      <Carousel />
      <Section />
      <Blogs />
      <Products />
      <Subscribe />
    </>
  );
}
