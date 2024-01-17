import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bill from "./Bill";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [placeOrder, setPlaceOrder] = useState(false);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    setPlaceOrder(false);
    dispatch(clearCart());
  };

  const order = () => {
    setPlaceOrder(true);
  };

  const CalculateTotal = (cartItems) => {
    const sum = cartItems.reduce(function (acc, curr) {
      return acc + curr.computedPrice;
    }, 0);

    return sum;
  };

  return (
    <div className="bg-yellow-100 min-h-screen mt-20 ">
      <div className="container mx-auto p-8 ml-56">
        <h1 className="text-4xl font-bold mb-8">My Cart</h1>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
              <table className="w-full ">
                <thead>
                  <tr>
                    <th className="border px-3 py-2">Item</th>
                    <th className="border px-3 py-2">Quantity</th>
                    <th className="border px-3 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-3 py-2">{item.food.Food}</td>
                      <td className="border px-3 py-2">{item.computedPrice / item.food.Price}</td>
                      <td className="border px-3 py-2">₹{item.computedPrice}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-bold text-lg ml-3 border py-2">Total</td>
                    <td className="font-bold text-lg ml-3 border py-2">₹{CalculateTotal(cartItems)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex mt-4">
                <button
                  className="flex-1 bg-gray-700 text-white font-bold rounded-md py-2 mr-2"
                  onClick={order}
                >
                  Place My Order
                </button>
                <button
                  className="flex-1 bg-red-700 text-white font-bold rounded-md py-2"
                  onClick={() => handleClearCart()}
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
          <div className="text-4xl m-44 mb-20 ml-80 font-bold font-mono ">Your Cart Is Empty  </div>
          <img className="h-72 ml-96 w-72 -mt-5" src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"/></>
        )}
      </div>
      {placeOrder ? <Bill cartItems={cartItems} total={CalculateTotal(cartItems)} /> : null}
    </div>
  );
};

export default Cart;
