import React from "react";
import Hero from "./hero";
import Card from "./card";
import CardGrid from "./cardGrid";
import { Helmet } from "react-helmet-async";

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>
          Our Commercial Interior Design Portfolio | Dzine Box Projects
        </title>
        <meta
          name="description"
          content="Explore 100+ corporate office interior designs executed across India. See our commercial projects in Delhi, Mumbai, Bangalore and other major cities."
        />
        <link
          rel="canonical"
          href="https://www.dzineboxprojects.com/portfolio"
        />
      </Helmet>
      <div className="max-w-[1600px] mx-auto">
        <Hero />
        <CardGrid />
      </div>
    </>
  );
}
