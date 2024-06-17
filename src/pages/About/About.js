import React from "react";
import "./About.css";
import Title from "../../components/Title/Title";
import Overlay from "../../components/Overlay/Overlay";

const About = () => {
  return (
    <div className="About-page">
      <div className="img-container">
        <img src="/img/portrait.jpg" alt="portrait" className="img-about" />
        <Overlay />
      </div>
      <div className="all-text-about">
        <Title title="About me..." />
        <div className="about-descr-container">
          <section>
            <p>
              ... I am currently a first-year student at ENSC, a cognitive
              engineering school located in Bordeaux. I have a strong passion
              for UI and UX design, and I find the accessibility aspect
              particularly interesting. This background has given me a solid
              foundation in designing user-friendly interfaces.
            </p>
          </section>
          <section>
            <p>
              {" "}
              I've been drawing for nearly twenty years, and my enthusiasm for
              it has never waned. I draw inspiration from many talented artists
              to push the boundaries of my own artistic capabilities. Drawing
              and design share a lot in common, and my passion for both stems
              from my desire to create. While I have some experience providing
              services to clients, these projects were not professional or paid.
              Nevertheless, they taught me the basics of managing deadlines,
              handling client feedback, and more. Although I draw a lot for
              myself, my favorite moments are when I create art for others.
            </p>{" "}
          </section>
          <section>
            <p>
              Recently, I have been increasingly interested in web design. I
              believe that my current drawing skills can be a significant asset
              in this field. Beyond the assignments required by my school, I
              love to explore new design projects on my own. My desire to
              improve and progress is driven by a genuine passion for creation.
              I particularly enjoy working with CSS, finding joy in the
              intricacies of styling web pages.{" "}
            </p>{" "}
          </section>
          <section>
          <p>
            In addition to my academic and artistic pursuits, I have been
            playing volleyball for eight years. This sport has taught me the
            importance of teamwork and pushing myself beyond my limits. I also
            have a keen interest in photography, videography, and
            animation—essentially anything related to creation. These hobbies
            allow me to continuously expand my creative horizons.
          </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
