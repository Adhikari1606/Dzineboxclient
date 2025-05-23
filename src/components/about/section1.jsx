import React from "react";
import SlideIn from "../motion/slideIn";
import SlideInFull from "../motion/slideInfull";

export default function Section1() {
  return (
    <div className="flex h-[550px] min-h-fit gap-[1%] flex-wrap  items-center justify-center p-4 py-10 sm:px-10 lg:px-16  md:pt-10">
      <div className=" w-[48%] md:w-[20%] h-1/2 md:h-full  rounded-2xl ">
        <SlideInFull delay={0.4}>
          <img
            src={"/images/about.jpg"}
            alt="office"
            className="object-cover h-full w-full rounded-2xl"
          />
        </SlideInFull>
      </div>
      <div className="w-[48%] md:w-[20%] h-1/2 md:h-full  rounded-2xl">
        <SlideInFull delay={0.2}>
          <img
            src={"/images/about.jpg"}
            alt="office"
            className="object-cover h-full w-full rounded-2xl"
          />
        </SlideInFull>
        
      </div>

      <SlideInFull
        direction="right"
        delay={0.3}
        className="w-full md:w-[58%] h-full min-h-fit bg-[var(--color5)] p-5 rounded-2xl"
      >
        <h3 className="text-xl tracking-wide font-bold text-left text-[var(--color2)]">
          ABOUT DZINE BOX PROJECTS
        </h3>
        <h2 className="text-4xl font-bold text-left text-[#000] py-2">
          Innovative Designs for Functional Workspaces
        </h2>
        <p className="text-lg font-thin  text-justify text-[#000]">
          At DZINE BOX PROJECTS, we specialize in designing high-performance
          corporate spaces through turnkey solutions that ensure seamless
          execution, functionality, and efficiency. With an unwavering
          commitment to quality, innovation, and client satisfaction, we
          transform office environments into aesthetically appealing and
          productivity-driven spaces.
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-2 mt-8">
          <p className="text-lg flex items-center font-thin text-left text-[#000] w-1/2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="var(--color2)"
                />
              </svg>
            </span>
            Turnkey Solutions
          </p>
          <p className="text-lg flex items-center font-thin text-left text-[#000]">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="var(--color2)"
                />
              </svg>
            </span>
            On-Time & On-Budget Delivery
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-2 mt-4">
          <p className="text-lg flex items-center font-thin text-left text-[#000] w-1/2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="var(--color2)"
                />
              </svg>
            </span>
            Bespoke Corporate Interiors
          </p>
          <p className="text-lg flex items-center font-thin text-left text-[#000]">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="var(--color2)"
                />
              </svg>
            </span>
            Sustainable & Efficient Designs
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-2 mt-4">
          <p className="text-lg flex items-center font-thin text-left text-[#000]">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="var(--color2)"
                />
              </svg>
            </span>
            Client-Centric Approach
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => {
              const button = document.getElementById("contact-button");
              if (button) {
                button.click();
              }
            }}
            className="bg-[var(--color2)] text-white px-4 py-2 rounded-full mt-4"
          >
            Learn More
          </button>
        </div>
      </SlideInFull>
    </div>
  );
}
