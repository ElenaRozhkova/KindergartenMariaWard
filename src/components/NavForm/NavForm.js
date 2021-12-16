import React from "react";
import './NavForm.css';
import { Link } from 'react-router-dom';
import close from '../../images/close.svg';

function NavForm({ form, closeForm }) {
 
  return (
        <section className="form" className={`form ${form ? "form__open" : ""}`}>
            <div className="form__toggle">
                <img className="close-image" src={close} alt="close" onClick={closeForm}/>
                <nav className="form__menu">
                    <Link to="/" style={{ textDecoration: 'none' }}><div className="form__item" onClick={closeForm}>Wir über uns</div></Link>
                    <Link to="/info" style={{ textDecoration: 'none' }}><div className="form__item" onClick={closeForm}>Informationen</div></Link>
                    <Link to="/aufnahmeantrag" style={{ textDecoration: 'none' }}><div className="form__item" onClick={closeForm}>Aufnameantrag</div></Link>
                    <Link to="/anschrift" style={{ textDecoration: 'none' }}><div className="form__item" onClick={closeForm}>Anschrift und Anfahrt</div></Link>
                </nav>
            </div>   
        </section>      

  );
}

export default NavForm;