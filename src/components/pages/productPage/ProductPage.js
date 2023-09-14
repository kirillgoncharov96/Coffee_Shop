

import Navigation from '../../navigation/Navigation';
import HeaderCoffeePage from '../../headers/headerCoffeePage/HeaderCoffeePage';
import SectionProductById from '../../sections/sectionProductById/SectionProductById';
import Footer from '../../footers/Footer';

import './productPage.scss';


const ProductPage = () => {

    return (
        <>
            <header className='header coffee-header'>
                <Navigation/>
                <HeaderCoffeePage/>
            </header>
            <section className='products'>
                <SectionProductById/>
            </section>
            <footer className='footer footer__products'>
                <Footer/>
            </footer>
        </>
    )

}

export default ProductPage;