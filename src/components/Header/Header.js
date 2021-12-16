import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/KitaLogoRund.jpg';
import NavForm from "../NavForm/NavForm";
import menu from '../../images/menu.svg';

function Navigation() {
  const [form, setForm] = React.useState(false);
 
  const onOpen =()=>{
    setForm(!form);
  }

  const closeForm=()=>{
    setForm(false);
  }

  return (
          <div className={`navigation ${form ? "navigation_type_dark":""}`} >
            <Link to="/" className="logo_type_desktop">
                <img src={logo} alt="logoDesktop" className="logo" />
            </Link>
                  <nav className="menu__header menu__header_size menu__header_type_desktop">
                    <Link to="/" className="menu__item_type_notdecoration"><a href="#aboutme"  className="menu__item-movies ">Wir über uns</a></Link>
                    <Link to="/info" className="menu__item_type_notdecoration" ><div className="menu__item-movies  menu__item_style_size">Informationen</div></Link>
                    <Link to="/einblicke" className="menu__item_type_notdecoration"><div className="menu__item-movies  menu__item_style_size">Einblicke</div></Link>
                    <Link to="/anschrift" className="menu__item_type_notdecoration"><div className="menu__item-movies  menu__item_style_size">Anschrift und Anfahrt</div></Link>
                  </nav>
                  <div className="menu__header_type_tablet" onClick={onOpen}>
                     <img className="menu__image" src ={menu} alt="menu" /> 
                  </div> 
            <NavForm form={ form } closeForm={closeForm}/>
            </div>
  );
}

export default Navigation;