import React from "react";
import "./Home.css";
import Title from "../../components/Title/Title";
import Overlay from "../../components/Overlay/Overlay";

const Home = () => {
  return (
    <body className="Home-page">
      <div
        className="background-image"
        style={{
          backgroundImage: "url(/img/planche1.PNG)",
        }}
      />

      <Overlay />

      <Title title="Floria Leger" />
    </body>
  );
};

export default Home;
