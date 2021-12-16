import React from "react";
import './Anmeldung.css';
import aufnahmeantrag from '../../contexts/Aufnahmeantrag.pdf'

function Anmeldung() {
    const handleClick = () => {
        window.open(aufnahmeantrag);
    }
  return (
    <div className="anmeldung" >
    <div className="anmeldung__title" > Anmeldung </div>
    <div className="anmeldung__subtitle" > “Und/oder”-Kriterien für die Aufnahme </div>
    <ul className="anmeldung__texts">
        <li className="anmeldung__text">Wohnortnähe/ Einzugsgebiet</li>
        <li className="anmeldung__text">Geschwisterkinder</li>
        <li className="anmeldung__text">von Beratungsstellen überwiesene Kinder</li>
        <li className="anmeldung__text">vom Schulbesuch zurückgestellte entwicklungsverzögerte Kinder</li>
    </ul>
    <div className="anmeldung__subtitle">Anmeldung</div> 
    <div className="anmeldung__text">Bitte nehmen Sie rechtzeitig telefonisch Kontakt auf, 
            wenn Sie Ihr Kind bei uns vormerken wollen. Bedenken Sie, dass eine Voranmeldung 
            für den Kindergarten mindestens 1 Jahr vor dem 3. Geburtstag Ihres Kindes erfolgen sollte. 
            Nach der Datenaufnahme und dem Erstkontakt findet ein ausführliches Erstgespräch statt, 
            damit Sie genügend Information über die Konzeption des Kindergartens bekommen.</div>
    <div className="anmeldung__subtitle anmeldung__subtitle_type_padding"> Aufnahmeantrag </div>
    <button className="aufnahmeantrag__download" onClick={handleClick}>
        Aufnahmeantrag Download 
    </button>
    </div>
    
  );
}

export default Anmeldung;