import React from "react";
import Hero from "./hero";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import BottomUpText from "../motion/textBottomUp";

export default function ServicesPage() {
  return (
    <div className="max-w-[1600px] mx-auto ">
      <BottomUpText>
        <Hero />
      </BottomUpText>
      <BottomUpText>
        <Section1 />
      </BottomUpText>
      <BottomUpText>
        <Section2 />
      </BottomUpText>
      <BottomUpText>
        <Section3 />
      </BottomUpText>
      <BottomUpText>
        <Section4 />
      </BottomUpText>
    </div>
  );
}
