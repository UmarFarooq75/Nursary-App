import Link from "next/link";
import React from "react";
import Navbar from "../navbar/page";

const ContactuS = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-16">
        <div className="flex w-[70%] flex-col space-y-5 border border-gray-200 bg-white shadow-xl p-5 items-center justify-center">
          <h1 className="text-5xl font-medium">Contact Us</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aliquam nobis officia impedit obcaecati dolor, est asperiores
            cupiditate dolore.
          </p>
          <a
            href="mailto:botany@gmail.com"
            className="text-blue-500 md:text-lg hover:underline"
          >
            botany@gmail.com
          </a>
          <div className="flex flex-col space-y-3 items-center justify-center">
            <a
              href="tel:+92343049342"
              className="text-gray-600 md:text-base hover:underline"
            >
              +92343049342
            </a>
            <span className="text-gray-600 md:text-base">
              {"M-F 9am - 5:30 pm EST"}
            </span>
            <span className="text-gray-600 md:text-base">
              {"Near Kashmir Chowk,Lahore"}
            </span>
            <span className="text-gray-600 md:text-base">
              {"Block1,JT,Lahore (By Online only"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactuS;
