import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [imageshow, setImageshow] = useState(image);
  const [colorschange, Setcolorschange] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name, company, description, price} = product || {};

  const dispatch = useDispatch();

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



useEffect(() => {
  if (product) {
    setImageshow(image?.large?.url);
  }
}, [product]);

    {
      console.log(imageshow);
    }
   
  



  const Loading = () => {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <section className="text-gray-400 m-12 lg:m-14 body-font overflow-hidden">
          <div className="container mx-auto md:w-5/6   md:px-0 ">
            <nav
              className="flex px-0 py-5 text-slate-900"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fillRule="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <Link
                    to="/"
                    className="inline-flex items-center text-sm font-medium  hover:text-orange-400 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-slate-900"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link
                      to="/products"
                      className="inline-flex items-center text-sm font-medium  hover:text-orange-400"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-slate-900"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-1 text-sm uppercase text-gray-500 md:ml-2 dark:text-gray-400">
                      {name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap  ">
              <div className="w-full md:w-1/2 mt-6">
                {image && (
                  <InnerImageZoom
                    src={image.large.url}
                    zoomSrc={image.full.url}
                    zoomType="hover"
                  />
                )}

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
                <h2 className="uppercase mb-2 text-sm title-font text-gray-500 tracking-widest">
                  {company} company
                </h2>
                <h1 className="uppercase text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>

                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  <div className="flex">
                    <span className="mr-3 text-sm text-gray-900">
                      Choose Color
                    </span>

                    {product?.colors.map((color) => (
                      <button
                        onClick={() => Setcolorschange(color)}
                        key={color}
                        className="hover:border-gray-500 hover:border-4 border-white mr-2 border-2 rounded-full h-6 w-6 flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>

                  <div>
                    <div
                      style={{ backgroundColor: colorschange }}
                      alt={name}
                      className="h-10 w-20 rounded"
                    />
                  </div>
                </div>

                <div className="flex">
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-900">
                    ${price}
                  </span>
                  <button
                    className="flex  mr-2 ml-2  bg-slate-900 text-white  border-2  py-2 px-6   hover:bg-orange-400 rounded"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          name,
                          company,
                          imageshow,
                          colorschange,
                          price,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                
                  <Link
                    to="/cart"
                    className="flex text-slate-900   border-2 border-slate-900  py-2 px-4   hover:bg-orange-400 rounded"
                  >
                    Go to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
}

export default Product;
