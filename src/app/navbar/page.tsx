"use client";
import React, { useState } from "react";
import Dropdown from "./dropdown/page";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-white mb-5">
      <div className="bg-green-500 flex items-center justify-center h-10">
        <p className="text-center overflow-hidden whitespace-nowrap">
          <span className="text-black">Lorem ipsum dolor! </span>
          <span className="text-white">
            sit amet consectetur, adipisicing elit. Temporibus dignissimos
            nostrum, facilis, nesciunt tenetur excepturi placeat
          </span>
        </p>
      </div>
      <nav className="border-gray-200 dark:bg-green-600">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-16"
              alt="Flowbite Logo"
            />
          </a>
          <div className="relative flex items-center ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-80 p-2 pl-10 pr-4 -left-44 text-sm text-gray-900 border border-gray-300 rounded-l-2xl rounded-r-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              // placeholder="Search..."
            />
            <button className="bg-black text-white p-1.5 pr-3 pl-5 m-4 rounded-r-2xl rounded-l-none">
              Button
            </button>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-white hover:font-bold"
            >
              (555) 412-1234
            </a>
            <Link
              href="/login"
              className="text-sm  text-blue-600 dark:text-white hover:font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
          <div className="flex items-center justify-center">
            {/* Ensure the UL element takes full width with flex-grow and items are justified center */}
            <ul className="flex flex-grow justify-center items-center font-medium mt-0 space-x-10 rtl:space-x-reverse text-sm gap-x-12">
              <li>
                <Link
                  href="home"
                  className="text-gray-900 dark:text-white hover:font-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Dropdown />
              </li>
              <li>
                <Dropdown />
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:font-bold"
                >
                  Features
                </a>
              </li>
              <li>
                <Link
                  href="quize"
                  className="text-gray-900 dark:text-white hover:font-bold"
                  aria-current="page"
                >
                  Quize
                </Link>
              </li>
              <li>
                <Dropdown />
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:font-bold"
                >
                  Team
                </a>
              </li>
              <li>
                <Link
                  href="disscussionbot"
                  className="text-gray-900 dark:text-white hover:font-bold"
                  aria-current="page"
                >
                  DisscussionBot
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="flex mt-4 ml-8">
        <ol role="list" className="flex items-center">
          <li className="text-left">
            <div className="-m-1">
              <Link
                href="home"
                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              >
                {" "}
                Home{" "}
              </Link>
            </div>
          </li>
          <li className="text-left">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">
                <IoIosArrowForward />
              </span>
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  {" "}
                  Products{" "}
                </a>
              </div>
            </div>
          </li>
          <li className="text-left">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">
                <IoIosArrowForward />
              </span>
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  aria-current="page"
                >
                  {" "}
                  Coffee{" "}
                </a>
              </div>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default Navbar;
