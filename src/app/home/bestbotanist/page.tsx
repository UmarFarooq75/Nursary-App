import ShadowBox from "@/app/malipage/shadowbox/page";
import React, { useState } from "react";

const data = [
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

export default function BotanistComponent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Changed to 8 because you want up to 8 boxes per "page"
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const scroll = (direction: number) => {
    setCurrentPage((prevCurrentPage) => {
      let nextPage = prevCurrentPage + direction;
      if (nextPage < 0) nextPage = 0;
      if (nextPage >= totalPages) nextPage = totalPages - 1;
      return nextPage;
    });
  };

  const currentData = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="mt-10">
      <h1 className="text-3xl text-gray-700 ml-10">Our Best Botanists</h1>
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => scroll(-1)}
            className="p-2 bg-gray-200 rounded hover:bg-gray-500 disabled:opacity-50 w-8"
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 bg-gray-200 rounded hover:bg-gray-600 disabled:opacity-50 w-8"
            disabled={currentPage === totalPages - 1}
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {currentData.map((item, index) => (
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
    </div>
  );
}
