import React from "react";
import Title from "../../components/Title/Title";
import Fondu from "../../components/Fondu/Fondu";

const Contact = () => {
  return (
    <body className="Contact-page">
      <Title title="Contact" />

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
      <Fondu/>
    </body>
  );
};

export default Contact;
