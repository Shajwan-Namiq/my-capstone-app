import Total from "./Total";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <div className="flex justify-between border-b m-10 pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
