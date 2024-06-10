import React from "react";
import Title from "../../components/Title/Title";


const About = () => {
  return (
    <body className="About-page">
    <Title title="About" />

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

export default About;
