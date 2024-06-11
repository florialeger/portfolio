import React, { useState } from "react";
import "./ReseauxButton.css";
import { ReactComponent as TwitterIcon } from "../../icon/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../icon/instagram.svg";

function ReseauxButton() {

  return (
    <nav className="reseaux">
      <div className="reseaux-container">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/floria.leger"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-container"
            >
              <InstagramIcon className="icon" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/juju999999997"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-container"
            >
              <TwitterIcon className="icon" />
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="reseaux-reduced">
        <ul>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/floria.leger"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-reduced"
            >
              <InstagramIcon className="icon" />
              
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/juju999999997"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-reduced"
            >
              <TwitterIcon className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ReseauxButton;
