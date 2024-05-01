import React, { useState } from "react";
import CardBC from "../card/page";

const data = [
  {
    title: "Iphone",
    price: "1000",
    rating: 3,
  },
  {
    title: "Iphone",
    price: "2000",
    rating: 4,
  },
  {
    title: "Iphone",
    price: "3000",
    rating: 5,
  },
  {
    title: "Iphone",
    price: "4000",
    rating: 1,
  },
  {
    title: "Iphone",
    price: "3000",
    rating: 5,
  },
  {
    title: "Iphone",
    price: "4000",
    rating: 1,
  },
  {
    title: "Iphone",
    price: "3000",
    rating: 5,
  },
  {
    title: "Iphone",
    price: "4000",
    rating: 1,
  },
  {
    title: "Iphone",
    price: "3000",
    rating: 5,
  },
  {
    title: "Iphone",
    price: "4000",
    rating: 1,
  },
  // More items...
];

export default function FlowerComponent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
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
    <div className="mt-10 border-t border-gray-400">
      <h1 className="text-2xl font-semibold mb-10 ml-9 mt-10">Flowers</h1>
      <div className="flex items-center">
        <button
          onClick={() => scroll(-1)}
          className="p-2 mr-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 0}
        >
          &lt;
        </button>
        <div className="flex flex-row">
          {currentData.map((item, index) => (
            <div key={index} className="flex justify-center items-center ml-2">
              <CardBC item={item} index={index + currentPage * itemsPerPage} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll(1)}
          className="p-2 ml-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
