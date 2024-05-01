"use client";
import { useEffect, useState } from "react";
import img from "../img/logo.jpg"; // Ensure the correct path is specified
import Image from "next/image";
import Review from "./review/page";
import Description from "./desciption/page";
import PlantsComponent from "../home/plants/page";
import Link from "next/link";
import Navbar from "../navbar/page";
const ProductInfo = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showReview, setShowReview] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [title, setTitle] = useState("More Products");

  useEffect(() => {
    // Simulate fetching rating from backend
    setTimeout(() => {
      setRating(4); // Set the initial rating fetched from backend
      setLoading(false);
    }, 1000);
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-default ${
            i <= rating ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <section className="w-screen">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <Image
                className="sm:w-full sm:h-full lg:h-[80%] lg:w-[35%] lg:ml-28"
                src={img}
                alt=""
              />
            </div>
            {/* Additional product images */}
            <div className="lg:col-span-3 lg:ml-32 lg:-mt-28">
              <div className="lg:flex lg:items-start">
                {/* Additional images */}
                <div className="lg:order-2 lg:ml-5">
                  {/* Additional image buttons */}
                  <div className="max-w-xl overflow-hidden rounded-lg lg:flex lg:flex-wrap">
                    {/* Image buttons */}
                    {[...Array(3)].map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className="flex-0 aspect-square mb-3 lg:w-1/3 lg:pr-3 h-20 overflow-hidden rounded-lg border-2 border-gray-500 text-center"
                      >
                        {/* Additional image */}
                        <Image
                          className="h-full w-full object-cover"
                          src={img}
                          alt=""
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 lg:-ml-[100%]">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                Afro-Brazillian Coffee
              </h1>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                {/* <h1 className="sm: text-lg  text-gray-900 sm:text-3xl">
                Sold By :
              </h1> */}
                <h1 className="sm: text-lg font-semibold text-gray-900 sm:text-3xl">
                  Lahore Nursery
                </h1>
              </div>

              <div className="mt-4 flex select-none flex-wrap items-center gap-4">
                <h1 className="sm: text-lg  text-gray-900 sm:text-3xl ">
                  Quantity
                </h1>
                <select
                  name=""
                  id=""
                  className="border border-gray-900 p-0.5 px-2"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  {loading ? "Loading..." : renderStars()}
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  1,209 Reviews
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">$60.50</h1>
                </div>
                <Link href="shipping">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-500 px-12 py-3 text-center text-base font-bold  hover:text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </Link>
                <Link href="cart">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-500 px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </Link>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 lg:ml-28">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <button
                    onClick={() => {
                      setShowReview(true);
                      setShowDescription(false);
                    }}
                    className={`border-b-2 flex justify-center items-center space-x-2 ${
                      showReview
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-600"
                    } py-4 text-sm font-medium hover:border-gray-400 hover:text-gray-800`}
                  >
                    <span>Review</span>
                    <span className=" block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                      {" "}
                      1,209{" "}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setShowReview(false);
                      setShowDescription(true);
                    }}
                    className={`border-b-2 ${
                      showDescription
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-600"
                    } py-4 text-sm font-medium hover:border-gray-400 hover:text-gray-800`}
                  >
                    Description
                  </button>
                </nav>
                {/* Render Review component if showReview is true */}
                {showReview && <Review />}

                {/* Render Description component if showDescription is true */}
                {showDescription && <Description />}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PlantsComponent title={title} />
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
