  import React from "react";
  import { Link } from "react-router-dom";
  import Contact from "./Contact";

  const Home = () => {
    const bgImage = 
    // "https://www.clubmarriott.in/content/dam/tlc/en/marriott/club-marriott/club-marriott-india/city/bengaluru/sheraton-grand-bangalore-hotel-at-brigade-gateway/dining/side-horizon.jpg"
      
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/food-advertisements-burger.jpg";
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen flex items-center"
      >
        <p className="-mt-72 320:-mt-96 text-4xl 320:text-2xl  ml-3  font-mono text-white">
          DELIGHT IN EVERY BITE.....
        </p>
          {/* <ul className="flex -mt-44 -ml-96"> */}
          <ul className="flex mt-48 -ml-96 320:-ml-80 320:mt-0  ">
          <li className="text-white text-base 320:hidden ">FOLLOW US  :</li  >
            <li className="m-5 mt-0">
              <img
                className="h-7 w-7 "
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-1200x1199.png"
                        />
            </li>
            <li className="m-5 ml-0 mr-1 mt-0">
              {" "}
              <img
                className="w-7 h-7 ml-1"
                src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png"
              />
            </li>
            <li className="m-5 mt-0"><img
                className="w-6 h-6 ml-1"
                
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png"
              /></li>
          </ul>
        <div className="-ml-96 -mt-20 320:-mt-64 ">
        <Link to="/menu"><button className="m-8 bg-gray-800 rounded-lg text-white h-16 w-40 320:text-sm 320:h-10 320:mr-0 320:ml-52 320:w-36">
            ORDER YOUR FOOD{" "}
          </button></Link>    
        <Link to="/party">  <button className="m-8 bg-gray-800 rounded-lg text-white h-16 w-40 320:text-sm 320:h-10 320:w-36">
          PARTY ORDERS
          </button></Link>
        </div>
        
      </div>
    );
  };

  export default Home;
