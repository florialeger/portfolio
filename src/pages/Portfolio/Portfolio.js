import React from "react";
import Title from "../../components/Title/Title";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Title title="Portfolio" />
      <div className="portfolio-content">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
