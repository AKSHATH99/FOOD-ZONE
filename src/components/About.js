import React from "react";

const About = () => {
  // const bgImage = "https://m.media-amazon.com/images/I/71mlk+5TszL.jpg";
  const bgImage =
    "https://www.clubmarriott.in/content/dam/tlc/en/marriott/club-marriott/club-marriott-india/city/bengaluru/sheraton-grand-bangalore-hotel-at-brigade-gateway/dining/side-horizon.jpg";

  return (
    <div className="bg-yellow-200 w-full h-full m-0 mt-20" >
      <div
        className=" text-4xl font-mono h-96 font-bold  text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-8xl ml-44 text-black mt-7">ABOUT US</p>
      </div>
      <p className=" border border-black w-8/12 h-4/5 ml-44    mt-5  p-7 bg-yellow-100 shadow-lg font-mono ">
        Welcome to Food Zone, a culinary haven in the heart of Kerala, dedicated
        to crafting unforgettable dining experiences for our cherished guests.{" "}
        <br />
        <br />
        Our chefs, inspired by diverse culinary traditions, infuse creativity
        into every dish, ensuring a celebration of flavors, textures, and aromas
        on a meticulous journey for your taste buds.
        <br />
        <br /> Committed to freshness and sustainability, we use only the finest
        locally-sourced ingredients—farm-fresh vegetables, succulent meats, and
        the finest seafood—presenting a menu that is both a masterpiece of
        flavor and a testament to our dedication.
        <br />
        <br />
        Step into our inviting ambiance, where modern elegance meets rustic
        charm, providing the perfect setting for any occasion. Whether it's a
        special celebration, a casual meal with friends, or a cozy romantic
        dinner, Food Zone welcomes you with warmth.
        <br />
        <br />
        Central to our philosophy is a passion for hospitality. Our attentive
        and friendly staff is committed to delivering impeccable service,
        creating exceptional dining moments from the moment you enter until the
        last delightful bite.
        <br />
        <br />
        Explore our curated selection of wines, craft cocktails, and
        non-alcoholic beverages expertly paired with our culinary offerings. Our
        sommeliers are ready to guide you through a perfect pairing, enhancing
        your overall dining experience.
        <br />
        <br /> Food Zone is not just a place to eat; it's a destination where a
        passion for food and a commitment to service create lingering memories.
        Join us on a gastronomic journey that transcends the ordinary and
        elevates the dining experience.
        <br />
        <br /> Food Zone is more than just a place to eat; it's a destination
        where passion for food and a commitment to service come together to
        create moments that linger in your memory. We invite you to join us on a
        gastronomic journey that transcends the ordinary and elevates the dining
        experience.
        <br /> Thank you for choosing Food Zone. We look forward to serving you
        and creating culinary memories that last a lifetime.
        <div className="flex mt-4 ">
          <p className="m-4 font-bold">Connect With Us For Offers And Updates  : </p>
          <p className="m-4">INSTA</p>
          <p className="m-4">FB</p>
          <p className="m-4">CALL</p>
          <p className="m-4">MAIL </p>
        </div>
        <div className="flex mb-3 mt-4"> 
        <img className="w-8 h-8 mr-4"  src="https://e7.pngegg.com/pngimages/137/787/png-clipart-location-icon-computer-icons-map-location-map-geolocation-symbol-thumbnail.png"/>
        <p className="text-xl">LOCATION</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015191.595793188!2d71.45523938750001!3d10.650462399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795291c8474c1%3A0x52af3834a8c97c3!2sFOOD%20ZONE!5e0!3m2!1sen!2sin!4v1705251656981!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: 2 + 'px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>
    </div>
  );
};

export default About;
