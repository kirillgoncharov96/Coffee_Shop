
import { useState } from 'react';

import CoffeeList from '../../coffeeFilter/CoffeeList';

import './sectionProductFilter.scss';

const SectionProductFilter = () => {
    const [input, setInput] = useState('');
    const [country, setCountry] = useState(null);
    const [click, setClick] = useState(false);

    const onSearch = (coun) => {
        if (click && coun === country) {
            setClick(false)
            setCountry(null)
        } else {
            setClick(true)
            setCountry(coun)
        }
    }

    const activeClass = "filters__button filters__button_active";

    return (
        <div className="container products__container">
            <div className="filters">
                <div className="filters__search">
                    <label htmlFor="filters__input">Lookiing for</label>
                    <input 
                        type="text" 
                        className="filters__input" 
                        id="filters__input" 
                        placeholder="start typing here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        tabIndex={0}/>
                </div>
                <div className="filters__countries">
                    <label>Or filter</label>
                    <div className="filters__list">
                        <button className={country === "Brazil" ? `${activeClass}` : "filters__button"} onClick={() => onSearch('Brazil')}>
                            <span>Brazil</span>           
                        </button>
                        <button className={country === "Kenya" ? `${activeClass}` : "filters__button"} onClick={() => onSearch('Kenya')}>
                            <span>Kenya</span>
                        </button>
                        <button className={country === "Columbia" ? `${activeClass}` : "filters__button"} onClick={() => onSearch('Columbia')}>
                            <span>Columbia</span>
                        </button>
                    </div>
                </div>
            </div>
                <CoffeeList best={false} input={input} country={country}/>
        </div>   
    )
}

export default SectionProductFilter;