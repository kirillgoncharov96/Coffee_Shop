
import HeaderHome from '../../headers/headerHome/HeaderHome';
import Navigation from '../../navigation/Navigation';
import SectionHomeAbout from '../../sections/sectionHomeAbout/SectionHomeAbout';
import SectionOurBest from '../../sections/sectionOurBest/SectionOurBest';
import Footer from '../../footers/Footer';

import './homePage.scss';

const HomePage = () => {


    return (
        <>
            <header className='home-header'>
                <Navigation/>
                <HeaderHome/>
            </header>
            <section className='home-about'>
                <SectionHomeAbout/>
            </section>
            <section className='our-best'>
                <SectionOurBest/>
            </section> 
            <footer className='footer'>
                <Footer/>
            </footer> 
        </>
    )


}


export default HomePage;