import React from "react";
import Section2Card from "./section2Card";
import section3bg from "/src/assets/landing/section3bg.png";
import section3top from "/src/assets/landing/section3top.png";
import section3bottom from "/src/assets/landing/section3bottom.png";
import BottomUpText from "../motion/textBottomUp";

export default function Section3() {
  return (
    <BottomUpText duration={0.8}  offset="500px"> <div className="flex flex-col md:flex-row relative items-center justify-center pt-0 pb-10">
      {/* {div left 40% right 60%} */}
      
        <img
          src={section3bg}
          alt="office"
          className="w-full object-contain hidden md:block"
        />

        <img
          src={section3top}
          alt="office"
          className="w-full block md:hidden object-contain"
        />
        <img
          src={section3bottom}
          alt="office"
          className="w-full block md:hidden object-contain"
        />
    </div>
      </BottomUpText>
  );
}
