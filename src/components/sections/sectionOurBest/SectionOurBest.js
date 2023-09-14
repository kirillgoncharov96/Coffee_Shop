import './sectionOurBest.scss';
import CoffeeList from '../../coffeeFilter/CoffeeList';

const SectionOurBest = () => {
    
    return (

        <div className="container our-best__container">
            <h2 className="subtitle our-best__subtitle">
                Our best
            </h2>
            <CoffeeList best={true}/>
        </div>   
        
    );

}

export default SectionOurBest;