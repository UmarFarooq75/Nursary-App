"use client";
import React from "react";
import CarouselCustomArrows from "./carousel/page";
import BotanistAd from "./adcomponent/page";
import PlantsComponent from "./plants/page";
import FlowerComponent from "./flowers/page";
import Adcomponent from "./adcomponentleft/page";
import ToolsComponent from "./tools/page";
import BotanistComponent from "./bestbotanist/page";
import Navbar from "../navbar/page";

const data = {
  heading: "How to Be a Botanist ?",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facerebeatae eius dicta? Deleniti in ullam similique,laboriosampraesentium magni ipsum dolor?",
};

function HomeComponent() {
  return (
    <div>
      <Navbar />
      <CarouselCustomArrows />
      <BotanistAd heading={data.heading} description={data.description} />
      <PlantsComponent title={"Plants"} />
      <FlowerComponent />
      <Adcomponent heading={data.heading} description={data.description} />
      <ToolsComponent />
      <BotanistComponent />
    </div>
  );
}

export default HomeComponent;
