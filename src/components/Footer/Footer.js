import React from "react";
import './Footer.css';
import mail from '../../images/mail.svg'
import phone from '../../images/phone.svg'
import logo from '../../images/KitaLogoRund.jpg';


function Footer({ setOnForm }) {
 

  return (
    <footer class="footer">
    <div class="footer__columns">
      <div class="footer__column footer__column_content_copyright">
       <img class="logo logo_place_footer" src={logo} alt="Логотип подвала" />
        <p class="footer__author"> &copy; Kita Maria Ward Fulda</p>
      </div>
       <nav class="footer__column footer__column_content_info">
          <h4 class="footer__column-heading"> Kita Maria Ward Fulda
          </h4>
          <div class="footer__column-links">
            <div class="footer__list-item"> <a href="#" class="footer__column-link">Lindenstrasse 23 </a></div>
            <div class="footer__list-item"> <a href="#" class="footer__column-link">36037 Fulda</a></div>
          </div>
        </nav>
        <nav class="footer__column footer__column_content_social">
          <h4 class="footer__column-heading"> E-Mail Kontakt
          </h4>
          <ul class="footer__column-links">
          <li class="footer__list-item">
            <a href="#" class="footer__column-link"><img class="footer__social-icon" src={mail} alt="mail" />
            kita.mariaward@marienschule-fulda.de</a></li>
          <li class="footer__list-item">
            <a href="#" class="footer__column-link"><img class="footer__social-icon" src={phone} alt="phone" />
            0661 / 79814</a></li>
          </ul>
        </nav>
        <nav class="footer__author_type_mobile">
           &copy; Kita Maria Ward Fulda
        </nav>
    </div>
  
  
  </footer>
  );
}

export default Footer;