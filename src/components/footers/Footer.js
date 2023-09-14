import './footer.scss';

import LogoDivider from '../dividers/Divider';
import Navigation from '../navigation/Navigation';


const Footer = () => {
    return (
        <div className='container footer__container'>
            <Navigation color="black"/>
            <LogoDivider/>
        </div>
    );

}

export default Footer;