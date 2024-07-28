import React from "react";
import SearchedImage from "./SearchedImage";
import "./SearchedImage.css";

export default function SearchedImages({ images }) {
  console.log("images" + { images });
  return (
    <div className="imageList">
      {images.map((x, index) => (
        <SearchedImage image={x} key={index} />
      ))}
    </div>
  );
}
