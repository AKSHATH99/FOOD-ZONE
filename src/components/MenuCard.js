import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const MenuCard = ({ foodData }) => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  console.log(foodData);
  const handleAddItem = (food) => {
    const computedPrice = foodData.Price * quantity;
  
    dispatch(addItem({
      food,
      computedPrice
    }));
  };
  

  const IncreaseQuantity=()=>{
    setquantity(quantity+1)
  }
  const DecreaseQuantity=()=>{
    setquantity(quantity-1)
  }
  const ComputedPrice=foodData.Price * quantity
  return (
    <div className="border border-black rounded-lg m-6 bg-black text-white shadow-lg  ">
      <img className="w-56 h-40" src={foodData.img} />
      <span className="font-bold m-5 ml-0">{foodData.Food} </span>{" "}
      <span className="font-bold "> ₹{ComputedPrice} </span>
      <div className="flex">
        <h1 className="m-4"> Quantity : </h1>
        <div className="flex">
          <button onClick={IncreaseQuantity} className="border text-black bg-white h-5 mt-5 w-5 mr-0  flex justify-center items-center   ">
            +
          </button>{" "}
          <div className="bg-white w-10 h-5 font-bold text-black  mt-5  m-4 mx-1 flex justify-center items-center ">
            {quantity}
          </div>
          <button onClick={DecreaseQuantity} className="border text-black bg-white h-5 mt-5 w-5 ml-0 flex justify-center items-center  ">
            -
          </button>
        </div>
      </div>
      <button
        className="bg-gray-800 text-white h-12 w-full bottom-0"
        onClick={() => handleAddItem(foodData)}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default MenuCard;