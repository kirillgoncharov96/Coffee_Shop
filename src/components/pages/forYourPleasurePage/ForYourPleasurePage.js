
import { Helmet } from "react-helmet";
import Navigation from "../../navigation/Navigation";
import HeaderForYourPleasurePage from "../../headers/headerForYourPleasurePage/HeaderForYourPleasurePage";
import SectionOurGoods from "../../sections/sectionOurGoods/SectionOurGoods";
import SectionOurProduct from "../../sections/sectionOurProduct/SectionOurProduct";
import Footer from "../../footers/Footer";

import './forYourPleasurePage.scss';

const ForYourPleasurePage = () => {

    return (
        <>  
            <Helmet>
                <meta
                    name="description"
                    content="Our goods list page"
                    />
                <title>For your pleasure</title>
            </Helmet>
            <header className='header goods-header'>
                <Navigation/>
                <HeaderForYourPleasurePage/>
            </header>
            <section className='about'>
                <SectionOurGoods/>  
            </section>
            <section className='products'>
                <SectionOurProduct/>
            </section>
            <footer className='footer'>
                <Footer/>
            </footer>
        </>
    )

}

export default ForYourPleasurePage;