"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function BotanistAd({ heading, description }: any): JSX.Element {
  return (
    <section className="flex border-t border-b border-gray-500">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="flex flex-col mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12  p-4">
            <h1 className="text-4xl mb-4">{heading}</h1>
            <p className="text-md mb-4">{description}</p>
            {/* Button Centering Wrapper */}
            <div className="w-full flex justify-center">
              <button className="bg-green-600 w-[30%] text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                <Link href="signupb">Click Here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
