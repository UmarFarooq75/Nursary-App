"use client";
import React, { useState } from "react";
import Navbar from "../../navbar/page";
import Footer from "../../footer/page";

// Define the ShadowBox component
const ShadowBox = ({ image, name, city, rating, contact, buttonText }: any) => {
  // State to manage the rating
  const [selectedRating, setSelectedRating] = useState(0);

  // Function to handle rating selection
  const handleRatingClick = (index: any) => {
    setSelectedRating(index);
  };

  // Render star icons based on selectedRating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer ${
            selectedRating >= i ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleRatingClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm font-bold text-gray-600">{city}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="mr-2">{renderStars()}</div>
        <p className="text-sm text-gray-600">{rating}</p>
      </div>
      <p className="text-sm text-gray-600 mb-4">{contact}</p>
      <button className="bg-green-500 text-white font-bold text-lg py-2 px-4 rounded-lg self-center transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700">
        {buttonText}
      </button>
    </div>
  );
};

// Export the ShadowBox component
export default ShadowBox;
