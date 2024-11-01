import React from "react";
import image1 from "./pictures/Adventure.jpg";
import image3 from "./pictures/beach.webp";
import DestintionBox from "./DestintionBox";

const images = [
  {
    name: "Adventure",
    image: image1,
  },
 {
    name: "Beach",
    image: image3,
  },
];

export default function DestinationComp() {
  return (
    <div className="top--section">
      <h1 className="top--section--heading">
        BROWSE TOP DESTINATIONS BASED ON CATEGORIES
      </h1>
      <DestintionBox images={images}/>
    </div>
  );
}
