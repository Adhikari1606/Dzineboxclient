import React from "react";
import SlideInFull from "../motion/slideInfull";

export default function Section1() {
  return (
    <div className="flex gap-[1%] md:flex-row flex-col flex-wrap relative items-center justify-center pt-10 sm:px-10 lg:px-16 md:pt-10 p-4">
      <SlideInFull className="md:w-[31%] w-full mt-2 p-4 min-h-[400px] bg-[var(--color2)] hover:bg-[var(--color3)] rounded-xl ">
        <h2 className="text-3xl font-bold text-left text-[#fff] leading-12 py-2">
          Design & Build
        </h2>
        <p className="text-lg font-thin text-left text-[#fff]">
          New construction/ Renovation/ Remodeling Design and Engineering Team
          Coordination Concept/ Construction Documents/ Specification Furniture
          Selection & Ordering single-point responsibility for project
          execution: schedule, cost, and quality.
        </p>
      </SlideInFull>
      <SlideInFull
        direction="down"
        className="md:w-[31%] w-full mt-2 p-4 min-h-[400px] bg-[var(--color2)] hover:bg-[var(--color3)] rounded-xl "
      >
        <h2 className="text-3xl font-bold text-left text-[#fff] leading-12 py-2">
          Cost Effective Solutions
        </h2>
        <p className="text-lg font-thin text-left text-[#fff]">
          Interior spaces created not only address the issues of space planning
          and aesthetics but at the same time also take into consideration the
          cost factor. The materials specified are based upon the functionality,
          feasibility and maintenance, initial investment and operations cost
          after the handover the Project.
        </p>
      </SlideInFull>
      <SlideInFull
        direction="right"
        className="md:w-[31%] w-full mt-2 p-4 min-h-[400px] bg-[var(--color2)] hover:bg-[var(--color3)] rounded-xl "
      >
        <h2 className="text-3xl font-bold text-left text-[#fff] leading-12 py-2">
          Low Maintenance Office
        </h2>
        <p className="text-lg font-thin text-left text-[#fff]">
          Interior detailing emphasizes materials keeping in mind the usage of
          the area both by end users and housekeeping staff. The intent being
          the office looks fresh and maintained even after years of usage.
        </p>
      </SlideInFull>
    </div>
  );
}
