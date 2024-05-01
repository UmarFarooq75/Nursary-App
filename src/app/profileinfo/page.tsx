"use client";
import img from "../img/logo.jpg"; // Ensure the correct path is specified
import Image from "next/image";
import { GrLike } from "react-icons/gr";
import { useState, useEffect } from "react";
import Navbar from "../navbar/page";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates optio odio pariatur quos molestias, ipsum eligendi. Repellendus ex officiis explicabo quas ea quidem dolor amet voluptatum, laudantium quos enim!";

const ProfileInfo = () => {
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
      <Navbar />
      <div className="bg-white ">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Profile</h1>
        </div>
        <div className="lg:flex relative lg:p-20">
          <div className="lg:w-[30%] lg:space-y-5 ml-2">
            <Image
              className="lg:w-[60%] h-[35%] rounded-md"
              src={img}
              alt="profile"
            />
            <div className="w-[67%]  space-y-4">
              <h1 className="text-md font-semibold text-gray-800 ">
                Description
              </h1>
              <p className="text-sm text-gray-800 w-[92%]">{description}</p>
              <h1 className="text-md font-semibold text-gray-800">
                Experience
              </h1>
              <p className="text-sm text-gray-800 w-[92%]">{description}</p>
            </div>
          </div>
          <div className="mt-3 lg:space-y-6 lg:w-[65%] lg:-ml-28">
            <div>
              <div className="flex flex-row mb-1 space-x-5 items-center">
                <h1 className="text-black font-bold text-xl">Name</h1>
              </div>
              <span className="text-sm  text-gray-600 font-semibold">
                Lahore
              </span>
            </div>
            <div>
              <span className="text-sm  text-gray-600 font-semibold">
                Rating
              </span>
              <div>{loading ? "Loading..." : renderStars()}</div>
            </div>
            <div className="lg:space-y-7 w-[80%]">
              <h1 className="text-gray-500 font-semibold">
                PERSONAL INFORMATION
              </h1>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm  text-gray-600 font-semibold">
                    Phone :
                  </span>
                  <span className="text-sm text-gray-800">+9230343343</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm  text-gray-600 font-semibold">
                    Address :
                  </span>
                  <span className="text-sm text-gray-800">
                    J1 Block Johar Tow,Lahore,Punjab,Pakistan{" "}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm  text-gray-600 font-semibold">
                    Email :
                  </span>
                  <span className="text-sm text-gray-800">
                    example@test.com
                  </span>
                </div>
                <div className="justify-between w-[100%]">
                  <span className="text-sm  text-gray-600 font-semibold">
                    Reviews :
                  </span>
                  <div className="flex flex-row shadow-xl shadow-gray-800 p-6 mt-5">
                    <div className="flex flex-col w-[35%] justify-center items-center">
                      <Image
                        className="w-[25%] h-[55%] rounded-full mt-4"
                        src={img}
                        alt="profile"
                      />
                      <span className="text-sm font-semibold mt-3">
                        Alex Harper
                      </span>
                      <span className="text-sm mt-1">lorem ipsum</span>
                      <span className="text-sm mt-4">{"12 "}Comments</span>
                    </div>
                    <div className="flex h-full w-[5%] mt-6">
                      <hr className="bg-gray-500 w-px h-28" />
                    </div>
                    <div className="flex flex-col w-[100%] justify-center">
                      <span className="text-sm font-semibold">
                        "Alex Harper"
                      </span>
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
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nisi nesciunt nemo tenetur voluptate quibusdam.
                          Provident aliquam, nihil error aspernatur a quos fugit
                          quam nostrum voluptates, dicta porro eius quasi
                          possimus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center bg-gray-100 p-3 w-[90%] ml-20">
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
      </div>
    </div>
  );
};

export default ProfileInfo;
