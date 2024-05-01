"use client";
import React from "react";
import img from "../img/logo.jpg"; // Ensure the correct path is specified
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from "react";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates optio odio pariatur quos molestias, ipsum eligendi. Repellendus ex officiis explicabo quas ea quidem dolor amet voluptatum, laudantium quos enim!";

const EditNursery = () => {
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
    <>
      <Navbar />
      <div className="items-center justify-center w-screen bg-white p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Edit Nursery</h1>
        </div>
        <div className="lg:flex relative lg:p-20">
          <div className=" w-[30%] space-y-5">
            <Image
              className="lg:w-[60%] h-[50%] rounded-md"
              src={img}
              alt="profile"
            />
            <h1 className="text-md font-semibold text-gray-600">
              Description{" "}
              <button className="ml-3">
                <CiEdit />
              </button>
            </h1>
            <p className="w-[60%] text-sm text-gray-800">{description}</p>
          </div>
          <div className="mt-3 space-y-6 w-[35%] -ml-28">
            <div>
              <div className="flex flex-row mb-1 space-x-5 items-center">
                <h1 className="text-black font-bold text-xl">Name</h1>
                <button className="ml-3">
                  <CiEdit />
                </button>
              </div>
              <span className="text-sm text-blue-500">
                Lahore
                <button className="ml-3">
                  <CiEdit />
                </button>
              </span>
            </div>
            <div>
              <span className="text-sm  text-gray-600 font-semibold">
                Rating
              </span>
              <div>{loading ? "Loading..." : renderStars()}</div>
            </div>
            <div className="space-y-7 w-[100%]">
              <h1 className="text-gray-500 font-semibold">
                PERSONAL INFORMATION
              </h1>
              <div className="flex justify-between w-[100%]">
                <span className="text-sm  text-gray-600 font-semibold">
                  Phone :
                </span>
                <span className="text-sm   text-blue-500">
                  +9230343343{" "}
                  <button className="ml-3">
                    <CiEdit />
                  </button>
                </span>
              </div>
              <div className="flex justify-between w-[100%]">
                <span className="text-sm  text-gray-600 font-semibold">
                  Address :
                </span>
                <span className="text-sm  text-gray-800">
                  J1 Block Johar Tow,Lahore,Punjab,Pakistan{" "}
                  <button className="ml-3">
                    <CiEdit />
                  </button>
                </span>
              </div>
              <div className="flex justify-between w-[100%]">
                <span className="text-sm  text-gray-600 font-semibold">
                  Email :
                </span>
                <span className="text-sm  text-blue-500">
                  example@test.com{" "}
                  <button className="ml-3">
                    <CiEdit />
                  </button>
                </span>
              </div>
              <div className="flex ml-0.5 justify-between w-[100%]">
                <span className="text-sm  text-gray-600 font-semibold">
                  Change Password :
                </span>
                <span className="text-sm  text-gray-800">
                  ********{" "}
                  <button className="ml-3">
                    <CiEdit />
                  </button>
                </span>
              </div>
              <div className="flex justify-between w-[100%]">
                <span className="text-sm  text-gray-600 font-semibold">
                  Change ID :
                </span>
                <span className="text-sm  text-gray-800">
                  umairArshid_22{" "}
                  <button className="ml-3">
                    <CiEdit />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditNursery;
