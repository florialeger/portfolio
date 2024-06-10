import React from "react";
import Title from "../../components/Title/Title";

const cv = () => {
  return (
    <body className="cv-page">
      <Title title = "cv"/>

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

export default cv;
