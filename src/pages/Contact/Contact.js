import React from "react";
import "./Contact.css";
import Title from "../../components/Title/Title";
import Fondu from "../../components/Fondu/Fondu";
import ContactLinkContainer from "../../components/ContactLinkContainer/ContactLinkContainer";

const Contact = () => {
  return (
    <div className="Contact-page">
      <Title title="Contact" />
      <ContactLinkContainer />
      <Fondu />
    </div>
  );
};

export default Contact;
