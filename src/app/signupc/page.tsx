"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ErrorMessage from "../error/page";
import Logo from "../img/logo.jpg";
import Image from "next/image";
import { TEInput } from "tw-elements-react";
export default function SignupCPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    id: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(!(user.email && user.password && user.name));
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // Clear related error when input changes
    if (e.target.name === "email") setEmailError("");
    else if (e.target.name === "name") setNameError("");
    else if (e.target.name === "password") setPasswordError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="overflow-x-hidden">
      {/* <div
       className="flex items-center justify-center w-screen h-screen bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: "url('https://picsum.photos/600/1800/?blur=1')",
      }}
     > */}
      <div className="flex items-center justify-center  w-screen bg-green-600 relative p-10">
        <div className="bg-gray-200 bg-opacity-50 p-8 rounded-md sm:w-[90%] md:w-[90%] lg:w-[29%] sm:h-[610px]  shadow-2xl shadow-gray-800">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full h-20 w-20 mb-5"
              src={Logo}
              alt="Logo"
            />
          </div>
          <h1 className="flex text-2xl justify-center items-center font-bold mb-4 text-center text-gray-700">
            Signup
          </h1>
          <form className="grid grid-cols-1 gap-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4">
                <TEInput
                  type="text"
                  id="name"
                  name="name"
                  label="Name"
                  size="lg"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full  px-2 mb-4">
                <TEInput
                  type="text"
                  id="id"
                  name="id"
                  label="User ID"
                  size="lg"
                  value={user.id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full  px-2 mb-4">
                <TEInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  size="lg"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full px-2 mb-4">
                <TEInput
                  type="text "
                  id="phone"
                  name="phone"
                  label="Phone"
                  size="lg"
                  value={user.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full px-2 mb-4">
                <TEInput
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  size="lg"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                disabled={disable}
                className={`${
                  disable
                    ? "bg-gray-500 cursor-not-allowed opacity-50 w-full"
                    : "inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] w-full "
                }`}
              >
                Signup
              </button>
            </div>
          </form>
          <div className="flex flex-row gap-1 mt-5 items-center">
            <p className="text-sm"> Already Have an Account?</p>
            <Link href="/login">
              <span className="text-green-600 text-md">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
