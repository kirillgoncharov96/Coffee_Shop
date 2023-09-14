import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavBeansBlack, NavBeansWhite } from '../../assets/img/icons';

import './navigation.scss';


const Navigation = (props) => {
    const {color} = props;
    const [open, setOpen] = useState(false);
    const logo = color === "black" ? NavBeansBlack : NavBeansWhite;

    const onHandleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open])

    return (
        <nav className='nav'>
            <Link className='nav__logo-link' to="/">
                <img src={logo} alt="coffee beans logo" className='nav__logo-img'/>
            </Link>
            <div className={`nav__list ${open ? "nav__list_burger-open" : ""}`}>
                <NavLink className={({isActive}) =>(isActive ? "nav__item_active" : "nav__item")} to="/">Coffee house</NavLink>
                <NavLink className={({isActive}) =>(isActive ? "nav__item_active" : "nav__item")} to="/coffee">Our coffee</NavLink>
                <NavLink className={({isActive}) =>(isActive ? "nav__item_active" : "nav__item")} to="/our-goods">For your pleasure</NavLink>
            </div>
            <div className={`nav__burger ${open ? "nav__burger_active" : ""}`} onClick={() => onHandleMenu()}></div>
        </nav> 
    );

}

export default Navigation;