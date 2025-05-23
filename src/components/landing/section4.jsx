import React from "react";
import Section2Card from "./section2Card";
import section4Image from "/src/assets/landing/section4.png";
import section4Image2 from "/src/assets/landing/image1.jpg";
import BottomUpText from "../motion/textBottomUp";
import SlideIn from "../motion/slideIn";

export default function Section4() {
  return (
    <div className=" text-center md:text-left flex flex-col md:flex-row relative items-center">
      {/* {div left 40% right 60%} */}
      <div className="px-6 sm:px-10 lg:px-16 w-full ">
        <BottomUpText offset="0px" delay={0.2} duration={0.6}>
          <span className="text-blue-900 uppercase">WHAT IS</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[var(--color2)] uppercase">
            Dzine Box Projects ?
          </h2>
        </BottomUpText>

        {/* para */}
        <BottomUpText offset="0px" delay={0.2} duration={0.6}>
          <p className="text-lg md:text-lg font-thin text-blue-900 mt-4 text-center md:text-left ">
            Dzine Box Projects is established in 2021 By Balbeer Singh . We have
            given arranging and building corporate Office Interior to more than
            20 years Work Experience in the Office Inteiors. Dzine Box Projects
            is a leading Corporate Interior fit out firm work experience with 
            partnership with architects and Designers.<br />
            Top Office Interior Design Company in Delhi NCR | Corporate Space
            Specialists.  
          </p>
        </BottomUpText>

        {/* Call-to-Action Button (Desktop) */}
        <div className="w-full flex  py-10 space-x-2">
          <a
            onClick={() => {
              const button = document.getElementById("contact-button");
              if (button) {
                button.click();
              }
            }}
            href="#contact"
            className="bg-[var(--color4)] relative font-bold hover:bg-[var(--color3)] text-black py-3 px-6 rounded-full text-sm transition-all"
          >
            Contact Us
          </a>
          <a
            href="/portfolio"
            className="bg-white relative z-10 font-bold outline outline-blue-200  text-black py-3  px-6 rounded-full text-sm transition-all"
          >
            Touch and feel our exceptional spaces
          </a>
        </div>
      </div>
      <div className="px-6 sm:px-10 lg:px-16 w-full">
        {/* image */}
        
         <SlideIn direction="right" duration={0.7}>
          <img
            src={section4Image2}
            alt="office"
            className="w-full rounded-lg aspect-[4/3] object-cover mt-10"
          />
        </SlideIn>
      </div>
    </div>
  );
}
