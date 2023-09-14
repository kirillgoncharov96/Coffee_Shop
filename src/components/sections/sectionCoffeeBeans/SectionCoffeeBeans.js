

import LogoDivider from '../../dividers/Divider';
import img from '../../../assets/img/imageAboutBeans/girl_with_coffee.png';
import './sectionCoffeeBeans.scss';

const SectionCoffeeBeans = () => {

    return (
        <div className="container about__container">
            <div className="about__image">
                <img src={img} alt="girl with coffee" />
            </div>
            <div className="about__text-content">
                <h2 className="subtitle about__subtitle">
                    About our beans
                </h2>
                    <LogoDivider color='black'/>
                <p className="description about__description">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                </p>
                <p className="description about__description">
                    Afraid at highly months do things on at. 
                    Situation recommend objection do intention 
                    <br/>
                    so questions.
                </p>
                <p className="description about__description">
                    As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                    met spot shy want. Children me laughing we <br/>
                    prospect answered followed. At it went <br/>
                    is song that held help face.
                </p> 
            </div>
        </div>
    )

}

export default SectionCoffeeBeans;