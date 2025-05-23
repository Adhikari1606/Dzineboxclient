import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function UserCard({name,pos,desc,image}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Trigger once when in view

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-row gap-4 w-[400px] max-w-full bg-white shadow-2xl rounded-xl p-4 py-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <img
        src={image ?? "https://i.pravatar.cc/200"}
        alt="icon"
        className="object-contain w-12 h-12 rounded-full"
      />
      <div className="flex flex-col text-left">
        <h3 className="text-lg font-bold text-[#000] leading-5">
          {name ?? "John Doe"}
        </h3>
        <h6 className="text-xs text-[#B9B9B9]">
          {pos ?? "Position"}
        </h6>
        <p className="text-[10px] text-black">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}