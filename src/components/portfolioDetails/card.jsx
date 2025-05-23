import React from "react";
import ImageViewer from "../imageViewer";

export default function Card({ image, id }) {
  return (
    <div key={id} className="h-[600px] max-h-[60vh] w-full ">
      <div className="rounded-2xl h-full bg-red-300">
        <ImageViewer src={image}><img
          alt={id}
          src={image}
          className="w-full h-full object-cover rounded-2xl cursor-zoom-in"
        /></ImageViewer>
      </div>
    </div>
  );
}
