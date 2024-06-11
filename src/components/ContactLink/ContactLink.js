import React from "react";
import "./ContactLink.css";

function ContactLink({ linkTo, href }) {
  return (
    <section className="contact-link">
      <a className="link-text" href={href}>
        {linkTo}
      </a>
      <div className="underline-text"></div>
    </section>
  );
}

export default ContactLink;
