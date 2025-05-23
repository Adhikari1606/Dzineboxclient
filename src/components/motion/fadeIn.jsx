// src/components/FadeIn.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.6, ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
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
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;