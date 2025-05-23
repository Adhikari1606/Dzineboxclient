import React from "react";
import BottomUpText from "../motion/textBottomUp";

export default function Card({ name, image, location, id }) {
  return (
    <BottomUpText key={id} className="h-[600px] max-h-[60vh] w-full border-2 border-[var(--color3)] rounded-2xl pop-out-card">
      <div className="rounded-t-2xl h-[85%] bg-red-300">
        <img
          alt={`corporate-office-design-in-${name}`}
          src={image}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className=" flex flex-col justify-center w-full h-[15%] bg-white border-t  pt-7 p-3 overflow-hidden border-[var(--color3)] rounded-b-2xl">
        <h2 className="text-2xl uppercase font-bold text-[#000] tracking-wide leading-1">
          {name}
        </h2>
        <p className="text-md text-[#000] py-2 md:text-lg w-full">{location}</p>
      </div>
    </BottomUpText>
  );
}
