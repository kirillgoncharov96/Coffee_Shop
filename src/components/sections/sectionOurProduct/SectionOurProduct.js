
import CoffeeList from '../../coffeeFilter/CoffeeList';
import './sectionOurProduct.scss';

const SectionOurProduct = () => {

    return (
        <div className="container products__container">
            <CoffeeList best={false} />
        </div>
    )
}

export default SectionOurProduct;