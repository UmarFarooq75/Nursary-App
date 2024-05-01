"use client";
import React, { useState } from "react";

import { TEInput } from "tw-elements-react";
import Navbar from "../navbar/page";

const AddProduct = () => {
  const [disable, setDisable] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-white p-5 w-full">
        {/* Container for Heading */}
        <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[75%] xl:w-[60%] 2xl:w-[50%] flex justify-between items-center mb-10">
          <div className="flex-grow text-center ml-14">
            {/* Heading */}
            <h1 className="text-gray-700 text-2xl inline-block font-semibold">
              Product Details
            </h1>
          </div>
          <button className="flex items-center justify-end bg-blue-600 p-1 px-3 shadow-sm shadow-black rounded-md">
            <span className="text-white text-sm">Add Product</span>
          </button>
        </div>
        {/* Form Container */}
        <div className="bg-gray-100 bg-opacity-50 p-8 rounded-md sm:w-[90%] md:w-[90%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] shadow-2xl shadow-gray-500">
          <form className="grid grid-cols-1 gap-4">
            {/* Name Field */}
            <div className="mb-4">
              <TEInput
                type="text"
                id="productname"
                name="productname"
                label="Product Name"
                size="lg"
              />
            </div>

            <div className="mb-4">
              <TEInput
                type="text"
                id="id"
                name="id"
                label="Product ID"
                size="lg"
              />
            </div>
            <div className="mb-4">
              <TEInput
                type="text"
                id="price"
                name="price"
                label="Price"
                size="lg"
              />
            </div>
            {/* Phone Field */}
            <div className="mb-4">
              <TEInput
                type="number"
                id="quantity"
                name="quantity"
                label="Quantity"
                size="lg"
              />
            </div>
            {/* Address Field */}
            <div className="w-full">
              <select
                id="educationLevel"
                name="educationLevel"
                className="p-2.5 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md h-11 focus:ring-gray-500 focus:border-gray-500 block w-full dark:bg-gray-200 focus:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                // onChange={handleInputChange}
              >
                <option value="MATRIC">abc</option>
                <option value="INTER">ddd</option>
                <option value="BS">ggg</option>
              </select>
            </div>

            {/* File Upload Field */}
            <div className="w-full ">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                htmlFor="degree_document_input"
              >
                Images
              </label>
              <input
                type="file"
                id="degree_document_input"
                className="border p-1.5 rounded-md text-gray-700 bg-transparent focus:bg-white w-full"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-800"
                id="degree_document_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            {/* Submit Button */}
            <button
              disabled={disable}
              type="submit"
              className={`p-3 rounded-md text-white w-full ${
                disable ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
