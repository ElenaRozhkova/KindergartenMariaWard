import './AboutAs.css';
import photo from '../../images/about.jpg';
import konzept from '../../contexts/Konzeption.pdf'

function AboutAs() {

    const handleClick = () => {
        window.open(konzept);

    }
  return (
    <>
        <section className="aboutme" id ="aboutme">
            <h2 className="aboutme__header">Wir über uns</h2>
            <div className="aboutme__content">
                <div className="aboutme__info">
                    <div>
                        <div className="aboutme__subtitle">Leitbild der Kindertagesstätte</div> 
                        <p className="aboutme__text">Die Kindertagesstätte Maria Ward versteht sich als ein Haus für Kinder. Das bedeutet,
                            dass die gesamte Arbeit durch die Lebenssituation der Kinder geprägt und von ihr
                            bestimmt wird. Die Wünsche und Bedürfnisse der Kinder stehen ebenso wie die
                            Fürsorge für das einzelne Kind immer im Vordergrund.</p>  
                        <p className="aboutme__text">Kennzeichnend für die Einrichtung ist auch, dass sie offen für alle ist. Das betrifft
                            sowohl die Kinder mit ihren Familien als auch andere interessierte Menschen. Zur Zeit
                            der Erstellung dieses Konzeptes besuchen Kinder aus 14 Ländern die
                            Kindertagesstätte. Vierzehn Nationalitäten und vierzehn unterschiedliche Kulturen
                            begegnen sich und haben die Möglichkeit, miteinander zu leben, voneinander zu lernen
                            und Gemeinschaft zu erfahren. Die Kindertagesstätte fordert dazu auf, dass sich alle
                            Kinder in ihrer kulturellen Vielfalt als eigenständige Persönlichkeiten achten und eine
                            Atmosphäre erleben, die die Bereitschaft einer belastbaren Solidarität in einer
                            gemeinsamen und friedfertigen Zukunft fördert.
                        </p>  
                     </div> 
                     <button className="aboutme__links" onClick={handleClick}>
                        Download der Konzeption unserer Kita 
                     </button>
                </div> 
                <img className="aboutme__photo" src={photo} alt="myphoto"/>
                
            </div>
        </section>
    </>
  );
}

export default AboutAs;