import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg shadow-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ===0 && <h1>Cart is Empty Add an item</h1> }
        <CartItem items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;


