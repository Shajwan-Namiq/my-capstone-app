 
 import React from "react";
 import { useEffect } from "react";
 import { useState } from "react";
 
 import { useParams } from "react-router-dom";
 
 const Product = () => {
   const { id } = useParams();
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

 
   useEffect(() => {
     const getProduct = async () => {
       setLoading(true);
       const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`);
       setProduct(await response.json());
       setLoading(false);
     };
    
     getProduct();
   }, [id]);

   const Loading = () => {
     return (
       <>
         <p className="loading">Loading...</p>
       </>
     );
   };

   const ShowProduct = () => {
     const [color, setColor] = useState("#bada55"); 
     return (
       <>
         <section className="text-gray-600 body-font overflow-hidden">
           <div className="container px-5 py-24 mx-auto">
             <div className="lg:w-4/5 mx-auto flex flex-wrap">
               <img
                 alt={product.name}
                 width={
                   product.images
                     ? product.images[0].width
                     : "the image couldn't found"
                 }
                 height={
                   product.images
                     ? product.images[0].height
                     : "the image couldn't found"
                 }
                 className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                 src={
                   product.images
                     ? product.images[0].url
                     : "the image couldn't found"
                 }
               />
               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                 <h2 className="text-sm title-font text-gray-500 tracking-widest">
                   {product.company}
                 </h2>
                 <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                   {product.name}
                 </h1>

                 <p className="leading-relaxed">{product.description}</p>
                 <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                   <div className="flex">
                     <span className="mr-3">
                     {product.colors ? product.colors[0] : "wrong color1"}
                     </span>


                    
                     <div style={{ color: `${color}` }}>{color}</div>;


                     <button className="border-2 border-gray-300 bg-[cd] rounded-full  w-6 h-6 focus:outline-none"></button>
                     <button className="border-2 border-gray-300 ml-1 bg-[cd] rounded-full w-6 h-6 focus:outline-none"></button>
                     <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                   </div>
                   <div className="flex ml-6 items-center">
                     <div className="relative"></div>
                   </div>
                 </div>
                 <div className="flex">
                   <span className="title-font font-medium text-2xl text-gray-900">
                     ${product.price}
                   </span>
                   <button className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded">
                     Add to cart
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </>
     );
   };

   return (
     <div className="row">
       <div className="col">{loading ? <Loading /> : <ShowProduct />}</div>
     </div>
   );
 };

 export default Product;
