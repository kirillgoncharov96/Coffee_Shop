
import { Helmet } from 'react-helmet';
import HeaderHome from '../../headers/headerHome/HeaderHome';
import Navigation from '../../navigation/Navigation';
import SectionHomeAbout from '../../sections/sectionHomeAbout/SectionHomeAbout';
import SectionOurBest from '../../sections/sectionOurBest/SectionOurBest';
import Footer from '../../footers/Footer';

import './homePage.scss';

const HomePage = () => {


    return (
        <>  
            <Helmet>
				<meta name="description" content='Coffee beans shop "Everything You Love About Coffee"' />
				<title>Coffee House</title>
			</Helmet>
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