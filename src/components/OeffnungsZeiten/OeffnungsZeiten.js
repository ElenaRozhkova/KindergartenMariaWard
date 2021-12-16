import React from "react";
import './OeffnungsZeiten.css';

function OeffnungsZeiten() {

  return (
          <div className="oeffnungsZeiten" >
                <div className="oeffnungsZeiten__title" > Öffnungszeiten </div>
                <div className="oeffnungsZeiten__subtitle" > Öffnungszeiten für Kinder ab 3 Jahre bis zum Schuleintritt </div>
                <div className="oeffnungsZeiten__gruppe" > Zwei altersgemischte Gruppen </div>
                <div className="oeffnungsZeiten__text" > Mo.-Do. von 8.00 - 17:00 Uhr </div>
                <div className="oeffnungsZeiten__text" > Fr. von 8.00 - 16:00 Uhr </div>
                <div className="oeffnungsZeiten__text" > Frühbetreuung ab 7.30 Uhr</div>
          </div>
  );
}

export default OeffnungsZeiten;