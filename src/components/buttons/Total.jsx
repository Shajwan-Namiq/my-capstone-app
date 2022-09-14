 import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
    
    <div className="border-2 mx-10 mt-10 mb-28 lg:w-2/4 ">
      <div className="total m-10   ">
        <Link
          to="/products"
          class="flex font-semibold text-orange-400 text-sm mb-5 mt-10"
        >
          <svg
            class="fill-current mr-2 text-orange-400 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>
        <h2> ORDER SUMMARY </h2>

        <div class="w-4/4   border-t text-slate-800 mt-8">
          <div class="flex font-semibold justify-between py-6 text-lg uppercase">
            <span>Total Items</span>
            <strong>({getTotal().totalQuantity} items)</strong>
          </div>

          <div class=" flex font-semibold justify-between py-6  text-lg uppercase">
            <span>Total cost</span>
            <strong> $ {getTotal().totalPrice} </strong>
          </div>
          <button class="my-10 bg-orange-400  font-semibold hover:bg-slate-900 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Total;
