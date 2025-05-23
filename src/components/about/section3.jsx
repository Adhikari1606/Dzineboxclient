import React from "react";

export default function Section3() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 sm:px-10 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row gap-4 w-full bg-[var(--color2)] rounded-4xl p-4 md:p-8">
        <div className="hidden md:block md:w-[50%] relative aspect-[4/3] rounded-4xl overflow-hidden">
          <img
            src="/src/assets/landing/Turn-key1.png"
            alt="Dzine Box Projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center gap-4">
          <h3 className="text-xl tracking-wide font-bold text-left text-[var(--color5)]">
            WHY CHOOSE US ?
          </h3>

          <h2 className="text-2xl md:text-4xl font-bold text-left text-[#fff]">
            Smart Turnkey Solutions for Future-Ready Workspaces
          </h2>
          <p className="text-base md:text-lg font-thin text-left text-[#fff]">
            At DZINE BOX PROJECTS, we specialize in turnkey solutions, offering
            a hassle-free approach to designing and executing corporate spaces.
            From concept to completion, we handle every aspect of the project,
            ensuring efficiency, quality, and seamless execution.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-left text-[#fff]">
            What Are Turnkey Solutions ?
          </h3>
          <p className="text-base md:text-lg font-thin text-left text-[#fff]">
            At DZINE BOX PROJECTS, we specialize in turnkey solutions, offering
            a hassle-free approach to designing and executing corporate spaces.
            From concept to completion, we handle every aspect of the project,
            ensuring efficiency, quality, and seamless execution.
          </p>
        </div>
      </div>
    </div>
  );
}
