import React from "react";
import Card from "./card";

export default function CardGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 p-4 sm:px-10 lg:px-16 py-20">
      {data?.map((image, index) => (
        <div key={index} className="basis-full">
          <Card image={image} id={index} />
        </div>
      ))}
    </div>
  );
}
