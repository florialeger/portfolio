import React, { useState } from "react";
import "./ReseauxButton.css";

function ReseauxButton() {
  const [isReseauOpen, setIsReseauOpen] = useState(false);

  return (
    <nav className="reseaux">
      <div className="reseaux-container">
        <ul>
          <li >
            <a
              href="https://www.instagram.com/floria.leger"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-container"
            >
              <img src="/icon/instagram.svg" alt="Instagram" className="icon" />{" "}
              instagram
            </a>
          </li>
          <li >
            <a
              href="https://twitter.com/juju999999997"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-container"
            >
              <img src="/icon/twitter.svg" alt="Twitter" className="icon" />{" "}
              twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="reseaux-reduced">
        <ul>
          <li >
            {" "}
            <a
              href="https://www.instagram.com/floria.leger"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-reduced"
            >
              <img src="/icon/instagram.svg" alt="Instagram" className="icon" />
            </a>
          </li>
          <li >
            <a
              href="https://twitter.com/juju999999997"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-reduced"
            >
              <img src="/icon/twitter.svg" alt="Twitter" className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ReseauxButton;
