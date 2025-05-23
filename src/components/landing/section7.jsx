/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section7() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const row1InView = useInView(row1Ref, { once: true });
  const row2InView = useInView(row2Ref, { once: true });
  const row3InView = useInView(row3Ref, { once: true });

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariantsLeft = {
    hidden: { scaleX: 0, originX: 1, originY: 1, scaleY: 0 }, // Start from right-bottom corner
    visible: {
      scaleX: 1,
      originX: 1,
      originY: 1,
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imageVariantsRight = {
    hidden: { scaleX: 0, originX: 0, originY: 1, scaleY: 0 }, // Start from left
    visible: {
      scaleX: 1,
      originX: 0,
      originY: 1,
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex text-center flex-col justify-center items-center px-6 sm:px-10 lg:px-16 md:py-10 pt-0 pb-0">
      <h2 className="text-4xl py-2 md:text-6xl font-bold text-[#092866]">
        What we Promise vs{" "}
        <span className="text-[var(--color2)]">What we Deliver</span>
      </h2>

      <div className="flex w-full flex-col gap-6 py-10">
        <motion.div
          ref={row1Ref}
          variants={rowVariants}
          initial="hidden"
          animate={row1InView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-6 w-full justify-center items-center"
        >
          <motion.div
            variants={imageVariantsLeft}
            className="flex flex-col rounded-4xl gap-2 md:w-1/2 overflow-hidden md:[clip-path:polygon(30%_0%,100%_0%,100%_100%,0%_100%,0%_45%)]"
          >
            <img
              src={"/landing/flip1.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
          <motion.div
            variants={imageVariantsRight}
            className="flex flex-col gap-2 md:w-1/2 rounded-4xl overflow-hidden md:[clip-path:polygon(100%_0%,100%_55%,70%_100%,0%_100%,0%_0%)]"
          >
            <img
              src={"/landing/flip2.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={row2Ref}
          variants={rowVariants}
          initial="hidden"
          animate={row2InView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-6 w-full justify-center items-center"
        >
          <motion.div
            variants={imageVariantsLeft}
            className="flex flex-col rounded-4xl gap-2 md:w-1/2 overflow-hidden md:[clip-path:polygon(30%_0%,100%_0%,100%_100%,0%_100%,0%_45%)]"
          >
            <img
              src={"/landing/flip3.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
          <motion.div
            variants={imageVariantsRight}
            className="flex flex-col gap-2 md:w-1/2 rounded-4xl overflow-hidden md:[clip-path:polygon(100%_0%,100%_55%,70%_100%,0%_100%,0%_0%)]"
          >
            <img
              src={"/landing/flip4.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={row3Ref}
          variants={rowVariants}
          initial="hidden"
          animate={row3InView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-6 w-full justify-center items-center"
        >
          <motion.div
            variants={imageVariantsLeft}
            className="flex flex-col rounded-4xl gap-2 md:w-1/2 overflow-hidden md:[clip-path:polygon(30%_0%,100%_0%,100%_100%,0%_100%,0%_45%)]"
          >
            <img
              src={"/landing/flip5.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
          <motion.div
            variants={imageVariantsRight}
            className="flex flex-col gap-2 md:w-1/2 rounded-4xl overflow-hidden md:[clip-path:polygon(100%_0%,100%_55%,70%_100%,0%_100%,0%_0%)]"
          >
            <img
              src={"/landing/flip6.jpg"}
              alt="icon"
              className="object-cover h-[55vh]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
