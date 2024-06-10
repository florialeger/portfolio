import React from "react";
import Title from "../../components/Title/Title";

const Portfolio = () => {
  return (
    <body className="Portfolio-page">
      <Title title="Portfolio" />

      <div
        className="background-overlay"
        style={{
          backgroundColor: "#232323",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1000",
        }}
      />
    </body>
  );
};

export default Portfolio;
