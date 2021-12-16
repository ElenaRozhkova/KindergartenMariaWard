import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Anschrift.css';
import mail from '../../images/mail2.svg'
import phone from '../../images/phone2.svg'

import LocationPin from '../LocationPin/LocationPin';


function Anschrift(props) {
  
  const AnyReactComponent = ({ text }) => <div><img src="YOUR-IMG-SRC" className="YOUR-IMG-CLASS" /></div>;
  const [center, setCenter]=React.useState({lat: 50.555809, lng: 9.680845});

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
        <div className="map">
    <h2 className="map-h2">Maria Ward Kindergarten</h2>
    <div style={{ height: '400px', width: '600px' }}>
    <GoogleMapReact
       apiKey={'YOUR_GOOGLE_MAP_API_KEY'} 
        bootstrapURLKeys = { {  key : ""  } } 
        defaultCenter = { center } 
        defaultZoom = { 11} 
        
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Google Map'}
        />
      </GoogleMapReact>
    </div>
  </div>
    </div>
  );
}

export default Anschrift;