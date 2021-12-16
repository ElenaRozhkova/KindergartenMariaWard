import React, {useState} from "react";
import './Einblicke.css';
import PhotoGaleria from '../PhotoGaleria/PhotoGaleria';

import alltagPhotos1 from '../../images/alltag/1.jpg';
import alltagPhotos2 from '../../images/alltag/2.jpg';
import alltagPhotos3 from '../../images/alltag/3.jpg';
import alltagPhotos4 from '../../images/alltag/4.jpg';
import alltagPhotos5 from '../../images/alltag/5.jpg';
import naturPhotos1 from '../../images/natur/10.jpg';
import naturPhotos2 from '../../images/natur/20.jpg';
import naturPhotos3 from '../../images/natur/30.jpg';

const alltagPhoto =[alltagPhotos1,alltagPhotos2,alltagPhotos3,alltagPhotos4,alltagPhotos5];
const naturPhoto =[naturPhotos1,naturPhotos2,naturPhotos3];


function Einblicke() {
const [alltag, setAlltag] =useState(true);
const [natur, setNatur] =useState(false);

const handleAlltagPhotos=()=>{
    setAlltag(true);
    setNatur(false);
}
const handleNaturPhotos=()=>{
    setAlltag(false);
    setNatur(true);
}

  return (
          <div className="einblicke" >
                <div className="info__navi-buttons"> 
                    <button className="info__navi-button" onClick={handleAlltagPhotos}>Unser Alltag</button>
                    <button className="info__navi-button" onClick={handleNaturPhotos}>Der Natur auf der Spur</button>
                </div>

                <div className="info__container">
                  {alltag && <PhotoGaleria title="Unser Alltag" photo ={alltagPhoto} />}
                  {natur && <PhotoGaleria title="Der Natur auf der Spur" photo={naturPhoto} />}
                </div>
          </div>
  );
}

export default Einblicke;