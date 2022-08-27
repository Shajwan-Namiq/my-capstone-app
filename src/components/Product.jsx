import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import LoadingSpinner from "./LoadingSpinner";
 


function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name, company, description, price} = product || {};
   
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://course-api.com/react-store-single-product?id=${id}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        setProduct(response);
    })();
  }, [id]);

  useEffect(() => {
    if (product) {
      setImage(product?.images[0]?.thumbnails);
    }
  }, [product]);

  const Loading = () => {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  };

  const ShowProduct = () => {
    //for converting hex code to color

    return (
      <>
        <section className="text-gray-400 m-12 lg:m-20 body-font overflow-hidden">
          <div className="container mx-auto md:w-5/6   md:px-0 ">
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 ">
                <div>
                  <InnerImageZoom
                    src={image?.large?.url}
                    zoomSrc={image?.full?.url}
                    zoomType="hover"
                  />
                </div>

                <div className="flex flex-wrap gap-3  mt-2">
                  {product?.images.map((image, index) => (
                    <img
                      onClick={() => setImage(image.thumbnails)}
                      src={image.thumbnails.small.url}
                      alt={name}
                      key={index}
                      className="h-14 w-12 lg:w-20  rounded cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {company}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>

                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    {product?.colors.map((color) => (
                      <div
                        key={color}
                        className="border-white mr-2 border-2 rounded-full h-6 w-6 flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-900">
                    ${price}
                  </span>
                  <button className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded">
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
}

export default Product;
