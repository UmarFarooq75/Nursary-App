"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle mouse enter event for the dropdown menu
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event for the dropdown menu
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownNavbarLink"
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent focus:outline-none"
      >
        {"Plants"}
        <svg
          className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (isHovered || isDropdownOpen) && (
        <div
          id="dropdownNavbar"
          className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mt-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownNavbarLink"
          >
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none"
                onClick={() => {
                  // Handle button click
                }}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none"
                onClick={() => {
                  // Handle button click
                }}
              >
                Earnings
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none"
                onClick={() => {
                  // Handle button click
                }}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
