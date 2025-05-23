/* eslint-disable no-unused-vars */
import React from "react";

export default function Section2Card({ title, description, imageUrl }) {
  return (
    <div className="bg-white h-[250px] p-4 outline overflow-hidden outline-[#80A2CF] rounded-4xl max-w-[40vw]  min-h-[250px] w-[250px] flex flex-col items-center justify-center text-center  ">
      <h3 className={`text-xl w-full  mt-4 font-bold text-[var(--color2)]`}>
        {title}
      </h3>

      <p className="text-sm text-black mt-2">
        {description || "this is a long description for the title"}
      </p>
    </div>
  );
}
