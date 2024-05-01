"use client";
import React from "react";

export default function AdComponent({
  heading,
  description,
}: {
  heading: string;
  description: string;
}): JSX.Element {
  return (
    <section className="flex border-t border-b border-gray-500 mt-10">
      <div className="h-full w-full">
        {/* Container */}
        <div className="flex flex-wrap justify-center items-center lg:justify-between w-full h-full">
          {/* Text Section */}
          <div className="flex flex-col mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12  p-4">
            <h1 className="text-4xl mb-4">{heading}</h1>
            <p className="text-md mb-4">{description}</p>
            {/* Button Centering Wrapper */}
            <div className="w-full flex justify-center">
              <button className="bg-green-600 w-[30%] text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                Click Here
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="shrink-0 mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
