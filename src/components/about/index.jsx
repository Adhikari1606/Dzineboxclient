import React from "react";
import Hero from "./hero";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import { Helmet } from "react-helmet-async";
import BottomUpText from "../motion/textBottomUp";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>
          About Dzine Box Projects | Top Commercial Interior Designers in India
        </title>
        <meta
          name="description"
          content="With 15+ years shaping India's corporate spaces, Dzine Box Projects is the trusted partner for Fortune 500 companies and startups alike. Discover our design philosophy."
        />
        <link rel="canonical" href="https://www.dzineboxprojects.com/about" />
      </Helmet>
      <div className="max-w-[1600px] mx-auto relative">
        <BottomUpText duration={0.8} offset="1000px">
          <Hero />
        </BottomUpText>
        <BottomUpText duration={0.8}>
          <Section1 />
        </BottomUpText>
        <BottomUpText duration={0.8}>
          <Section2 />
        </BottomUpText>
        <BottomUpText duration={0.8}>
          <Section3 />
        </BottomUpText>
      </div>
    </>
  );
}
