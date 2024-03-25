import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

// Read the Cart Info to our Store

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

//   Method for Clearing the Cart

const dispatch = useDispatch();
const handleClearCart = () =>{
    dispatch(clearCart())
}

  return (
    <div>
      <h1 className="text-center m-3 font-serif font-bold text-3xl">
        Cart
      </h1>
      <button className="bg-red-500 text-white px-3 mx-2 py-2 rounded-lg font-serif hover:bg-red-700 font-bold"  onClick={handleClearCart}>
        Clear Cart
      </button>

      <div className="cart-items w-9/12 m-auto">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
