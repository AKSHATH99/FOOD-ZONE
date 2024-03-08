import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../Utils/store";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartITems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full ${
        isScrolled ? "bg-transparent" : "h-20"
      }  bg-gray-800 flex text-white transition-all duration-300 fixed top-0 hover:bg-gray-800 hover:text-white `}
    >
      <img
        className="h-28 w-28 m-4 mt-2 320:w-12 320:h-12  320:mr-0 "
        src="https://masterbundles.com/wp-content/uploads/2023/02/green@3x-366.png"
      />
      <div className={`md:ml-36 320:ml-0 flex  md:justify-around ${isScrolled ? "mt-0" : "h-32"}`}>
        <Link to="/">
          {" "}
          <p className="md:m-9 320:m-1  md:text-xl 320:text-sm    mt-10">HOME</p>
          </Link>
          <Link to="/about">
          {" "}
          <p className="md:m-9 320:m-1 md:text-xl 320:text-sm mt-10">ABOUT US</p>
        </Link>
        <Link to="/menu">
          {" "}
          <p className="md:m-9 320:m-1 md:text-xl 320:text-sm mt-10">MENU & ORDERS</p>{" "}
        </Link>
        <Link to="/cart">
          {" "}
          <p className="md:m-9 320:m-1 md:text-xl 320:text-sm mt-10">
            CART - {cartITems.length} items
          </p>
        </Link>
        <Link to="/contact">
          {" "}
          <p className="md:m-9 320:m-1 md:text-xl 320:text-sm mt-10">CONTACT</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
