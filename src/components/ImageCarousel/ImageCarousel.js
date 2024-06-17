import React from "react";
import "./ImageCarousel.css";
import Image from "../Image/Image";

function ImageCarousel() {
  return (
    <div className="columns">
      <div className="column column-reverse">
        <Image img="/img/boxe.jpg" />
        <Image img="/img/chat.jpg" />
        <Image img="/img/chevalier.jpg" />
        <Image img="/img/chouette.jpg" />
        <Image img="/img/corbeau.jpg" />
        <Image img="/img/Torse.jpg" />
      </div>
      <div className="column">
        <Image img="/img/filet.jpg" />
        <Image img="/img/guitare.jpg" />
        <Image img="/img/jeuneChevre.jpg" />
        <Image img="/img/jeuneGun.jpg" />
        <Image img="/img/lievre.jpg" />
        <Image img="/img/poisson.jpg" />
      </div>
      <div className="column column-reverse">
        <Image img="/img/loutre.jpg" />
        <Image img="/img/raton.jpg" />
        <Image img="/img/profil.jpg" />
        <Image img="/img/rock.jpg" />
        <Image img="/img/soldat.jpg" />
        <Image img="/img/portraitLocks.jpg" />
      </div>
    </div>
  );
}

export default ImageCarousel;
