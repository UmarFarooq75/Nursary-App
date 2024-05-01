"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import img from "../img/logo.jpg"; // Ensure the correct path is specified
import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Navbar from "../navbar/page";
import Link from "next/link";

const imgs = [
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
];

const Data = [
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "Close",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "Open",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "Close",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "Open",
  },
];

const Data1 = [
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "done",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "pending",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "progress",
  },
  {
    name: "Umair",
    id: "Umair_283",
    phone: "+92310865403",
    date: "01-02-2002",
    status: "denied",
  },
];

const BDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-white p-4 lg:p-8 xl:w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-opacity-75 font-semibold text-gray-700">
            DashBoard
          </h1>
        </div>
        <div className="mb-3 lg:mb-5 ml-3 lg:ml-10">
          <h1 className="ml-8 text-3xl lg:text-2xl xl:text-2xl text-opacity-75 font-semibold text-green-400">
            Ahmad Ali
          </h1>
          <div className="flex flex-row justify-between">
            <h1 className="ml-8 text-gray-700 text-lg font-semibold lg:text-md xl:text-lg text-opacity-75 lg:mt-4">
              Products Details
            </h1>
            <Link
              href="addproduct"
              className="flex items-center justify-end bg-blue-600 px-6 h-[33px] shadow-lg  rounded-md"
            >
              <span className="text-white text-sm">Add Product</span>
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row lg:ml-10 lg:w-[90%] space-y-4 lg:space-y-0 lg:space-x-4 ">
          <div className="p-3 lg:p-4 bg-green-400 lg:w-[30%] space-y-4 lg:space-y-7">
            <div className="flex flex-row justify-between items-center">
              <span className="text-gray-600">Total Products</span>
              <button>
                <HiOutlineDotsVertical />
              </button>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-xl lg:text-3xl">{"2,100"}</span>
              <span className="flex flex-row items-center text-xs lg:text-sm bg-lime-50 p-1 px-2 lg:px-3 rounded-2xl">
                <FaArrowUp className="mx-1" height={16} width={16} /> {"20%"}
              </span>
            </div>
          </div>
          <div className="p-3 lg:p-4 bg-purple-400  lg:w-[30%] space-y-4 lg:space-y-7">
            <div className="flex flex-row justify-between items-center">
              <span className="text-gray-600">Sold Produts</span>
              <button>
                <HiOutlineDotsVertical />
              </button>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-xl lg:text-3xl">{"1,200"}</span>
              <span className="flex flex-row items-center text-xs lg:text-sm bg-lime-50 p-1 px-2 lg:px-3 rounded-2xl">
                <FaArrowUp className="mx-1" height={16} width={16} /> {"10%"}
              </span>
            </div>
          </div>
          <div className="p-3 lg:p-4 bg-red-400 lg:w-[30%] space-y-4 lg:space-y-7">
            <div className="flex flex-row justify-between items-center">
              <span className="text-gray-600">UnSold Produts</span>
              <button>
                <HiOutlineDotsVertical />
              </button>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-xl lg:text-3xl">{"300"}</span>
              <div className="flex flex-row">
                {imgs.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt="profile"
                    width={30}
                    height={30}
                    className={`rounded-full border-2 border-white ${
                      index !== 0 ? "ml-[-12px] " : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full lg:w-[95%] mx-auto mt-8 lg:mt-10">
          {/* Headers */}
          <div className="grid grid-cols-5 text-center font-semibold px-2 py-3 bg-gray-200 rounded-tl-lg rounded-tr-lg">
            <span className="col-span-5 lg:col-span-1">Name</span>
            <span className="col-span-5 lg:col-span-1">Product ID</span>
            <span className="col-span-5 lg:col-span-1">Total Unit</span>
            <span className="col-span-5 lg:col-span-1">Unsold Unit</span>
            <span className="col-span-5 lg:col-span-1">Status</span>
          </div>

          {/* Data Rows */}
          {Data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 text-center p-2 shadow-lg border border-gray-300 mt-2 items-center"
            >
              <div className="col-span-5 lg:col-span-1 flex justify-center lg:justify-start items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={img}
                    alt="profile"
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                </div>
                <span className=" lg:inline text-xs lg:text-sm ml-20">
                  {item.name}
                </span>
              </div>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.id}
              </span>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.phone}
              </span>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.date}
              </span>
              <span className="flex col-span-5 lg:col-span-1 text-xs lg:text-sm rounded-lg w-full item-center justify-center">
                <span
                  className={`col-span-5 lg:col-span-1 text-xs lg:text-sm p-1 px-3 text-center rounded-lg ${
                    item.status === "Open"
                      ? "bg-green-500"
                      : item.status === "Close"
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  {item.status}
                </span>
              </span>
            </div>
          ))}
        </div>
        <h1 className="ml-10 mt-8 text-gray-700 text-2xl font-semibold">
          Order List
        </h1>
        <div className="max-w-full lg:w-[95%] mx-auto mt-6 lg:mt-10">
          {/* Headers */}
          <div className="grid grid-cols-5 text-center font-semibold px-2 py-3 bg-gray-200 rounded-tl-lg rounded-tr-lg">
            <span className="col-span-5 lg:col-span-1">Name</span>
            <span className="col-span-5 lg:col-span-1">Product ID</span>
            <span className="col-span-5 lg:col-span-1">Total Unit</span>
            <span className="col-span-5 lg:col-span-1">Unsold Unit</span>
            <span className="col-span-5 lg:col-span-1">Status</span>
          </div>

          {/* Data Rows */}
          {Data1.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 text-center p-2 shadow-lg border border-gray-300 mt-2 items-center"
            >
              <div className="col-span-5 lg:col-span-1 flex justify-center lg:justify-start items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={img}
                    alt="profile"
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                </div>
                <span className=" lg:inline text-xs lg:text-sm ml-20">
                  {item.name}
                </span>
              </div>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.id}
              </span>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.phone}
              </span>
              <span className="col-span-5 lg:col-span-1 text-xs lg:text-sm">
                {item.date}
              </span>
              <span className="flex col-span-5 lg:col-span-1 text-xs lg:text-sm rounded-lg w-full item-center justify-center">
                <span
                  className={`col-span-5 lg:col-span-1 text-xs lg:text-sm p-1 px-3 text-center rounded-lg ${
                    item.status === "pending"
                      ? "bg-pink-400"
                      : item.status === "done"
                      ? "bg-green-500"
                      : item.status === "progress"
                      ? "bg-blue-400"
                      : item.status === "denied"
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  {item.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BDashboard;
