
import { Helmet } from "react-helmet";
import Navigation from "../../navigation/Navigation";
import HeaderCoffeePage from "../../headers/headerCoffeePage/HeaderCoffeePage";
import SectionCoffeeBeans from "../../sections/sectionCoffeeBeans/SectionCoffeeBeans";
import SectionProductFilter from "../../sections/sectionProductFilter/SectionProductFilter";
import Footer from "../../footers/Footer";

import './coffeePage.scss';

const CoffeePage = () => {
    return (
        <>  
            <Helmet>
                <meta
                    name="description"
                    content="Our coffee list page"
                    />
                <title>Our coffee</title>
            </Helmet>
            <header className='header coffee-header'>
                <Navigation/>
                <HeaderCoffeePage/>
            </header>
            <section className='about'>
                <SectionCoffeeBeans/>   
            </section>
            <section className='products'>
               <SectionProductFilter/> 
            </section>
            <footer className='footer'>
                <Footer/>
            </footer>
        </>
    )

}

export default CoffeePage;