/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import section51 from "/src/assets/landing/section51.png";
import section52 from "/src/assets/landing/section52.png";
import section53 from "/src/assets/landing/section53.png";
import section54 from "/src/assets/landing/imge4.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Section5() {
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedTab === 5) {
        setSelectedTab(1);
      } else {
        setSelectedTab(selectedTab + 1);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [selectedTab]);

  const images = {
    1: [
      "/landing/officeSpaces/1.jpg",
      "/landing/officeSpaces/2.jpg",
      "/landing/officeSpaces/3.jpg",
      "/landing/officeSpaces/4.jpg",
    ],
    2: [
      "/landing/themed/1.JPG",
      "/landing/themed/2.JPG",
      "/landing/themed/3.JPG",
      "/landing/themed/4.jpg",
    ],
    3: [  
      "/landing/reception/1.JPG",
      "/landing/reception/2.jpg",
      "/landing/reception/3.jpg",
      "/landing/reception/4.jpg",
    ],
    4: [section51, section52, section53, section54],
    5: [
      "/landing/boardRoom/1.JPG",
      "/landing/boardRoom/2.JPG",
      "/landing/boardRoom/3.JPG",
      "/landing/boardRoom/4.jpg",
    ],
  };

  const imageVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.4
      }
    }
  };

  const imageToLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    },
    exit: { 
      x: -100, 
      opacity: 0, 
      transition: { 
        duration: 0.4
      }
    }
  };

  const imageToRight = {
    initial: { x: 100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    },
    exit: { 
      x: 100, 
      opacity: 0, 
      transition: { 
        duration: 0.4
      }
    }
  };
  // const imageToTop = {
  //   initial: { y: -100, opacity: 0 },
  //   animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  //   exit: { y: -100, opacity: 0, transition: { duration: 0.4 } },
  // };

  const imageToTop = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    },
    exit: { 
      y: 100, 
      opacity: 0, 
      transition: { 
        duration: 0.4
      }
    }
  };
  const imageToBottom = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    },
    exit: { 
      y: -100, 
      opacity: 0, 
      transition: { 
        duration: 0.4
      }
    }
  };

  return (
    <div className=" flex  relative items-end justify-center  flex-col">
      <div className="flex  items-center justify-end px-6 sm:px-10 lg:px-16 py-10 w-full">
        <div className="md:pl-10 pt-4 md:pt-10 border-t border-gray-400 ">
          <button
            onClick={() => setSelectedTab(1)}
            className={`outline text-sm ${
              selectedTab === 1 ? "outline-[var(--color2)]" : "outline-none"
            } py-1 px-4 rounded-full cursor-pointer`}
          >
            Office Spaces
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`outline text-sm ${
              selectedTab === 2 ? "outline-[var(--color2)]" : "outline-none"
            } py-1 px-4 rounded-full cursor-pointer`}
          >
            Themed
          </button>
          <button
            onClick={() => setSelectedTab(3)}
            className={`outline text-sm ${
              selectedTab === 3 ? "outline-[var(--color2)]" : "outline-none"
            } py-1 px-4 rounded-full cursor-pointer`}
          >
            {" "}
            Receptions
          </button>
          <button
            onClick={() => setSelectedTab(4)}
            className={`outline text-sm ${
              selectedTab === 4 ? "outline-[var(--color2)]" : "outline-none"
            } py-1 px-4 rounded-full cursor-pointer`}
          >
            {" "}
            Quaint
          </button>
          <button
            onClick={() => setSelectedTab(5)}
            className={`outline text-sm ${
              selectedTab === 5 ? "outline-[var(--color2)]" : "outline-none"
            } py-1 px-4 rounded-full cursor-pointer`}
          >
            {" "}
            Board Room
          </button>
        </div>
      </div>
      <div>
        <div className="px-6 sm:px-10 lg:px-16 w-full flex flex-row gap-8 mb-8 md:mb-16">
          <div className="flex flex-col w-1/2 gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${selectedTab}-1`}
                  className="w-full h-full"
                  variants={imageToLeft}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={images[selectedTab][1]}
                    alt="office"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${selectedTab}-2`}
                  className="w-full h-full"
                  variants={imageToTop}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={images[selectedTab][2]}
                    alt="office"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${selectedTab}-3`}
                  className="w-full h-full"
                  variants={imageToBottom}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={images[selectedTab][0]}
                    alt="office"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${selectedTab}-4`}
                  className="w-full h-full"
                  variants={imageToRight}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={images[selectedTab][3]}
                    alt="office"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
