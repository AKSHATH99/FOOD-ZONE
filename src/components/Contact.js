import React from "react";

const Contact = () => {
  const bgImage = 
  // "https://www.clubmarriott.in/content/dam/tlc/en/marriott/club-marriott/club-marriott-india/city/bengaluru/sheraton-grand-bangalore-hotel-at-brigade-gateway/dining/side-horizon.jpg"
    "https://img.freepik.com/premium-photo/restaurant-cafe-coffee-shop-interior-with-people-abstract-defocused-blur-background_293060-3973.jpg"
    // "https://th.bing.com/th/id/OIG.EuweYjaIhARAXTNJ9Jug?pid=ImgGn";

  return (
    <div className="flex flex-col items-center bg-yellow-100 h-full mt-0 p-8"style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      // backgroundPosition: "center",  
    }}>
      <div>
        {/* <h1 className="text-4xl font-mono font-bold text-white">CONTACT </h1>  */}
      </div>
      <div className="border-4 w-max mt-32 p-8 bg-yellow-200 ">
        <h1 className="text-3xl font-bold mb-8 font-mono 320:ml-4">CONTACT US</h1>

        <ContactInfo iconSrc="https://pngimg.com/d/phone_PNG48920.png" text="888-00-11-99" />
        <ContactInfo iconSrc="https://cdn-icons-png.flaticon.com/512/646/646094.png" text="hello@foodzone.com" />
        <ContactInfo iconSrc="https://e7.pngegg.com/pngimages/137/787/png-clipart-location-icon-computer-icons-map-location-map-geolocation-symbol-thumbnail.png" text="FOOD ZONE" />

        <div className="flex m-6">
          <img className="w-8 h-8" src="https://e7.pngegg.com/pngimages/137/787/png-clipart-location-icon-computer-icons-map-location-map-geolocation-symbol-thumbnail.png" alt="Map Icon" />
          <p className="text-xl ml-5">FOOD ZONE</p>
        </div>
        <div className="w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015191.595793188!2d71.45523938750001!3d10.650462399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795291c8474c1%3A0x52af3834a8c97c3!2sFOOD%20ZONE!5e0!3m2!1sen!2sin!4v1705251656981!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: 2 + 'px' }}
          allowFullScreen=""  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

      {/* <div className="border-2 border-black h-max w-max mt-8 p-8"></div> */}
    </div>
  );
};

const ContactInfo = ({ iconSrc, text }) => {
  return (
    <div className="flex items-center m-6">
      <img className="w-8 h-8" src={iconSrc} alt="Contact Icon" />
      <p className="text-xl ml-5">{text}</p>
    </div>
  );
};

export default Contact;
