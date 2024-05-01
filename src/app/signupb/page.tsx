"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ErrorMessage from "../error/page";
import Logo from "../img/logo.jpg";
import Image from "next/image";
import { TEInput } from "tw-elements-react";

export default function SignupBPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    educationLevel: "PHD",
    degree: "",
    dateOfBirth: "",
    workExperience: "",
    idCard: "",
    degreeDocument: "",
    img: "",
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
    <div className="flex items-center justify-center  w-screen bg-green-600 relative p-10">
      <div className="bg-gray-200 bg-opacity-50 p-8 rounded-md sm:w-[90%] md:w-[90%] lg:w-[36%] sm:h-[1100px] my-10 shadow-2xl shadow-gray-800">
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
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TEInput
              type="text"
              id="name"
              name="name"
              label="Name"
              size="lg"
              value={user.name}
              onChange={handleInputChange}
            />
            <TEInput
              type="email"
              id="email"
              name="email"
              label="Email"
              size="lg"
              value={user.email}
              onChange={handleInputChange}
            />
            {emailError && <ErrorMessage error={emailError} />}
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
            <TEInput
              type="text"
              id="phone"
              name="phone"
              label="Phone"
              size="lg"
              onChange={handleInputChange}
            />
            <select
              id="educationLevel"
              name="educationLevel"
              className="p-2.5 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full dark:bg-gray-200 focus:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500"
              value={user.educationLevel}
            >
              <option value="MATRIC">MATRIC</option>
              <option value="INTER">INTER</option>
              <option value="BS">BS</option>
              <option value="MS">MS</option>
              <option value="PHD">PHD</option>
            </select>
            <TEInput
              type="text"
              id="degree"
              name="degree"
              label="Degree"
              size="lg"
              value={user.degree}
              onChange={handleInputChange}
            />
            <TEInput
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              size="lg"
              value={user.dateOfBirth}
              onChange={handleInputChange}
            />
            <TEInput
              type="text"
              id="workExperience"
              name="workExperience"
              label="Work Experience"
              size="lg"
              value={user.workExperience}
              onChange={handleInputChange}
            />
            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                htmlFor="id_card_input"
              >
                ID Card
              </label>
              <input
                type="file"
                id="id_card_input"
                className="border p-1.5 rounded-md text-gray-700 bg-transparent focus:bg-white w-full"
                onChange={(e) => {
                  setUser({ ...user, idCard: e.target.value });
                  setNameError("");
                }}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-800"
                id="id_card_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                htmlFor="degree_document_input"
              >
                Degree Document
              </label>
              <input
                type="file"
                id="degree_document_input"
                className="border p-1.5 rounded-md text-gray-700 bg-transparent focus:bg-white w-full"
                onChange={(e) => {
                  setUser({ ...user, degreeDocument: e.target.value });
                  setNameError("");
                }}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-800"
                id="degree_document_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                htmlFor="image_input"
              >
                Image
              </label>
              <input
                type="file"
                id="image_input"
                className="border p-1.5 rounded-md text-gray-700 bg-transparent focus:bg-white w-full"
                onChange={(e) => {
                  setUser({ ...user, img: e.target.value });
                  setNameError("");
                }}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-800"
                id="image_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
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
            <span className="text-green-600 text-md ">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
