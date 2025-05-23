import React from "react";
import Hero from "./hero";
import Section1 from "./section1";
import Section2 from "./section2";
import { Helmet } from "react-helmet-async";

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>
          Careers at Dzine Box Projects | Join India's Top Interior Design Firm
        </title>
        <meta
          name="description"
          content="Build your career with India's leading commercial interior design company. Explore opportunities in Delhi, Mumbai, Bangalore and across India."
        />
        <link rel="canonical" href="https://www.dzineboxprojects.com/careers" />
      </Helmet>
      <div className="max-w-[1600px] mx-auto ">
        <Hero />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}
