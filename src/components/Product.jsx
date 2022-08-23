import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch(
        `https://course-api.com/react-store-products/${product.id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-span-4">
          <span>show price : </span>

          <div>{productid.name}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="row">
        <div> {loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
