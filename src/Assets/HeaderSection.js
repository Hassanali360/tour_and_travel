import React, { useState, useEffect } from "react";
import image1 from "./pictures/img 2.webp";
import image2 from "./pictures/img 1.jpg";

export default function HeaderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);
  return (
    <div className="header--container">
      <img
        className="header--image"
        src={images[currentSlide]}
        alt="the header main image"
      />
      <div className="header--text">
        <iframe
          src="https://www.abengines.com//?version=V2&amp;pid=77A7376&amp;mid=combo&amp;mt=&amp;wlaid=&amp;aid=&amp;lang=&amp;usertype=undefined&amp;&amp;ip=154.198.74.64&amp;ParentRestParam="
          scrolling="no"
          frameborder="0"
          id="iFrameResizer0"
        ></iframe>
      </div>
    </div>
  );
}
