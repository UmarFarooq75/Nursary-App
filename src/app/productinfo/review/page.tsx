"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GrLike } from "react-icons/gr";
import img from "../../img/logo.jpg";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

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
    <div className="">
      <div className="my-10 mx-auto max-w-screen-md py-10">
        <div className="flex w-full flex-col">
          <div className="flex flex-col sm:flex-row">
            <h1 className="max-w-sm text-3xl font-bold text-blue-900">
              What people think <br />
              about tailwind
            </h1>
            <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 sm:ml-auto">
              <div className="flex h-16 items-center text-2xl font-bold text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.7
              </div>
              <p className="text-sm text-gray-500">Average User Rating</p>
            </div>
          </div>
          <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">5</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-10/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">56</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">4</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-8/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">12</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">3</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-1/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">4</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">2</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-0 bg-yellow-400"></div>
                </div>
                <span className="w-3">0</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">1</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-1/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">5</span>
              </li>
            </ul>
          </div>
          <button className="w-44 rounded-full border-2 border-transparent bg-gray-500 px-3 py-3 text-center text-base font-bold  hover:text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-black text-white ">
            Write a review
          </button>
          <div className="justify-between w-[100%]">
            <div className="flex flex-row shadow-xl shadow-gray-800 p-6 mt-5">
              <div className="flex flex-col w-[35%] justify-center items-center">
                <Image
                  className="w-[25%] h-[55%] rounded-full mt-4"
                  src={img}
                  alt="profile"
                />
                <span className="text-sm font-semibold mt-3">Alex Harper</span>
                <span className="text-sm mt-1">lorem ipsum</span>
                <span className="text-sm mt-4">{"12 "}Comments</span>
              </div>
              <div className="flex h-full w-[5%] mt-6">
                <hr className="bg-gray-500 w-px h-28" />
              </div>
              <div className="flex flex-col w-[100%] justify-center">
                <span className="text-sm font-semibold">"Alex Harper"</span>
                <div className="flex flex-row">
                  <div>
                    {loading ? "Loading..." : renderStars()}
                    <span className="ml-10 text-xs text-gray-800">
                      {"22 Sep 2025"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <GrLike className="h-20 w-20" />
                  <p className="text-sm mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nisi nesciunt nemo tenetur voluptate quibusdam. Provident
                    aliquam, nihil error aspernatur a quos fugit quam nostrum
                    voluptates, dicta porro eius quasi possimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
