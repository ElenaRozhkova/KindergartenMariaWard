import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Anschrift.css';
import mail from '../../images/mail2.svg'
import phone from '../../images/phone2.svg'
import map from '../../images/fuldamap.png'


function Anschrift(props) {
  

  return (
    <div class="anschrift">
        <div className="anschrift__title"> Anschrift und Anfahrt </div>
        <div class="anschrift__column anschrift__column_content_info">
          <h4 class="anschrift__column-heading"> Kita Maria Ward Fulda
          </h4>
          <div class="anschrift__column-links">
            <div class="anschrift__list-item"> <a href="#" class="anschrift__column-link">Lindenstrasse 23 </a></div>
            <div class="anschrift__list-item"> <a href="#" class="anschrift__column-link">36037 Fulda</a></div>
          </div>
        </div>
        <nav class="anschrift__column anschrift__column_content_social">
          <h4 class="anschrift__column-heading"> E-Mail Kontakt
          </h4>
          <ul class="anschrift__column-links">
          <li class="anschrift__list-item">
            <a href="#" class="anschrift__column-link"><img class="anschrift__social-icon" src={mail} alt="mail" />
            kita.mariaward@marienschule-fulda.de</a></li>
          <li class="anschrift__list-item">
            <a href="#" class="anschrift__column-link"><img class="anschrift__social-icon" src={phone} alt="phone" />
            0661 / 79814</a></li>
          </ul>
        </nav>
      <img className='anschrift__fuldamap' src={map} alt='fulda' />
    </div>
  );
}

export default Anschrift;