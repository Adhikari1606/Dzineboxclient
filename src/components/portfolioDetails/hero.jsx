import React from "react";

export default function Hero({ name, location, description, bg }) {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }} className="h-[35vh] md:h-[45vh] relative rounded-b-2xl flex flex-col justify-center sm:px-10 lg:px-16 pt-30">
      <h1 className="text-6xl uppercase rox sm:text-8xl font-bold text-center md:text-left text-white w-full">
        {name}
      </h1>
      <h2 className="text-xl leading sm:text-3xl text-white text-center md:text-left w-full">
        {location}
      </h2>

      <div className="w-full bottom-3 relative flex-1 h-full flex text-center items-end">
        <p className="text-md text-[#fff] py-2 md:text-xl w-full ">
          {description}
        </p>
      </div>
    </div>
  );
}
