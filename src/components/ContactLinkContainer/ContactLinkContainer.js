import React from "react";
import ContactLink from "../../components/ContactLink/ContactLink";
import './ContactLinkContainer.css';

function ContactLinkContainer() {
  return (
    <div className="contact-link-container">
      <ContactLink href="" linkTo="GitHub" />
      <ContactLink href="" linkTo="Linkedin" />
      <ContactLink href="" linkTo="Email" />
    </div>
  );
}

export default ContactLinkContainer;
