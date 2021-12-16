import React, {useState} from "react";
import './Info.css';
import OeffnungsZeiten from '../OeffnungsZeiten/OeffnungsZeiten';
import Termine from '../Termine/Termine';
import Anmeldung from '../Anmeldung/Anmeldung';
import Gebuer from '../Gebuer/Gebuer';

function Info() {
const [openZeit, setOpenZeit] =useState(true);
const [termine, setTermine] =useState(false);
const [anmeldung, setAnmeldung] =useState(false);
const [gebür, setGebür] =useState(false);

const handleTermine=()=>{
    setTermine(true);
    setOpenZeit(false);
    setAnmeldung(false);
    setGebür(false);
}
const handleOpenZeit=()=>{
    setTermine(false);
    setOpenZeit(true);
    setAnmeldung(false);
    setGebür(false);
}
const handleAnmeldung=()=>{
    setTermine(false);
    setOpenZeit(false);
    setAnmeldung(true);
    setGebür(false);
}
const handleGebür=()=>{
    setTermine(false);
    setOpenZeit(false);
    setAnmeldung(false);
    setGebür(true);
}
  return (
          <div className="info" >
                <div className="info__navi-buttons">
                    <button className="info__navi-button" onClick={handleOpenZeit}>Öffnungszeiten</button>
                    <button className="info__navi-button" onClick={handleTermine}>Termine</button>
                    <button className="info__navi-button" onClick={handleAnmeldung}>Anmeldung</button>
                    <button className="info__navi-button" onClick={handleGebür}>Gebüren</button>
                </div>
                <div className="info__container">
                  {openZeit && <OeffnungsZeiten />}
                  {termine && <Termine />}
                  {anmeldung && <Anmeldung />}
                  {gebür && <Gebuer />}
                </div>
          </div>
  );
}

export default Info;