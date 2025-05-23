import React from "react";
import SlideInFull from "../motion/slideInfull";

export default function Section4() {
  return (
    <>
    <div>
      <h3 className="  text-4xl tracking-wide font-bold text-center w-full  relative rounded-lg mt-5 text-[#000]">
        Powered by team of perfection
      </h3>
    </div>
    <div 
      className=" flex h-[520px] p-4 gap-[1%] flex-wrap relative items-center justify-center md:px-16 mt-6 mb-10"
      style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}
    >
      
      <div className="w-full md:w-[40%] h-[480px] flex flex-col gap-4 " style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}>
        <SlideInFull
          delay={0}
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            Our seasoned in-house team of architects, designers, project
            managers, and consultants work with you to create commercial
            interior design concepts.
          </p>
        </SlideInFull>

        <SlideInFull
          delay={0.1}
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            Our well-defined planning and design processes supplement our
            understanding of the scope of work.
          </p>
        </SlideInFull>

        <SlideInFull
          delay={0.2}
          duration={0.5}
          className="w-full h-[30%] bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl px-5 py-2"
        >
          <p className="text-xl font-thin text-left leading-12">
            We pay close attention to detail and delivering the highest quality
            workplaces.
          </p>
        </SlideInFull>
      </div>

      <SlideInFull
        direction="right"
        className="w-full md:w-[58%] h-[520px] flex items-start justify-start text-right flex-col"
        style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}
      >
        <img
          src="/images/mtx_jaipur_/26.jpg"
          alt="Section 3 Image"
          className="w-full h-[480px] object-cover rounded-2xl"
          style={{ transform: 'scale(1)', transformOrigin: 'center', willChange: 'transform' }}
        />
      </SlideInFull>
    </div>
    </>
  );
}
