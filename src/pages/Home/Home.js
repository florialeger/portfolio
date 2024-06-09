import React from "react";
import "./Home.css";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <body className="Home-page">
      <div
        className="background-image"
        style={{
          backgroundImage: "url(/img/planche1.PNG)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />

      <div
        className="background-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "0",
        }}
      />

      <Title title="Floria Leger" />
    </body>
  );
};

export default Home;
