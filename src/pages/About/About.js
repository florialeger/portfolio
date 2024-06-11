import React from "react";
import "./About.css";
import Title from "../../components/Title/Title";

const About = () => {
  return (
    <body className="About-page">
   

   <div className="img-container">
        <img src="/img/portrait.jpg" alt="portrait" className="img-about" />
        <div className="background-overlay" />
      </div>
      <Title title="About" />
    </body>
  );
};

export default About;
