import React, { useState, useEffect } from "react";
import Section2Card from "./section2Card";
import section2Image from "/src/assets/landing/section2.png";
import icon1 from "/src/assets/landing/icon.png";
import icon2 from "/src/assets/landing/icon2.png";
import icon3 from "/src/assets/landing/icon3.png";
import icon4 from "/src/assets/landing/icon4.png";
import BottomUpText from "../motion/textBottomUp";
import SlideIn from "../motion/slideIn";
import FadeIn from "../motion/fadeIn";
import Marquee from "react-fast-marquee";
import ReactFlipCard from "reactjs-flip-card";

export default function Section2() {
  const list = [
    "Heidelberg Gurgaon : 15,460 sq.ft",
    "Amazon Noida : 100,000 sq.ft",
    "Boston Gurgaon : 3,890 sq.ft",
    "Huawei Gurugram & Noida : 215,000 sq.ft",
    "CIFF Aerocity New-Delhi :  7,500 sq.ft",
    "AON Mumbai & Gurugram : 45,000 sq.ft",
    "Honda New-Gurugram : 50,000 sq.ft",
    "AON Gurgaon : 21,000 sq.ft",
    "Emerson Punjab : 46,500 sq.ft",
    "Ralson Delhi : 6,590 sq.ft",
    "Convergys Mumbai : 22,500 sq.ft",
    "NIIT Gurugram : 110,000 sq.ft",
    "Heidelberg Vatika Gurgaon : 12,760 sq.ft",
    "Convergys Mumbai : 14,500 sq.ft",
    "Mujal Maneswar : 18,900 sq.ft",
    "AON Banglore : 24,500 sq.ft",
    "Juniper Gurgaon : 5,680 sq.ft",
    "Zeppelin Gwalior : 10,000 sq.ft",
    "Dalmia  Assam : 14,500 sq.ft"
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const totalCards = 4;

  // Sequential flip effect with reduced delay
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping(true);
      setActiveCard((prevCard) => (prevCard + 1) % totalCards);
      
      // Reset flipping state after animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 100); // Half second for the flip animation
    }, 2000); // 3 seconds between each flip

    return () => {
      clearInterval(flipInterval);
    };
  }, []);

  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col lg:flex-row relative items-center justify-center pt-10 h-auto">
        {/* {div left 40% right 60%} */}
        <div className="px-6 sm:px-10 lg:px-16 w-full lg:w-[50%]">
          {" "}
          <BottomUpText>
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider font-bold text-[var(--color2)] uppercase text-left mb-8">
              Dzine Box <span className="text-black">Offers</span>
            </h2>
          </BottomUpText>
          {/* image */}
          <SlideIn direction="bottom" delay={0}>
            {" "}
            <img
              src={section2Image}
              alt="office"
              className="w-full rounded-lg aspect-[4/3] object-cover mt-10"
            />
          </SlideIn>
        </div>

        <div className=" w-[50%] items-center justify-center flex h-full px-6 sm:px-10 lg:px-16 ">
          {/* 4 cards 2 in a row  */}
          <div className="flex flex-col gap-6 py-10 h-full">
            {/* row  */}
            <div className="flex flex-row gap-6 h-full">
              {/* card 1 */}
              <ReactFlipCard
                flipByProp={activeCard === 0}
                containerStyle={{ width: "100%", height: "100%", transition: "transform 0.5s" }}
                frontComponent={
                  <div className="bg-[url('/images/boston_gurgaon/2.jpg')] bg-cover relative h-[250px] p-4 outline overflow-hidden outline-[#80A2CF] rounded-4xl max-w-[40vw] min-h-[250px] w-[250px] flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-80 rounded-4xl"></div>
                    <img
                      src={"/vectors/1.png"}
                      alt="icon"
                      className="w-full h-full relative object-contain md:p-12"
                    />
                  </div>
                }
                backComponent={
                  <FadeIn delay={0.2}>
                    <Section2Card
                      title={"Interior Design"}
                      description={<span className="font-serif">Creating functional, brand-focused spaces.</span>}
                      imageUrl={icon1}
                    />
                  </FadeIn>
                }
              />

              {/* card 2 */}
              <ReactFlipCard
                flipByProp={activeCard === 1}
                containerStyle={{ width: "100%", height: "100%", transition: "transform 0.5s" }}
                frontComponent={
                  <div className="bg-[url('/images/boston_gurgaon/2.jpg')] bg-cover relative h-[250px] p-4 outline overflow-hidden outline-[#80A2CF] rounded-4xl max-w-[40vw] min-h-[250px] w-[250px] flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-80 rounded-4xl"></div>
                    <img
                      src={"/vectors/2.png"}
                      alt="icon"
                      className="w-full h-full relative object-contain md:p-10"
                    />
                  </div>
                }
                backComponent={
                  <FadeIn delay={0.4}>
                    <Section2Card
                      title={"Design & Build"}
                      description={<span className="font-serif">Combining creativity and functionality to bring your vision to life.</span>}
                      imageUrl={icon2}
                    />
                  </FadeIn>
                }
              />
            </div>

            {/* row  */}
            <div className="flex flex-row gap-6 h-full">
              {/* card 3 */}
              <ReactFlipCard
                flipByProp={activeCard === 2}
                containerStyle={{ width: "100%", height: "100%", transition: "transform 0.5s" }}
                frontComponent={
                  <div className="bg-[url('/images/boston_gurgaon/2.jpg')] bg-cover relative h-[250px] p-4 outline overflow-hidden outline-[#80A2CF] rounded-4xl max-w-[40vw] min-h-[250px] w-[250px] flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-80 rounded-4xl"></div>
                    <img
                      src={"/vectors/3.png"}
                      alt="icon"
                      className="w-full h-full relative object-contain md:p-14"
                    />
                  </div>
                }
                backComponent={
                  <FadeIn delay={0.6}>
                    <Section2Card
                      title={"Strategic Workspace Solutions"}
                      description={<span className="font-serif">Optimizing Spaces for Business Success</span>}
                      imageUrl={icon3}
                    />
                  </FadeIn>
                }
              />

              {/* card 4 */}
              <ReactFlipCard
                flipByProp={activeCard === 3}
                containerStyle={{ width: "100%", height: "100%", transition: "transform 0.5s" }}
                frontComponent={
                  <div className="bg-[url('/images/boston_gurgaon/2.jpg')] bg-cover relative h-[250px] p-4 outline overflow-hidden outline-[#80A2CF] rounded-4xl max-w-[40vw] min-h-[250px] w-[250px] flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-80 rounded-4xl"></div>
                    <img
                      src={"/vectors/4.png"}
                      alt="icon"
                      className="w-full h-full relative object-contain md:p-10"
                    />
                  </div>
                }
                backComponent={
                  <FadeIn delay={0.8}>
                    <Section2Card
                      title={"Turnkey Interior Solutions"}
                      description={<span className="font-serif">From concept to completion, we handle everything so you can focus on your business.</span>}
                      imageUrl={icon4}
                    />
                  </FadeIn>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <h4 className="text-lg font-bold text-left text-[#2963D7]">
      TRUSTED BY
    </h4> */}

        <Marquee className="bg-[var(--color3)] w-[100vw] py-6 my-20 " autoFill>
          {list.map((item, index) => {
            return (
              <div className="flex items-center">
                <div
                  key={index}
                  className="text-3xl  font-bold text-left text-[#fff] text-uppercase px-10"
                >
                  {item}
                </div>
                <div className="text-3xl  font-bold text-left text-[#fff] px-10">
                  |
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
