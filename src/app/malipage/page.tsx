import React from "react";
import ShadowBox from "./shadowbox/page";
import Navbar from "../navbar/page";

const Data = [
  {
    image: "https://picsum.photos/id/7/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/17/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/27/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/37/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/47/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/57/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/67/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/77/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/87/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
  {
    image: "https://picsum.photos/id/197/200/300", // Corrected image URL
    name: "John Doe",
    city: "New York",
    rating: "4.5 (100 reviews)",
    contact: "example@example.com",
    buttonText: "Book Now",
  },
];

function MaliPage() {
  return (
    <>
      <Navbar />

      <div className="pb-10 m-4">
        <div className="space-y-4">
          <h1 className="flex text-3xl font-bold text-gray-700 items-center self-center justify-center">
            Hire a Mali
          </h1>
          <h1 className="text-3xl text-gray-700 ml-10">Mali List</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-6 space-y-6">
          {Data.map((item, index) => (
            <ShadowBox
              key={index}
              image={item.image}
              name={item.name}
              city={item.city}
              rating={item.rating}
              contact={item.contact}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MaliPage;
