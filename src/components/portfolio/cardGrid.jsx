import React from "react";
import Card from "./card";
import { portfolios } from "./data";
import { Link } from "react-router";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-2 w-full  gap-4 sm:px-10 lg:px-16 pb-20">
      {portfolios.map((portfolio, index) => (
        <Link
          to={`/portfolio/${portfolio.id}`}
          key={index}
          className="basis-full"
        >
          <Card
            name={portfolio.name}
            image={portfolio.image}
            location={portfolio.location}
            id={portfolio.id}
          />
        </Link>
      ))}
    </div>
  );
}
