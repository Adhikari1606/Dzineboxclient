import React from "react";
import SlideInFull from "../motion/slideInfull";

export default function Section3() {
  return (
    <>
    <div>
      <h3 className="text-4xl tracking-wide font-bold text-center w-full  rounded-lg mt-5 text-[#000]">
        We focus on concept & detailing
      </h3>
    </div>
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-4 sm:px-10 lg:px-16 py-10">
      <SlideInFull className="w-full md:w-[58%] h-[520px] flex items-start justify-end text-right flex-col" style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}>
        <img
          src="/images/heidelberg_cyberrgreen/24.jpg"
          alt="Section 3 Image"
          className="w-full h-full object-cover rounded-2xl"
          style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}
        />
      </SlideInFull>

      <div className="w-full md:w-[40%] h-[480px] flex flex-col gap-4" style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}>
        <SlideInFull
          direction="right"
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            We brainstorm with you to give your dream workplace a concrete face
            to managing the building and equipping the workplace
          </p>
        </SlideInFull>

        <SlideInFull
          direction="right"
          delay={0.1}
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            We help conceptualise and bring to life the best office interior
            design themes.
          </p>
        </SlideInFull>

        <SlideInFull
          direction="right"
          delay={0.2}
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            We help you realise your ideas and turn them into reality!
          </p>
        </SlideInFull>
      </div>
    </div>
    </>
  );
}
