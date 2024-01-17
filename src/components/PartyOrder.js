import React, { useState } from "react";
import Orderbill from "./Orderbill";

const PartyOrder = () => {
  const [partySize, setPartySize] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [foodType, setfoodType] = useState("");
  const [houseName, setHousename] = useState("");
  const [localityName, setlocalityname] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [placeorder, setplaceorder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here, such as sending the order to the server.

    // For example:
    console.log("Party Size:", partySize);
    console.log("Event Date:", eventDate);
    console.log("Contact Name:", contactName);
    console.log("Contact Email:", contactEmail);
    console.log("Contact Phone:", contactPhone);
    console.log("Contact Phone:", foodType);
    console.log("Contact Phone:", houseName);
    console.log("Contact Phone:", localityName);
    console.log("Contact Phone:", city);
    console.log("Contact Phone:", state);
    console.log("Contact Phone:", pincode);

    // Reset the form after submission
    setPartySize("");
    setEventDate("");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setfoodType("");
    setHousename("");
    setcity("");
    setstate("");
    setpincode("");
    setplaceorder(true);
  };

  return (
    <div className="mt-20 ml-56">
      {placeorder ? (
        <Orderbill
        size={partySize}
        date={eventDate}
        house={houseName}
        locality={localityName}
        city={city}
        pin={pincode}
      />
      
      ) : (
        <div className="mt-20 ml-32">
          <h2 className="text-4xl font-bold mb-4">Party Order Form</h2>
          <p className="m-6 text-xl">
            Fill out this form about party details. We will give you call for
            confirmation and further queries{" "}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-md border-4 p-7 ml-24"
          >
            <label htmlFor="partySize" className="mb-2">
              Party Size:
            </label>
            <input
              type="number"
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Number of people expected for party"
            />

            <label htmlFor="eventDate" className="mb-2">
              Event Date:
            </label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="mb-4 p-2 border"
              required
            />
            <label htmlFor="eventDate" className="mb-2">
              Food type :
            </label>
            <select
              type="date"
              id="eventDate"
              value={foodType}
              onChange={(e) => setfoodType(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="VEG /NON-VEG"
            >
              <option value="veg">Veg</option>
              <option value="non veg">Non-veg</option>
            </select>

            <label htmlFor="contactName" className="mb-2">
              Contact Name:
            </label>
            <input
              type="text"
              id="contactName"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Your name"
            />

            <label htmlFor="contactEmail" className="mb-2">
              Contact Email:
            </label>
            <input
              type="email"
              id="contactEmail"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Your Email to share order details and bills"
            />

            <label htmlFor="contactPhone" className="mb-2">
              Contact Phone:
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Contact No "
            />
            <label htmlFor="fullAddress">House Name / Street Name:</label>
            <input
              type="address"
              id="fullAddress"
              value={houseName}
              onChange={(e) => setHousename(e.target.value)}
              name="fullAddress"
              className="mb-4 p-2 border"
              placeholder="Enter your full address"
              required
            />
            <label htmlFor="contactPhone" className="mb-2">
              Locality Name :
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={localityName}
              onChange={(e) => setlocalityname(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Contact No "
            />
            <label htmlFor="contactPhone" className="mb-2">
              City :
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Contact No "
            />
            <label htmlFor="contactPhone" className="mb-2">
              State :
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Contact No "
            />
            <label htmlFor="contactPhone" className="mb-2">
              Pincode :
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
              className="mb-4 p-2 border"
              required
              placeholder="Contact No "
            />

            <button
              type="submit"
              className="bg-gray-800 text-white p-2 rounded-lg"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PartyOrder;
