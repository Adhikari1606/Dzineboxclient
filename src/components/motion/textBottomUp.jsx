/* eslint-disable no-unused-vars */
// src/components/BottomUpText.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BottomUpText = ({ children, delay = 0, duration = 0.6, offset = '200px', ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,
    margin: offset
   }); // Animate only once

  const variants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeInOut',
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'} // Animate only when in view
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default BottomUpText;