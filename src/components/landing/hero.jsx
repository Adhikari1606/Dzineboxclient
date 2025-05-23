import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideIn from "../motion/slideIn";

export default function Hero() {
  return (
    <div className="h-[91.5vh] relative flex items-center font-serif">
      <div className="flex md:py-0 py-10 flex-col items-center md:items-start md:justify-center w-full md:w-[60%] bg-[var(--color4)]  h-full border border-blue-200 rounded-none md:rounded-tr-[40%] px-6 sm:px-10 lg:px-16">
        <SlideIn direction="left" delay={0}>
          <h2 className="text-6xl md:text-8xl rox font-bold text-[#092866]">
            Dzine Box
            <br className="md:block hidden" /> Projects
          </h2>
        </SlideIn>

        <SlideIn direction="left" delay={0}>
          <h1 className="text-lg md:text-lg text-[#030605] mt-4 text-center md:text-left  md:max-w-[65%]">
            <strong className="text-lg">
              Transforming Corporate Spaces Across India - Award-Winning
              Interior Design Solutions
            </strong>
            <br className="md:block hidden" />
            Commercial Office Design Experts Serving Delhi NCR, Mumbai &
            Pan-India.
          </h1>
        </SlideIn>

        {/* image  */}
        <SlideIn direction="left" delay={0}>
          <div className=" md:hidden h-[400px]  w-full mt-10 overflow-hidden">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showThumbs={false}
              interval={2000}
              className="w-full h-full"
            >
              <div className="h-full w-full ">
                <img
                  className="object-cover bg-red-400 h-full"
                  alt="Commercial-office-interior-design-experts-delhi-india"
                  src={"/landing/hero1.jpg"}
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  alt="Commercial-office-interior-design-experts-delhi-india"
                  src={"/landing/hero2.jpg"}
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  alt="Commercial-office-interior-design-experts-delhi-india"
                  src={"/landing/hero3.jpg"}
                />
              </div>
            </Carousel>
          </div>
        </SlideIn>
      </div>

      <div className="md:w-[50%] lg:w-[60%] md:block hidden border border-gray-400 absolute right-0 h-[80%] mt-[5%] rounded-bl-[40%]"></div>
      <div className="md:w-[48%] lg:w-[58%] md:block hidden  mb-12 overflow-hidden  absolute  right-0 h-[80%] mt-[5%] rounded-bl-[39%]">
        <SlideIn direction="right" delay={0}>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            interval={2000}
            className="w-full h-full"
          >
            <div className="">
              <img className="object-cover h-[90vh] " src={"/landing/hero1.jpg"} />
            </div>
            <div>
              <img className="object-cover h-[90vh]" src={"/landing/hero2.jpg"} />
            </div>
            <div>
              <img className="object-cover h-[90vh]" src={"/landing/hero3.jpg"} />
            </div>
          </Carousel>
        </SlideIn>
      </div>
    </div>
  );
}
