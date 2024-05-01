"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ErrorMessage from "../error/page";
import Logo from "../img/logo.jpg";
import Image from "next/image";
import { TEInput } from "tw-elements-react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disable, setDisable] = useState(true); // Initially, disable the button

  useEffect(() => {
    // Enable the button if both email and password are provided
    setDisable(!(user.email && user.password));
  }, [user]);

  const handleInputChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center  w-screen bg-green-600 relative p-10">
        <div className="bg-gray-200 bg-opacity-50 p-8 rounded-md sm:w-[90%] md:w-[90%] lg:w-[29%] sm:h-[430px] my-10 shadow-2xl shadow-gray-800">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full h-20 w-20 mb-5"
              src={Logo}
              alt="Logo"
            />
          </div>
          <h1 className="flex text-2xl justify-center items-center font-bold mb-4 text-center text-gray-700">
            Login
          </h1>
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full  px-2 mb-4">
                <TEInput
                  type="text"
                  id="email"
                  name="email"
                  label="Email"
                  size="lg"
                  value={user.email}
                  onChange={handleInputChange}
                />
                {emailError && <ErrorMessage error={emailError} />}
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
                {passwordError && <ErrorMessage error={passwordError} />}
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
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-row gap-1 mt-5 items-center">
            <p className="text-sm"> Already Have an Account?</p>
            <Link href="/signupc">
              <span className="text-green-600 text-md">Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
