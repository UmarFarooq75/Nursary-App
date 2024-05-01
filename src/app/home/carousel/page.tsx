"use client";

import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const images = [
  { id: 1, src: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp" },
  { id: 2, src: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp" },
  { id: 3, src: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp" },
];

export default function CarouselWithControls(): JSX.Element {
  return (
    <div className="flex justify-center mb-5 mt-8">
      <div className="w-[70%] px-10 self-center">
        <TECarousel showControls ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-2xl">
            {images.map((image) => (
              <TECarouselItem
                key={image.id}
                itemID={image.id}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={image.src}
                  className="block w-full"
                  alt={`Image ${image.id}`}
                />
              </TECarouselItem>
            ))}
          </div>
        </TECarousel>
      </div>
    </div>
  );
}
