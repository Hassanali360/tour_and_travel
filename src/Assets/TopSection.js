import React from "react";
import image1 from "./pictures/img 1.jpg";
import image5 from "./pictures/maldives.webp";
import TopSection from "./TopSectionChild";
const images = [
  {
    name: "Pairs",
    image: image1,
  },
  {
    name: "Maldives",
    image: image5,
  },
];


export default function HeaderChildComp() {
  return (
    <div className="top--section">
      <h1 className="top--section--heading">
        WELCOME TO SIMPLE TOURS & TRAVELS
      </h1>
      <TopSection images={images} />
    </div>
  );
}
