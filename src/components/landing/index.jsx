import React from "react";
import Hero from "./hero";
import Section2 from "./section2";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section3 from "./section3";
import Section9 from "./section9";
import FAQ from "./faq";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>
          Dzine Box Projects | Top Commercial Office Interior Design & Build
          Experts in India
        </title>
        <meta
          name="description"
          content="India's leading commercial interior design & build firm. Specialists in corporate offices, coworking spaces & turnkey office interiors. Pan-India service with 100+ projects delivered."
        />
        <meta
          name="keywords"
          content="commercial interior designers in India, office interior design biggest company, turnkey office interior contractors, modern office interiors India"
        />
        <link rel="canonical" href="https://www.dzineboxprojects.com/" />
        <meta
          property="og:title"
          content="Dzine Box Projects | Premier Commercial Interior Design Solutions"
        />
        <meta
          property="og:description"
          content="Transform your workspace with India's award-winning corporate interior design experts"
        />
      </Helmet>
      <div className="max-w-[1600px] mx-auto relative">
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />

        <Section9 />
        <FAQ />
      </div>
    </>
  );
}
