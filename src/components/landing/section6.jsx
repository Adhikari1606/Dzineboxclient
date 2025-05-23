/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import section71 from "/src/assets/landing/section71.png";
import section72 from "/src/assets/landing/section72.png";
import section73 from "/src/assets/landing/section73.png";
import section74 from "/src/assets/landing/section74.png";
import BottomUpText from "../motion/textBottomUp";
import SlideIn from "../motion/slideIn";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Section6() {
  const logos = [
    "/brandLogos/brand1.png",
    "/brandLogos/brand2.png",
    "/brandLogos/brand3.png",
    "/brandLogos/brand4.png",
    "/brandLogos/brand5.png",
    "/brandLogos/brand6.png",
    "/brandLogos/brand7.png",
    "/brandLogos/brand8.png",
    "/brandLogos/brand9.png",
    "/brandLogos/brand10.png",
    "/brandLogos/brand11.png",
    "/brandLogos/brand12.png",
    "/brandLogos/brand13.png",
    "/brandLogos/brand14.png",
    "/brandLogos/brand15.png",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger once when in view

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        if (activeStep < 3) {
          setActiveStep(activeStep + 1);
        }
      }, 1500); // Adjust delay between steps

      return () => clearTimeout(timer);
    }
  }, [activeStep, isInView]);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const lineVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: { scaleX: 1, originX: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex text-center flex-col justify-center items-center px-6 sm:px-10 lg:px-16 py-10">
      <BottomUpText delay={0.8} duration={0.8}>
        <div className="px-10 md:border-b border-[#030605] py-2">
          <h3 className="text-md whitespace-nowrap font-normal md:text-2xl tracking-wider md:tracking-[0.5rem] text-[var(--color2)] uppercase">
            Our WORK PROCESS
          </h3>
        </div>
      </BottomUpText>
      <SlideIn direction="bottom">
        <h2 className="text-2xl sm:text-4xl py-2 md:py-8 md:text-6xl leading-0 font-bold text-black ">
          Redefining Workspaces for -{" "}
        </h2>
      </SlideIn>
      <SlideIn direction="bottom">
        <h2 className="text-2xl sm:text-4xl md:text-6xl py-2 font-bold text-[var(--color2)] ">
          Performance, Prestige, and Progress
        </h2>
      </SlideIn>

      <div ref={ref} className="w-full py-2 md:py-10 space-x-2">
        <div className="flex md:flex-nowrap flex-wrap flex-row gap-6 w-full justify-center items-center">
          <motion.div
            variants={fadeVariants}
            initial="initial"
            animate={isInView && activeStep >= 0 ? "animate" : "initial"}
          >
            <div className="p-4 bg-[var(--color2)] w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src={section71}
                alt="icon"
                className="w-16 h-16 object-contain"

              />
            </div>
            <h3 className="text-3xl font-bold text-black">Analyze</h3>
          </motion.div>

          {isInView && activeStep >= 1 && (
            <motion.div
              className="border-1 border-black w-28 md:block hidden"
              variants={lineVariants}
              initial="initial"
              animate="animate"
            />
          )}

          <motion.div
            variants={fadeVariants}
            initial="initial"
            animate={isInView && activeStep >= 1 ? "animate" : "initial"}
          >
            <div className="p-4 bg-[var(--color2)] w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src={section72}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-black">Design</h3>
          </motion.div>

          {isInView && activeStep >= 2 && (
            <motion.div
              className="border-1 border-black w-28 md:block hidden"
              variants={lineVariants}
              initial="initial"
              animate="animate"
            />
          )}

          <motion.div
            variants={fadeVariants}
            initial="initial"
            animate={isInView && activeStep >= 2 ? "animate" : "initial"}
          >
            <div className="p-4 bg-[var(--color2)] w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src={section73}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-black">Idealise</h3>
          </motion.div>

          {isInView && activeStep >= 3 && (
            <motion.div
              className="border-1 border-black w-28 md:block hidden"
              variants={lineVariants}
              initial="initial"
              animate="animate"
            />
          )}

          <motion.div
            variants={fadeVariants}
            initial="initial"
            animate={isInView && activeStep >= 3 ? "animate" : "initial"}
          >
            <div className="p-4 bg-[var(--color2)] w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src={section74}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-black">Build</h3>
          </motion.div>
        </div>
      </div>

      <div className="bg-[var(--color3)] w-[100vw] py-2 mt-20">
        {/* <h4 className="text-lg font-bold text-left text-[#2963D7]">
          TRUSTED BY
        </h4> */}
        <Marquee className="p-2" autoFill>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="h-14 w-auto object-cover mx-4  hover:grayscale-0 mix-blend-multiply"
              style={{ boxShadow: 'none' }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
