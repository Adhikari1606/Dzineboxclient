import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/mtx_jaipur_/14.jpg")`,
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
      <h1 className="text-2xl z-20 relative sm:text-5xl font-bold text-left text-white w-full animate__zoomIn animate__animated">
        WHAT WE OFFER ?
      </h1>
      <h2 className="text-md z-20 relative leading sm:text-xl text-white text-left w-full animate__animated animate__slideInUp">
        Dzine Box Projects completely takes away the burden of complete design
        and Only build cycle by bringing out the complete interior project.
      </h2>
    </div>
  );
}
