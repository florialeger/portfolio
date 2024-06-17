import React from "react";
import ContactLink from "../../components/ContactLink/ContactLink";
import './ContactLinkContainer.css';

function ContactLinkContainer() {
  return (
    <div className="contact-link-container">
      <ContactLink href="https://github.com/florialeger" linkTo="GitHub" />
      <ContactLink href="https://www.linkedin.com/in/floria-leger-575b49309/" linkTo="Linkedin" />
      <ContactLink href="mailto:flleger@ensc.fr" linkTo="Email" />
    </div>
  );
}

export default ContactLinkContainer;
