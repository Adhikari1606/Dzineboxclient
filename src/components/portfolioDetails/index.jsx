import React from "react";
import Hero from "./hero";
import CardGrid from "./cardGrid";
import { useParams } from "react-router";
import { portfolios } from "../portfolio/data";
import DetailHeader from "./header";

export default function PortfolioDetailsPage() {
  const { key } = useParams();
  const portfolio = portfolios.find((portfolio) => {
    return portfolio.id == key;
  });
  console.log("🚀 ~ PortfolioDetailsPage ~ key:", key);
  console.log("🚀 ~ portfolio ~ portfolio:", portfolio);
  const data = portfolio?.content;
  console.log("🚀 ~ PortfolioDetailsPage ~ data:", data);

  return (
    <div className="max-w-[1600px] mx-auto relative">
      <DetailHeader />
      <Hero
        bg={data.image}
        description={data.description}
        location={data.location}
        name={data.name}
      />
      <CardGrid data={data.images} />
    </div>
  );
}
