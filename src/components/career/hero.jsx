import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/cnx_manus_mumbai/18.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[35vh] md:h-[40vh] m-3 relative rounded-2xl flex flex-col justify-center sm:px-10 lg:px-16 "
    >
      <div
        className="rounded-2xl"
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
      <h1 className="text-2xl relative z-10 sm:text-5xl font-bold text-left text-white w-full animate__zoomIn animate__animated">
        Shape India's Commercial Spaces - Career Opportunities
      </h1>
      <h2 className="text-md relative z-10 leading sm:text-xl text-white text-left w-full animate__animated animate__slideInUp">
        Join our dynamic team of creatives and innovators, where your passion
        meets purpose and every project is a chance to grow.
      </h2>
    </div>
  );
}
