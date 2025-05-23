import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/about.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[35vh] md:h-[40vh] m-3 relative rounded-2xl flex flex-col justify-center sm:px-10 lg:px-16 "
    >
      <div className="rounded-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Ensure shade is above the image
        }}
      />
      <h2 className="text-2xl relative z-2 sm:text-5xl font-bold text-left text-white w-full">
        About Us
      </h2>
      <h1 className="text-md relative z-2 leading sm:text-xl text-white text-left w-full">
        Dzine Box – Delivering Turnkey Solutions for Seamless Design &
        Innovation.
      </h1>
    </div>
  );
}
