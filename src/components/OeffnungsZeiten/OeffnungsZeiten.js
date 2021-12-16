import React from "react";
import './OeffnungsZeiten.css';

function OeffnungsZeiten() {

  return (
          <div className="oeffnungsZeiten" >
                <div className="oeffnungsZeiten__title" > Öffnungszeiten </div>
                <div className="oeffnungsZeiten__subtitle" > Öffnungszeiten für Kinder ab 3 Jahre bis zum Schuleintritt </div>
                <div className="oeffnungsZeiten__gruppe" > Wir sind für Ihre Kinder und Sie da: </div>
                <div className="oeffnungsZeiten__text" > Mo.-Do. von 7:15 - 12:00 Uhr </div>
                <div className="oeffnungsZeiten__text" > max. bis 13:15 Uhr und 14:00 – 17:00 Uhr </div>
                <div className="oeffnungsZeiten__text" > Fr. von 7:15 - 16:00 Uhr </div>
                <div className="oeffnungsZeiten__gruppe" > Tagesplatz </div>
                <div className="oeffnungsZeiten__text" > Mo.-Do. von 7:15 - 17:00 Uhr </div>
                <div className="oeffnungsZeiten__text" > Fr. von 7:15 - 16:00 Uhr </div>
          </div>
  );
}

export default OeffnungsZeiten;