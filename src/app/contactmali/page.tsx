"use client";
// The imports remain the same
import React, { useState, useEffect } from "react";
import img from "../img/logo.jpg"; // Ensure the correct path is specified
import Image from "next/image";
import { GrLike } from "react-icons/gr";
import Navbar from "../navbar/page";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates optio odio pariatur quos molestias, ipsum eligendi. Repellendus ex officiis explicabo quas ea quidem dolor amet voluptatum, laudantium quos enim!";

const ContactMali = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRating(4);
      setLoading(false);
    }, 1000);
  }, []);

  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`cursor-default ${
          i < rating ? "text-yellow-500" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-white p-4 lg:p-8 xl:w-full">
        <div className="text-center mb-16">
          <h1 className="text-lg text-opacity-75 font-semibold text-gray-700">
            Contact Mali
          </h1>
        </div>
        <div className="flex lg:flex-row justify-center px-16 items-start lg:space-x-10 xl:space-x-20 w-full">
          <div className="lg:w-1/3 xl:w-1/4 space-y-5 ml-10">
            <Image
              src={img}
              alt="profile"
              width={200}
              height={200}
              className="rounded-md ml-10"
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-2/3 xl:w-3/4 space-y-6 -ml-16">
            <div className="lg:w-1/3 xl:w-3/4 space-y-6 mt-10 lg:mt-0">
              <div className="mb-1 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-5">
                <h1 className="text-black font-bold text-xl">Name</h1>
              </div>
              <span className="text-sm">Nursary Lahore</span>
            </div>
            <div>
              <span className="text-sm text-gray-800">Rating</span>
              <div>{loading ? "Loading..." : renderStars()}</div>
            </div>
            <div className="lg:w-1/5 xl:w-2/4 space-y-6 mt-10 lg:mt-0">
              <h1 className="text-gray-500 font-semibold">
                PERSONAL INFORMATION
              </h1>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">Phone :</span>
                  <span className="text-sm text-blue-600">+9230343343</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">Address :</span>
                  <span className="text-sm text-gray-800">
                    J1 Block Johar Town, Lahore, Punjab, Pakistan
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">Email :</span>
                  <span className="text-sm text-blue-600">
                    example@test.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    Nursary Contact :
                  </span>
                  <span className="text-sm text-blue-600">+9230343343</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-7">
          <div className="flex-1 justify-center items-center bg-gray-100 p-3 w-[90%] mt-10 ml-20">
            <div className="flex flex-row">
              <span className="text-lg w-72 mt-4">
                Enter Your Query send request to Botanist
              </span>
              <textarea
                className="p-2 ml-7 border-gray-400 border"
                style={{ width: "90%", height: "150px" }} // Adjust width and height as needed
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-gray-900 text-white p-2 px-4 rounded-xl hover:bg-black md:p-3 md:px-6">
                Send Request
              </button>
            </div>
          </div>
          <div className="lg:ml-24 mt-10">
            <h1 className="text-gray-500 font-semibold">Reviews</h1>
            <div className="flex flex-col shadow-2xl shadow-gray-800 p-4 md:flex-row md:p-6 md:mt-5 md:w-[80%] md:ml-8">
              <div className="flex flex-col md:w-[35%] justify-center items-center">
                <Image
                  className="w-[25%] h-[55%] rounded-full mt-4"
                  src={img}
                  alt="profile"
                />
                <span className="text-sm font-semibold mt-3">Alex Harper</span>
                <span className="text-sm mt-1">lorem ipsum</span>
                <span className="text-sm mt-4">12 Comments</span>
              </div>
              <div className="hidden md:flex h-full w-[5%] mt-6">
                <hr className="bg-gray-500 w-px h-28" />
              </div>
              <div className="flex flex-col w-full md:w-[100%] justify-center mt-4 md:mt-0 md:ml-4">
                <span className="text-sm font-semibold">"Alex Harper"</span>
                <div className="flex flex-row">
                  <div>
                    {loading ? "Loading..." : renderStars()}
                    <span className="ml-2 md:ml-10 text-xs text-gray-800">
                      22 Sep 2025
                    </span>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 md:space-x-4">
                  <GrLike className="h-12 w-12 md:h-16 md:w-16" />
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
    </>
  );
};

export default ContactMali;
