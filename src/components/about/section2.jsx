import React from "react";
import SlideInFull from "../motion/slideInfull";

export default function Section2() {
  return (
    <div className="flex gap-[1%] flex-wrap items-center justify-center sm:px-10 lg:px-16 md:pt-0 opacity-100 relative mt-10 md:mt-0">
  
      <div className="w-full md:w-[40%] flex flex-col gap-5">
        
        <SlideInFull duration={0.2} className="w-full h-full bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl p-4">
          <h3 className="text-xl tracking-wide font-bold text-left bg-white rounded-lg px-4 py-2 w-fit mb-2 text-[var(--color2)]">
            Our Vision
          </h3>
          <p className="text-lg font-thin text-justify">
            Designing beyond spaces – we craft experiences. At DZINE BOX PROJECTS, our vision is to redefine corporate interiors with innovative, efficient, and turnkey design solutions.
          </p>
        </SlideInFull>
    
        <SlideInFull duration={0.2} delay={0.1} className="w-full h-full bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl p-4">
          <h3 className="text-xl tracking-wide font-bold text-left bg-white rounded-lg px-4 py-2 w-fit mb-2 text-[var(--color2)]">
            Our Mission
          </h3>
          <p className="text-lg font-thin text-justify">
            Our mission is to provide top-tier construction and interior solutions, ensuring every workspace is functional, aesthetic, and optimized for success.
          </p>
        </SlideInFull>
    
        <SlideInFull duration={0.2} delay={0.2} className="w-full h-full bg-[var(--color5)] hover:bg-[var(--color3)] hover:text-white transition-all ease-in-out duration-300 rounded-2xl p-4">
          <h3 className="text-xl tracking-wide font-bold text-left bg-white rounded-lg px-4 py-2 w-fit mb-2 text-[var(--color2)]">
            Our History
          </h3>
          <p className="text-lg font-thin text-justify">
            Built on a foundation of expertise and trust, DZINE BOX PROJECTS has grown into a leading name in corporate interior design.
          </p>
        </SlideInFull>
    
      </div>
    
      <div className="w-full relative md:w-[58%] mt-5 md:mt-0 h-[520px] rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/v01.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            transform: 'scale(1)',
            transformOrigin: 'center',
            willChange: 'transform'
          }}
        />
        
        {/* overlay */}
        <div className="absolute inset-0 bg-white opacity-70 rounded-2xl"></div>
    
        {/* content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h2 className="text-xl md:text-4xl font-bold text-left md:text-right w-full text-[#000] md:leading-12 mb-6">
            Your Dream Workspace Is Just
            <br /> a Call Away – Let's Create It <br />
            Together!
          </h2>
      
          <p className="text-lg font-thin text-left md:text-right text-[#000] w-full mb-6">
            Transform your workspace with our expert turnkey solutions— <br />
            contact us today to bring your vision to life!
          </p>
      
          <div className="flex items-end justify-end w-full">
            <button
              onClick={() => {
                const button = document.getElementById("contact-button");
                if (button) {
                  button.click();
                }
              }}          
              className="bg-[var(--color2)] text-white px-6 py-3 rounded-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
}
