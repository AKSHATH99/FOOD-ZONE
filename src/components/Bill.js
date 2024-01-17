import React from "react";

const Bill = ({ cartItems, total }) => {
  return (
    <div className="border border-black bg-gray-100 w-1/2 mx-8 mb-8 p-4 rounded-md shadow-md">
      <p className="font-bold text-2xl mb-4">YOUR ORDER IS PLACED 🎉</p>
      <p className="ml-4">
        ORDER ID: {Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}
      </p>
      <table className="m-4 w-full">
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td className="text-sm">{item.computedPrice / item.food.Price}</td>
            <td className="px-6 border-black">{item.food.Food}</td>
            <td className="text-sm">₹{item.computedPrice}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="3" className="font-bold text-lg mt-2">
            TOTAL : ₹{total}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Bill;
