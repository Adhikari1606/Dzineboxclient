/* eslint-disable no-unused-vars */
// src/components/SlideIn.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once

  const variants = {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay, // Add delay if needed
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
