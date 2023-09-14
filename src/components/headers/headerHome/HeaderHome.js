import { Link } from 'react-router-dom';
import './headerHome.scss';
import LogoDivider from '../../dividers/Divider';


const HeaderHome = () => {


    return (
        <div className="container home-header__container">
            <h1 className="title home-header__title">
                Everything You Love About Coffee
            </h1>
                <LogoDivider color="white"/>
            <h2 className="subtitle home-header__subtitle">
                We makes every day full of energy and taste
            </h2>
            <h2 className="subtitle home-header__subtitle">
                Want to try our beans?
            </h2>
            <Link 
                className="home-header__button" 
                to="/coffee">
                    More
            </Link>
        </div>
    );

}

export default HeaderHome;