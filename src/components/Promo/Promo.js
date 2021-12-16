import React from "react";
import './Promo.css';
import kinder from '../../images/kinder.jpg';
function Promo() {
 

  return (
          <div className="promo">
            <img className="promo-img" src={kinder}  alt="kinder" />         
            </div>
  );
}

export default Promo;